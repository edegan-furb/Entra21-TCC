// CustomButton.js
import { Pressable, Text, View, StyleSheet, Platform } from "react-native";
import { GlobalStyles } from "../constants/Colors";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

function CustomButton({ title, onPress, styleButton, styleText }) {
  return (
    <View style={[styles.buttonOuterContainer, styleButton]}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressade]
            : [styles.buttonInnerContainer]
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
    backgroundColor: GlobalStyles.colors.primary900,
    borderWidth: 3,
    borderRadius: 12,
    borderColor: GlobalStyles.colors.primary900,
    margin: wp("1%"),
    //android
    elevation: 8,
    //ios
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  buttonInnerContainer: {
    paddingVertical: hp("2%"),
  },
  buttonText: {
    color: "#ffffff",
    fontSize: hp("2.1%"),
    fontFamily: "open-sans-bold",
    textAlign: "center",
  },
  pressade: {
    opacity: 0.75,
  },
});
