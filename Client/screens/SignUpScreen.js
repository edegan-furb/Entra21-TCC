import { StyleSheet, View, Text } from "react-native";

function SignUpScreen() {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.text}>SignUp Screen</Text>
    </View>
  );
}

export default SignUpScreen;

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
