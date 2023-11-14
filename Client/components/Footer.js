import { StyleSheet, View, Text } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

function Footer({ children }) {
  return (
    <View style={styles.footer}>
      <Text style={styles.textFooter}>{children}</Text>
    </View>
  );
}

export default Footer;

const styles = StyleSheet.create({
  footer: {
    flex: 1,
    height: hp("10%"),
    justifyContent: "center",
    marginBottom: hp("2%"),
  },
  textFooter: {
    fontFamily: "open-sans",
    textAlign: "center",
    fontSize: hp("1.4%"),
  },
});
