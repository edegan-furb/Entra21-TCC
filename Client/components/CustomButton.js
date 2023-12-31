// CustomButton.js
import { Pressable, Text, View, StyleSheet, Platform } from "react-native";
import { GlobalStyles } from "../constants/Colors";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

function CustomButton({ title, onPress, styleButton, styleText }) {
  return (
    <View style={styles.buttonOuterContainer}>
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
  buttonOuterContainer: {
    borderRadius: 12,
    margin: wp("1%"),
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  buttonInnerContainer: {
    backgroundColor: GlobalStyles.colors.primary900,
    paddingVertical: hp("1.5%"),
    borderWidth: 3,
    borderRadius: 12,
    borderColor: GlobalStyles.colors.primary900,
    elevation: 4,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: hp("2.1%"),
    fontFamily: "open-sans-bold",
    textAlign: "center",
  },
  pressade: {
    opacity: 0.5,
  },
});

export default CustomButton;
