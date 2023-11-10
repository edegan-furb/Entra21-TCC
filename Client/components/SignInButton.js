import { View, Text, Pressable, StyleSheet } from "react-native";

function PrimaryButton({ children, onPress }) {
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
        android_ripple={{ color: "#370e6c" }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    width: "75%",
    borderRadius: 20,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: "#48118F",
    paddingVertical: 12,
    paddingHorizontal: 16,
    //  android shadow
    elevation: 6,
    //  ios shadow
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  buttonText: {
    fontFamily: "open-sans",
    fontSize: 20,
    color: "white",
    textAlign: "center",
  },
  // ios pressede effect
  pressade: {
    opacity: 0.75,
  },
});