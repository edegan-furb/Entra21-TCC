import { auth, db } from "../firebaseConfig";
import {
  collection,
  query,
  where,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
  onSnapshot,
  getDoc,
} from "firebase/firestore";
import { addMember, setAdminStatus } from "./members";

// Function to create a new group in the Firestore database
export async function createGroup(title) {
  try {
    // Retrieve the UID of the currently authenticated user
    const userRef = auth.currentUser.uid;

    // Add a new document to the "groups" collection with the given title
    const group = await addDoc(collection(db, "groups"), {
      title: title,
    });

    // Retrieve the generated document ID of the new group
    const groupRef = group.id;

    // Add the current user as a member of the newly created group
    await addMember(groupRef, userRef);

    // Assign the current user as an admin of the newly created group
    setAdminStatus(groupRef, userRef, true);

    console.log("Group created successfully.");

    // return the new group's ID
    return groupRef;
  } catch (error) {
    console.error("Error updating group document:", error.message);
    throw error;
  }
}

// Function to delete a group and its associated members from the Firestore database.
export async function deleteGroup(groupId) {
  try {
    // Create a reference to the specified group document
    const groupDocRef = doc(db, "groups", groupId);

    // Delete the group document
    await deleteDoc(groupDocRef);

    // Construct a query to find all members associated with the group
    const membersQuery = query(
      collection(db, "members"),
      where("group", "==", groupDocRef)
    );

    // Execute the query and get a snapshot of the resulting documents
    const membersSnapshot = await getDocs(membersQuery);

    // Map over the member documents, deleting each one
    const deleteMembersPromises = membersSnapshot.docs.map(
      async (memberDoc) => {
        await deleteDoc(memberDoc.ref);
      }
    );

    // Construct a query to find all tasks associated with the group
    const tasksQuery = query(
      collection(db, "tasks"),
      where("group", "==", groupDocRef)
    );

    // Execute the query and get a snapshot of the resulting documents for tasks
    const tasksSnapshot = await getDocs(tasksQuery);

    // Wait for all deletion promises (members and tasks) to resolve
    const deleteTasksPromises = tasksSnapshot.docs.map(async (taskDoc) => {
      await deleteDoc(taskDoc.ref);
    });

    await Promise.all([...deleteMembersPromises, ...deleteTasksPromises]);
    console.log(
      "Group and all its members and tasks were deleted successfully."
    );
  } catch (error) {
    console.error(
      "Error deleting group and all its members and tasks:",
      error.message
    );
    throw error;
  }
}

// Function to update an existing group.
export async function updateGroup(groupId, newTitle) {
  try {
    // Create a reference to the specified group document
    const groupDocRef = doc(db, "groups", groupId);

    // Update the group's title
    await updateDoc(groupDocRef, {
      title: newTitle,
    });
    console.log("Group updated successfully.");
  } catch (error) {
    console.error("Error updating group title:", error.message);
    throw error;
  }
}

// Function to check if a user is a member of a given group.
export async function isMember(groupId, userId) {
  try {
    // Create references to the user and group documents
    const userRef = doc(db, "users", userId);
    const groupRef = doc(db, "groups", groupId);

    // Query the 'members' collection for documents matching both userId and groupId
    const membershipQuery = query(
      collection(db, "members"),
      where("user", "==", userRef),
      where("group", "==", groupRef)
    );

    // Execute the query
    const querySnapshot = await getDocs(membershipQuery);

    // Check if any documents were returned
    return !querySnapshot.empty;
  } catch (error) {
    console.error("Error checking membership:", error.message);
    throw error;
  }
}

// Function to check if a user is an admin of a given group.
export async function isAdmin(groupRef, userRef, callback) {
  try {
    // Create references to the specified group and user documents
    const groupDocRef = doc(db, "groups", groupRef);
    const userDocRef = doc(db, "users", userRef);

    // Construct a query to find the membership document for the user in the group
    const q = query(
      collection(db, "members"),
      where("group", "==", groupDocRef),
      where("user", "==", userDocRef)
    );

    // Set up a real-time listener on the query
    const unsubscribe = onSnapshot(
      q,
      (querySnapshot) => {
        if (!querySnapshot.empty) {
          // Extract admin status from the first (and only) document in the snapshot
          const memberData = querySnapshot.docs[0].data();
          const isAdmin = memberData.admin;
          console.log("Member admin info updated.");
          callback(isAdmin);
        } else {
          // Handle case where the member document is not found
          console.log("Member document not found.");
          callback(false);
        }
      },
      (error) => {
        console.error("Error listening to admin status:", error);
        throw error;
      }
    );

    // Return the unsubscribe function to allow caller to stop listening
    return unsubscribe;
  } catch (error) {
    console.error("Error setting up admin status listener:", error.message);
    throw error;
  }
}

