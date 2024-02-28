import React, {
  useState,
  useEffect,
  useLayoutEffect,
  useContext,
  useCallback,
} from "react";
import { View, Alert } from "react-native";
import { Colors } from "../constants/styles";
import { GroupsContext } from "../Context/groups-context";
import { auth } from "../util/firebase/auth";
import { isAdmin } from "../util/firebase/firestore/groups";
import { fetchGroupTasks } from "../util/firebase/firestore/tasks";
import IconButton from "../components/ui/IconButton";
import TasksOutput from "../components/TasksOutput/TaskOuput";
import Error from "../components/ui/Error";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import TranslatedText from "../Context/language-context";
import { useTheme } from "../Context/theme-context";

function GroupScreen({ route, navigation }) {
  const currentUser = auth.currentUser.uid;
  const groupsCtx = useContext(GroupsContext);
  const groupId = route.params?.groupId;
  const selectGroup = groupsCtx.groups.find((group) => group.id === groupId);
  const selectedGroup = groupsCtx.groups.find((group) => group.id === groupId);
  const groupTasks = selectedGroup ? selectedGroup.tasks : [];
  const { language } = useTheme();

  const [isAdminStatus, setIsAdminStatus] = useState(false);
  const [initialLoad, setInitialLoad] = useState(true);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const updateText = language === "en" ? "Deleted Group" : "Grupo Deletado";
  const updateSubText =
    language === "en"
      ? "You no longer have access to this group"
      : "Você não tem mais acesso a este grupo";

  useEffect(() => {
    const getTasks = async () => {
      try {
        const stopListening = await fetchGroupTasks(groupId, (fetchedTasks) => {
          groupsCtx.setTasks(groupId, fetchedTasks);
          //console.log(JSON.stringify(fetchedTasks));
          if (initialLoad) {
            setIsLoading(false);
            setInitialLoad(false);
          }
        });
        return () => {
          stopListening();
        };
      } catch (error) {
        console.error("Error fetching tasks:", error);
        setError("Could not fetch tasks. Please try again.");
        setIsLoading(false);
      }
    };

    getTasks();
  }, []);

  useEffect(() => {
    if (!selectGroup) {
      navigation.navigate("Groups");
      Alert.alert(updateText, updateSubText);
    }
  }, [navigation, selectGroup]);

  useEffect(() => {
    const fetchAdminStatus = async () => {
      if (groupId && currentUser) {
        const unsubscribe = isAdmin(groupId, currentUser, setIsAdminStatus);
        return () => unsubscribe();
      }
    };
    fetchAdminStatus();
  }, [groupId, currentUser]);

  const renderHeaderButtons = useCallback(() => {
    return (
      <View style={{ flexDirection: "row" }}>
        {isAdminStatus && (
          <IconButton
            icon={"create-outline"}
            color={Colors.primary100}
            size={24}
            onPress={() => {
              navigation.navigate("ManageGroupScreen", {
                editedGroupId: groupId,
              });
            }}
          />
        )}
        <IconButton
          icon={"people-outline"}
          color={Colors.primary100}
          size={24}
          onPress={() => {
            navigation.navigate("GroupMembersScreen", {
              groupId: groupId,
            });
          }}
        />
        {isAdminStatus && (
          <IconButton
            icon={"add-circle-outline"}
            color={Colors.primary100}
            size={24}
            onPress={() => {
              navigation.navigate("ManageTasksScreen", {
                groupId: groupId,
              });
            }}
          />
        )}
      </View>
    );
  }, [isAdminStatus, navigation, groupId]);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: `${selectGroup?.title || "Group"}`,
      headerRight: renderHeaderButtons,
    });
  }, [navigation, selectGroup, renderHeaderButtons]);

  if (error && !isLoading) {
    return <Error message={error} />;
  }

  if (isLoading) {
    return <LoadingOverlay />;
  }

  return (
    <TasksOutput
      tasks={groupTasks}
      firstText={
        <TranslatedText
          enText={
            "Oops! It looks like you don't have any tasks registered yet."
          }
          ptText={
            "Ops! Parece que você ainda não tem nenhuma tarefa registrada."
          }
        />
      }
      secondText={
        <TranslatedText
          enText={"Press the button below to create your first task now!"}
          ptText={
            "Pressione o botão abaixo para criar sua primeira tarefa agora!"
          }
        />
      }
      title={<TranslatedText enText={"Add Tasks"} ptText={"Add Tarefas"} />}
      groupId={groupId}
      onPress={() => {
        if (isAdminStatus) {
          navigation.navigate("ManageTasksScreen", {
            groupId: groupId,
          });
        } else {
          Alert.alert(
            "Access Denied",
            "You are not an admin and cannot perform this action."
          );
        }
      }}
    />
  );
}

export default GroupScreen;
