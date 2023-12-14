import { StyleSheet, View, Text } from "react-native";
import TaskList from '../components/TaskList';

function TasksScreen() {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.tasks}>
        <TaskList action={null}/>
      </View>
    </View>
  );
}

export default TasksScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  tasks:{
    width: '100%',
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#9a3412",
  },
});
