// CustomButton.js
import { Pressable, Text, View, StyleSheet } from "react-native";
import { GlobalStyles } from "../constants/Colors";

function CustomButton({ title, onPress, styleButton, styleText }) {
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressade, styleButton]
            : [styles.buttonInnerContainer, styleButton]
        }
        onPress={onPress}
        android_ripple={{ color: GlobalStyles.colors.primary950 }}
      >
        <Text style={[styles.buttonText, styleText]}>{title}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    overflow: "hidden",
    borderRadius: 12,
    margin: 4,
  },
  buttonInnerContainer: {
    backgroundColor: GlobalStyles.colors.primary900,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 4,
    borderWidth: 3,
    borderColor: GlobalStyles.colors.primary900,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontFamily: "open-sans-bold",
    textAlign: "center",
  },
  pressade: {
    opacity: 0.75,
  },
});

export default CustomButton;
