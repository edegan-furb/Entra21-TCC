import { FlatList } from "react-native";
import { StyleSheet, View } from "react-native";
import TaskItem from "./TaskItem";

function TasksList({ tasks, groupId }) {
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={tasks}
        renderItem={({ item }) => <TaskItem {...item} groupId={groupId} />}
        showsVerticalScrollIndicator={false}
        style={styles.list}
      />
    </View>
  );
}

export default TasksList;

const styles = StyleSheet.create({
  listContainer: {
    width: '100%',
    height: '100%',
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
    paddingBottom: 40
  },
  list: {
    width: '85%',
  }
})
