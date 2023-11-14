import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../components/CustomButton";
import Footer from "../components/Footer";
import { GlobalStyles } from "../constants/Colors";
import UpperLogo from "../components/UpperLogo";

function StartScreen() {
  const navigation = useNavigation();

  function onPressHandler(page) {
    if (page === "LogIn") {
      navigation.navigate("LogIn");
    } else {
      navigation.navigate("SignUp");
    }
  }

  return (
    <SafeAreaView style={styles.rootContainer}>
      <View style={styles.titleContainer}>
        <UpperLogo children={"TaskSync"} />
      </View>
      <View style={styles.bannerContainer}>
        <Image
          resizeMethod="auto"
          resizeMode="contain"
          style={styles.image}
          source={require("../assets/images/undraw.png")}
        />
      </View>
      <View style={styles.descriptionContainer}>
        <View>
          <Text style={styles.descTitle}> WELCOME !</Text>
        </View>
        <View>
          <Text style={styles.desSub}>
            Best place to create tasks and manage your teams
          </Text>
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <CustomButton title={"LOGIN"} onPress={() => onPressHandler("LogIn")} />
        <CustomButton
          title={"SIGN UP"}
          styleButton={styles.signUpButton}
          styleText={styles.signText}
          onPress={() => onPressHandler("SignUp")}
        />
      </View>
      <View style={styles.footerContainer}>
        <Footer
          children={
            "© Todos os direitos reservados \n Desenvolvido por Ariel Marcellino, Eduardo Degan e Julio Vanz"
          }
        />
      </View>
    </SafeAreaView>
  );
}

export default StartScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.neutral100,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  titleContainer: {
    height: hp("10%"),
    marginTop: hp("2%"),
  },
  bannerContainer: {
    height: hp("30%"),
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: wp("75%"),
    height: hp("30%"),
  },
  descriptionContainer: {
    height: hp("20%"),
    alignItems: "center",
  },
  descTitle: {
    fontSize: hp("4%"),
    fontFamily: "open-sans-bold",
  },
  desSub: {
    fontSize: hp("2.1%"),
    fontFamily: "open-sans",
    textAlign: "center",
    paddingHorizontal: wp("5%"),
    paddingTop: hp("2.5%"),
  },
  buttonsContainer: {
    height: hp("30%"),
    paddingHorizontal: wp("20%"),
  },
  signUpButton: {
    backgroundColor: GlobalStyles.colors.neutral100,
    borderWidth: 3,
    borderRadius: 12,
    borderColor: GlobalStyles.colors.primary900,
  },
  signText: {
    color: GlobalStyles.colors.primary900,
  },
  footerContainer: {
    height: hp("10%"),
    justifyContent: "center",
  },
});
