import { View, Text, Pressable, StyleSheet, Image } from "react-native";

function GoogleButton({ onPress }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressade]
            : styles.buttonInnerContainer
        }
        onPress={onPress}
        //  android pressed effect obviously
        android_ripple={{ color: "#cccccc" }}
      >
        <Image style={styles.icon} source={require("../assets/images/google.png")} />
        <Text style={styles.buttonText}>Sign in with Google</Text>
      </Pressable>
    </View>
  );
}

export default GoogleButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    width: "75%",
    borderRadius: 20,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    paddingVertical: 12,
    paddingHorizontal: 16,
    //  android shadow
    elevation: 6,
    //  ios shadow
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 20,
  },
  buttonText: {
    fontFamily: "open-sans",
    fontSize: 20,
    color: "black",
    textAlign: "center",
  },
  // ios pressede effect
  pressade: {
    opacity: 0.75,
  },
  icon: {
    width: 25,
    height: 25,
    marginRight: 8,
    marginTop: 2,
  },
});
