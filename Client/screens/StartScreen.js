import { StyleSheet, View, Text, Pressable } from "react-native";
import CustomButton from "../components/CustomButton";
import { useNavigation } from "@react-navigation/native";

function StartScreen() {
  const navigation = useNavigation();

  function onPressHandler(page) {
    if (page === "LogIn") {
      navigation.navigate("LogIn");
    } else {
      navigation.navigate("SignUp");
    }
  }

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.text}>Start Screen</Text>
      <CustomButton title={"Log in"} onPress={() => onPressHandler("LogIn")} />
      <CustomButton
        title={"Sign up"}
        onPress={() => onPressHandler("SignUp")}
      />
    </View>
  );
}

export default StartScreen;

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
  button: {
    backgroundColor: "#3498db", // Background color
    padding: 10, // Padding around the button text
    borderRadius: 5, // Border radius to round the corners
    alignItems: "center", // Center the content horizontally
  },
  textButton: {
    color: "#ffffff", // Text color
    fontSize: 16, // Font size
  },
});
