import { View, Text, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

function Description({ title, description }) {
  return (
    <View style={styles.descriptionContainer}>
      <View>
        <Text style={styles.descriptionTitle}> {title}</Text>
      </View>
      <View>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
}

export default Description;

const styles = StyleSheet.create({
  descriptionContainer: {
    flex: 2,
    height: hp("20%"),
    alignItems: "center",
  },
  descriptionTitle: {
    fontSize: hp("4%"),
    fontFamily: "open-sans-bold",
  },
  description: {
    fontSize: hp("2.1%"),
    fontFamily: "open-sans",
    textAlign: "center",
    paddingHorizontal: wp("5%"),
    paddingTop: hp("2.5%"),
  },
});
