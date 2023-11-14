import { View, Image, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

function Banner() {
  return (
    <View style={styles.container}>
      <Image
        resizeMethod="auto"
        resizeMode="contain"
        style={styles.bannerImage}
        source={require("../assets/images/undraw.png")}
      />
    </View>
  );
}

export default Banner;

const styles = StyleSheet.create({
  container: {
    flex: 4,
    height: hp("30%"),
    justifyContent: "center",
    alignItems: "center",
  },
  bannerImage: {
    width: wp("80%"),
    height: hp("35%"),
  },
});
