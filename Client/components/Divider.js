import { View, Text, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { GlobalStyles } from "../constants/Colors";

function Divider() {
  return (
    <View style={styles.separator}>
      <View style={styles.divider}></View>
      <Text style={styles.text}>or</Text>
      <View style={styles.divider}></View>
    </View>
  );
}

export default Divider;

const styles = StyleSheet.create({
  separator: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: wp("5%"),
  },
  divider: {
    height: hp("0.2%"),
    width: wp("30%"),
    backgroundColor: GlobalStyles.colors.primary950,
  },
  text: {
    fontSize: hp("2%"),
    color: GlobalStyles.colors.primary950,
    fontFamily: "open-sans-bold",
  },
});
