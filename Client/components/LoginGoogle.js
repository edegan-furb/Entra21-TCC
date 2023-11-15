import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { GlobalStyles } from "../constants/Colors";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function ContentGoogleButton({ title }) {
  return (
    <>
      <View style={styles.content}>
        <View style={styles.divider}></View>
        <Text style={styles.text}>or</Text>
        <View style={styles.divider}></View>
      </View>
      <TouchableOpacity style={styles.contentButton}>
        <Image
          source={require("../assets/images/google.png")}
          style={styles.icon}
        />
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  content: {
    //height: hp(" 10%"),
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: wp("5%"),
  },
  divider: {
    height: hp("0.28%"),
    width: wp("31%"),
    backgroundColor: GlobalStyles.colors.primary800,
  },
  text: {
    fontSize: hp("2%"),
    color: GlobalStyles.colors.neutral800,
    fontFamily: "open-sans-bold",
  },
  contentButton: {
    backgroundColor: GlobalStyles.colors.neutral50,
    padding: wp("3.5%"),
    borderRadius: 12,
    alignItems: "center",
    borderColor: GlobalStyles.colors.primary900,
    borderWidth: 1,
    flexDirection: "row",
    gap: wp("2.5%"),
    elevation: 4,
    shadowColor: GlobalStyles.colors.neutral950,
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 1,
  },
  icon: {
    width: wp("4%"),
    height: hp("2%"),
  },
  title: {
    color: GlobalStyles.colors.primary900,
    fontSize: hp("1.9%"),
    fontFamily: "open-sans-bold",
  },
});