// Function to fetch all groups a user is a member of
export async function fetchGroups(callback) {
  // Get the UID of the current authenticated user
  const userRef = auth.currentUser.uid;
  // Create a Firestore document reference for the user
  const userDocRef = doc(db, "users", userRef);

  // Set up a listener for changes in the user's memberships
  const stopListeningUserMemberships = onSnapshot(
    query(collection(db, "members"), where("user", "==", userDocRef)),
    async (userMembersSnapshot) => {
      const groupsData = await Promise.all(
        userMembersSnapshot.docs.map(async (memberDoc) => {
          const groupRef = memberDoc.data().group;

          // Fetch group data
          const groupSnapshot = await getDoc(groupRef);
          const groupData = { id: groupRef.id, ...groupSnapshot.data() };

          // Fetch tasks associated with this group
          const tasksQuery = query(
            collection(db, "tasks"),
            where("group", "==", groupRef)
          );
          const tasksSnapshot = await getDocs(tasksQuery);
          const tasks = await Promise.all(
            tasksSnapshot.docs.map(async (taskDoc) => {
              const taskData = taskDoc.data();

              // Fetch objectives for each task
              const objectivesQuery = query(
                collection(db, `tasks/${taskDoc.id}/objectives`)
              );
              const objectivesSnapshot = await getDocs(objectivesQuery);
              const objectives = objectivesSnapshot.docs.map(
                (objectiveDoc) => ({
                  id: objectiveDoc.id,
                  ...objectiveDoc.data(),
                })
              );

              objectives.sort((a, b) => a.value.localeCompare(b.value));

              // Fetch the designated user's username
              let designatedUserUsername = "";
              if (taskData.designatedUser) {
                const userDocSnapshot = await getDoc(taskData.designatedUser);
                if (userDocSnapshot.exists()) {
                  const userData = userDocSnapshot.data();
                  designatedUserUsername = userData.username;
                }
              }

              return {
                id: taskDoc.id,
                title: taskData.title,
                description: taskData.description,
                date: taskData.date.toDate(),
                completed: taskData.completed,
                owner: taskData.owner,
                designatedUser: designatedUserUsername,
                group: taskData.group.id,
                objectives: objectives,
              };
            })
          );

          tasks.sort((a, b) => a.title.localeCompare(b.title));

          const membersQuery = query(
            collection(db, "members"),
            where("group", "==", groupRef)
          );

          const membersSnapshot = await getDocs(membersQuery);
          const members = await Promise.all(
            membersSnapshot.docs.map(async (docSnapshot) => {
              const memberData = docSnapshot.data();
              const userDocRef = memberData.user;

              // Fetch user data for each member
              const userSnapshot = await getDoc(userDocRef);
              const userData = userSnapshot.data();

              // Combine member and user data
              return {
                id: docSnapshot.id,
                admin: memberData.admin,
                group: memberData.group,
                user: memberData.user.id,
                email: userData.email,
                username: userData.username,
              };
            })
          );

          members.sort((a, b) => a.username.localeCompare(b.username));

          return { ...groupData, tasks: tasks, members: members };
        })
      );

      // Invoke the callback with groups, their associated tasks, and member counts
      callback(groupsData);
    }
  );

  // Return a function that stops listening to user memberships
  return () => stopListeningUserMemberships();
}

