// CustomButton.js
import { Pressable, Text, StyleSheet } from "react-native";

function CustomButton({ title, onPress }) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#3498db",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  text: {
    color: "#ffffff",
    fontSize: 16,
  },
});

export default CustomButton;
