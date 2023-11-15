// CustomButton.js
import { Pressable, Text, View, StyleSheet, Platform } from "react-native";
import { GlobalStyles } from "../constants/Colors";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

function CustomButton({ title, onPress, styleButton, styleText }) {
  return (
    <View style={styles.rootContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonOuterContainer, styles.pressed]
            : styles.buttonOuterContainer
        }
        onPress={onPress}
        android_ripple={{ color: GlobalStyles.colors.primary950 }}
      >
        <View style={[styles.buttonInnerContainer, styleButton]}>
          <Text style={[styles.buttonText, styleText]}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CustomButton;

const styles = StyleSheet.create({
  rootContainer: {
    overflow: "hidden",
    margin: wp("1%"),
    borderRadius: 12,
  },
  buttonOuterContainer: {
    borderRadius: 12,
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  buttonInnerContainer: {
    backgroundColor: GlobalStyles.colors.primary900,
    paddingVertical: hp("1.5%"),
    borderWidth: 3,
    borderRadius: 12,
    borderColor: GlobalStyles.colors.primary900,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: hp("2.1%"),
    fontFamily: "open-sans-bold",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