export async function fetchGroupsTasks(callback) {
  const user = auth.currentUser.uid;
  const userRef = doc(db, "users", user);
  const membershipsQuery = query(collection(db, "members"), where("user", "==", userRef));

  const tasksListeners = {};
  const objectivesListeners = {};
  const groupTitleListeners = {};
  const groupsTasksData = new Map();

  const stopListeningMemberships = onSnapshot(membershipsQuery, async (membershipsSnapshot) => {
    const currentGroupIds = membershipsSnapshot.docs.map(doc => doc.data().group.id);

    groupsTasksData.forEach((group, groupId) => {
      if (!currentGroupIds.includes(groupId)) {
        groupsTasksData.delete(groupId);
        if (tasksListeners[groupId]) {
          tasksListeners[groupId]();
          delete tasksListeners[groupId];
        }
        if (groupTitleListeners[groupId]) {
          groupTitleListeners[groupId]();
          delete groupTitleListeners[groupId];
        }
        Object.keys(objectivesListeners).forEach((taskId) => {
          if (objectivesListeners[taskId] && group.tasks.has(taskId)) {
            objectivesListeners[taskId]();
            delete objectivesListeners[taskId];
          }
        });
      }
    });

    if (membershipsSnapshot.empty) {
      callback([]);
    } else {
      for (const membershipDoc of membershipsSnapshot.docs) {
        const groupRef = membershipDoc.data().group;
        const groupId = groupRef.id;

        if (!groupTitleListeners[groupId]) {
          groupTitleListeners[groupId] = onSnapshot(groupRef, (groupDoc) => {
            if (groupDoc.exists()) {
              const updatedGroupData = groupDoc.data();
              const group = groupsTasksData.get(groupId);
              
              if (group && updatedGroupData.title !== group.title) {
                const updatedGroup = {
                  ...group,
                  title: updatedGroupData.title,
                };
                groupsTasksData.set(groupId, updatedGroup);
                triggerUpdateCallback();
              }
            }
          });
        }

        const groupDocSnapshot = await getDoc(groupRef);
        if (groupDocSnapshot.exists()) {
          const groupData = groupDocSnapshot.data();
          if (!groupsTasksData.has(groupId)) {
            groupsTasksData.set(groupId, {
              id: groupId,
              ...groupData,
              tasks: new Map(),
              members: [],
            });
          }

          const membersQuery = query(collection(db, "members"), where("group", "==", groupRef));
          const membersSnapshot = await getDocs(membersQuery);
          let group = groupsTasksData.get(groupId);

          const members = await Promise.all(membersSnapshot.docs.map(async (docSnapshot) => {
            const memberData = docSnapshot.data();
            const userDocRef = memberData.user;
            const userSnapshot = await getDoc(userDocRef);
            const userData = userSnapshot.data();

            return {
              id: docSnapshot.id,
              admin: memberData.admin,
              group: memberData.group.id,
              user: memberData.user.id,
              email: userData.email,
              username: userData.username,
            };
          }));

          members.sort((a, b) => a.username.localeCompare(b.username));
          group.members = members;
          groupsTasksData.set(groupId, group);

          const tasksQuery = query(collection(db, "tasks"), where("group", "==", groupRef));
          if (!tasksListeners[groupId]) {
            tasksListeners[groupId] = onSnapshot(tasksQuery, async (tasksSnapshot) => {
              const tasksData = groupsTasksData.get(groupId).tasks;
              const currentTaskIds = tasksSnapshot.docs.map(doc => doc.id);
              tasksData.forEach((_, taskId) => {
                if (!currentTaskIds.includes(taskId)) {
                  tasksData.delete(taskId);
                  if (objectivesListeners[taskId]) {
                    objectivesListeners[taskId]();
                    delete objectivesListeners[taskId];
                  }
                }
              });

              for (const docSnapshot of tasksSnapshot.docs) {
                const taskData = docSnapshot.data();
                const taskId = docSnapshot.id;
                let designatedUserUsername = "";

                if (taskData.designatedUser) {
                  const userDocSnapshot = await getDoc(taskData.designatedUser);
                  if (userDocSnapshot.exists()) {
                    designatedUserUsername = userDocSnapshot.data().username;
                  }
                }

                tasksData.set(taskId, {
                  id: taskId,
                  title: taskData.title,
                  description: taskData.description,
                  date: taskData.date.toDate(),
                  completed: taskData.completed,
                  owner: taskData.owner,
                  designatedUser: designatedUserUsername,
                  group: taskData.group.id,
                  objectives: tasksData.get(taskId)?.objectives || [],
                });

                if (!objectivesListeners[taskId]) {
                  const objectivesRef = collection(db, `tasks/${taskId}/objectives`);
                  objectivesListeners[taskId] = onSnapshot(objectivesRef, (objectivesSnapshot) => {
                    const objectives = objectivesSnapshot.docs.map(doc => ({
                      id: doc.id,
                      value: doc.data().value,
                      completed: doc.data().completed,
                    }));

                    objectives.sort((a, b) => a.value.localeCompare(b.value));

                    if (tasksData.has(taskId)) {
                      const updatedTask = tasksData.get(taskId);
                      updatedTask.objectives = objectives;
                      tasksData.set(taskId, updatedTask);
                    }

                    triggerUpdateCallback();
                  }, (error) => {
                    console.error("Error fetching objectives:", error);
                  });
                }
              }

              triggerUpdateCallback();
            }, (error) => {
              console.error("Error fetching tasks:", error);
            });
          }
        }
      }
    }
  }, (error) => {
    console.error("Error fetching memberships:", error);
  });

  function triggerUpdateCallback() {
    const groupsTasksArray = Array.from(groupsTasksData.values()).map(group => ({
      ...group,
      tasks: Array.from(group.tasks.values()),
    }));
    callback(groupsTasksArray);
  }

  return () => {
    stopListeningMemberships();
    Object.values(tasksListeners).forEach((stop) => stop());
    Object.values(objectivesListeners).forEach((stop) => stop());
    Object.values(groupTitleListeners).forEach((stop) => stop());
  };
}
