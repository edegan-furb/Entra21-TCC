// CustomButton.js
import { Pressable, Text, StyleSheet } from "react-native";

function CustomButton({ title, onPress, styleButton, styleText }) {
  return (
    <Pressable style={[styles.button, styleButton]} onPress={onPress}>
      <Text style={[styles.text, styleText]}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#48118f",
    padding: 10,
    borderRadius: 12,
    alignItems: "center",
    borderColor: "#48118f",
    borderWidth: 3,
  },
  text: {
    color: "#ffffff",
    fontSize: 16,
    fontFamily: "open-sans-bold",
  },
});

export default CustomButton;
