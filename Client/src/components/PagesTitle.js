import { StyleSheet, View, Text } from "react-native";
import { GlobalStyles } from "../constants/Colors";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function PagesTitle({ title, subTitle }) {
  return(
    <View style={styles.titleContent}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subTitle}>{subTitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContent: {
    width: wp("100%"),
    height: hp("20%"),
    alignItems: "start",
    justifyContent: "center",
  },
  title: {
    fontSize: hp("7%"),
    fontWeight: "bold",
    color: GlobalStyles.colors.primary50,
    paddingLeft: "18%",
    fontFamily: "open-sans-bold",
  },
  subTitle: {
    color: GlobalStyles.colors.primary50,
    fontSize: hp("2.3%"),
    fontWeight: "bold",
    paddingLeft: "18%",
    fontFamily: "open-sans-bold",
  },
})