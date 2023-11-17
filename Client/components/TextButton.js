import { Pressable, Text, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { GlobalStyles } from "../constants/Colors";

function IconButton({ children }) {
  return (
    <Pressable style={({ pressed }) => pressed && styles.pressed}>
      <Text style={styles.buttonText}>{children}</Text>
    </Pressable>
  );
}

export default IconButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
  buttonText: {
    fontSize: hp("1.75%"),
    fontFamily: "open-sans-bold",
    textAlign: "center",
    textDecorationLine: "underline",
    color: GlobalStyles.colors.primary900,
  },
});
