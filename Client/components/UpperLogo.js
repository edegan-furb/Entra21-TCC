import { View, Image, Text, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

function UpperLogo({ children }) {
  return (
    <View style={styles.container}>
      <Image
        resizeMethod="auto"
        resizeMode="contain"
        source={require("../assets/images/logoInicio.png")}
        style={styles.image}
      />
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

export default UpperLogo;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: wp("1%"),
    paddingLeft: wp("5%"),
    alignItems: "center",
  },
  image: {
    width: wp("5%"),
    height: hp("5%"),
  },
  text: {
    fontSize: hp("2%"),
    fontFamily: "open-sans-bold",
  },
});
