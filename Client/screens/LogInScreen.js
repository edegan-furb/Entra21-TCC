import { StyleSheet, View, Text } from "react-native";

import CustomButton from "../components/CustomButton";
import { useNavigation } from "@react-navigation/native";

function LogInScreen() {
  const navigation = useNavigation();

  function onPressHandler() {
    navigation.navigate("Tabs");
  }

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.text}>LogIn Screen</Text>
      <CustomButton title={"Home"} onPress={onPressHandler} />
    </View>
  );
}

export default LogInScreen;

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
