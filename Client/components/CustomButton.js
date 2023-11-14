// CustomButton.js
import { Pressable, Text, View, StyleSheet } from "react-native";
import { GlobalStyles } from "../constants/Colors";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

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
    //margin: 4,
    margin: wp("1%"),
    elevation: 4,
  },
  buttonInnerContainer: {
    backgroundColor: GlobalStyles.colors.primary900,
    paddingVertical: hp("1.5%"),
    borderWidth: 3,
    borderColor: GlobalStyles.colors.primary900,
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

export default CustomButton;
