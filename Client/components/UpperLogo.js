import { View, Image, Text, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

function UpperLogo({ children }) {
  return (
    <View style={styles.outerContainer}>
      <View style={styles.innerContainer}>
        <Image
          resizeMethod="auto"
          resizeMode="contain"
          source={require("../assets/images/logoInicio.png")}
          style={styles.image}
        />
        <Text style={styles.text}>{children}</Text>
      </View>
    </View>
  );
}

export default UpperLogo;

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    height: hp("10%"),
    marginTop: hp("2%"),
  },
  innerContainer: {
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
