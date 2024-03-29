import React, {
  useLayoutEffect,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import { GroupsContext } from "../Context/groups-context";
import MembersOutput from "../components/MembersOutput/MembersOutput";
import {
  fetchGroupMembers,
  removeMember,
  updateAdminStatus,
} from "../util/firebase/firestore/members";
import { isAdmin } from "../util/firebase/firestore/groups";
import Error from "../components/ui/Error";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { View } from "react-native";
import IconButton from "../components/ui/IconButton";
import { Colors } from "../constants/styles";
import { auth } from "../util/firebase/auth";
import { useTheme } from "../Context/theme-context";

function GroupMembersScreen({ navigation, route }) {
  const { language } = useTheme();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [initialLoad, setInitialLoad] = useState(true);
  const [isAdminStatus, setIsAdminStatus] = useState(false);

  const groupId = route.params?.groupId;
  const groupsCtx = useContext(GroupsContext);
  const currentUser = auth.currentUser.uid;
  const nameGroup = language === 'en' ? "Members" : 'Membros';

  useEffect(() => {
    const fetchAdminStatus = async () => {
      if (groupId && currentUser) {
        const unsubscribe = isAdmin(groupId, currentUser, setIsAdminStatus);
        return () => unsubscribe();
      }
    };
    fetchAdminStatus();
  }, []);

  useEffect(() => {
    const getMembers = async () => {
      try {
        const stopListening = await fetchGroupMembers(
          groupId,
          (fetchedMembers) => {
            groupsCtx.setMembers(groupId, fetchedMembers);
            if (initialLoad) {
              setIsLoading(false);
              setInitialLoad(false);
            }
          }
        );
        return () => {
          stopListening();
        };
      } catch (error) {
        console.error("Error fetching members:", error);
        setError("Could not fetch members. Please try again.");
        setIsLoading(false);
      }
    };

    getMembers();
  }, [initialLoad]);

  // useEffect(() => {
  //   let isMounted = true;
  //   setIsLoading(true);

  //   const getGroupMembers = async () => {
  //     try {
  //       const stopListening = await fetchGroupMembers(
  //         groupId,
  //         (fetchedMembers) => {
  //           if (isMounted) {
  //             groupsCtx.setMembers(groupId, fetchedMembers);
  //             setIsLoading(false);
  //           }
  //         }
  //       );

  //       return () => {
  //         isMounted = false;
  //         stopListening();
  //       };
  //     } catch (err) {
  //       if (isMounted) {
  //         console.error("Error fetching group members:", err);
  //         setError("Could not fetch group members. Please try again.");
  //         setIsLoading(false);
  //       }
  //     }
  //   };

  //   getGroupMembers();

  //   return () => {
  //     isMounted = false;
  //   };
  // }, [groupId, groupsCtx]);

  useLayoutEffect(() => {
    const selectGroup = groupsCtx.groups.find((group) => group.id === groupId);
    navigation.setOptions({
      title: `${nameGroup}`,
      headerRight: renderHeaderButtons,
    });
  }, [navigation, groupId, groupsCtx.groups, renderHeaderButtons]);

  const renderHeaderButtons = useCallback(() => {
    return (
      <View style={{ flexDirection: "row" }}>
        {isAdminStatus ? (
          <IconButton
            icon={"person-add-outline"}
            color={Colors.primary100}
            size={24}
            onPress={() => {
              navigation.navigate("Add Member", {
                groupId: groupId,
              });
            }}
          />
        ) : null}
      </View>
    );
  }, [isAdmin, navigation, isAdminStatus]);

  if (error && !isLoading) {
    return <Error message={error} />;
  }

  if (isLoading) {
    return <LoadingOverlay />;
  }

  // Find the selected group to get its members
  const selectedGroup = groupsCtx.groups.find((group) => group.id === groupId);
  const groupMembers = selectedGroup ? selectedGroup.members : [];

  async function deleteMemberHandler(memberId) {
    setIsLoading(true);
    try {
      await removeMember(memberId);
      groupsCtx.deleteMember(groupId, memberId);
    } catch (error) {
      setError("Could not delete member - please try again later");
      setIsLoading(false);
    }
  }

  async function onChangeAdminStatusHandler(memberId) {
    setIsLoading(true);
    try {
      groupsCtx.updateAdmin(groupId, memberId);
      await updateAdminStatus(memberId);
    } catch {
      setError("Could not delete member - please try again later");
      setIsLoading(false);
    }
  }
  
  // const handleRemoveMember = (memberId) => {
  //   removeMember(memberId)
  //     .then(() => {
  //       const updatedMembers = groupsCtx.groups
  //         .find((group) => group.id === groupId)
  //         .members.filter((member) => member.id !== memberId);

  //     })
  //     .catch((error) => {
  //       console.error("Error removing member:", error);
  //     });
  // };

  return (
    <MembersOutput
      members={groupMembers}
      onRemoveMember={deleteMemberHandler}
      onChangeAdminStatus={onChangeAdminStatusHandler}
      groupId={groupId}
    />
  );
}

export default GroupMembersScreen;
