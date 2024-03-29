import { Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/styles";

function Button({ children, onPress, mode }) {
  return (
      <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed ? [styles.pressed, styles.btnContent] : styles.btnContent}
      >
        <View style={[styles.button, mode === "flat" && styles.flat]}>
          <Text style={[styles.buttonText, mode === "flat" && styles.flatText]}>
            {children}
          </Text>
        </View>
      </Pressable>
  );
}

export default Button;

const styles = StyleSheet.create({
  btnContent: {
    width: '50%',
    height: '100%',
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: '100%',
    height: '100%',
    borderRadius: 12,
    backgroundColor: Colors.primary900,
    alignItems: "center",
    justifyContent: "center"
  },
  flat: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: Colors.primary900
  },
  buttonText: {
    color: '#fff',
    fontWeight: "bold",
    fontSize: 15,
  },
  flatText: {
    color: Colors.primary900,
    fontWeight: "bold",
    fontSize: 15,
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: Colors.primary100,
    borderRadius: 4,
  },
});