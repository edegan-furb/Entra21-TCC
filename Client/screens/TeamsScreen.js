import { StyleSheet, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import CustomButton from "../components/CustomButton";
import List from "../components/List";
import groups_data from '../components/lixo/info4Teste';


function TeamsScreen() {
  const navigation = useNavigation();

  function onPressHandler() {
    navigation.navigate("Tasks");
  }

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.text}>Teams Screen</Text>
      <CustomButton title={"Task"} onPress={onPressHandler} />
      <List data={groups_data} action={onPressHandler}/>
    </View>
    
  );
}

export default TeamsScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#9a3412",
  },
});
