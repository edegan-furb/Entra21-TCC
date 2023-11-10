import { Children } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

function DescriptionButton({ onPress, outerText, innerText }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {outerText}
        <Pressable
          style={({ pressed }) =>
            pressed
              ? [styles.buttonContainer, styles.pressade]
              : styles.buttonContainer
          }
          onPress={onPress}
        >
          <Text style={styles.buttonText}>{innerText}</Text>
        </Pressable>
      </Text>
    </View>
  );
}

export default DescriptionButton;

const styles = StyleSheet.create({
  container: {
    margin: 4,
  },
  buttonText: {
    fontFamily: "open-sans",
    fontSize: 16,
    color: "#E8B015",
    alignSelf: "flex-end",
    marginBottom: -5,
    marginLeft: 4,
    textDecorationLine: "underline",
    textDecorationColor: "#E8B015",
  },
  text: {
    fontFamily: "open-sans",
    fontSize: 16,
    color: "#000000",
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
  },
  // ios pressede effect
  pressade: {
    opacity: 0.75,
  },
});
