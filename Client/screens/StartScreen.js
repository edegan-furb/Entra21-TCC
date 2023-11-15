import {
  StyleSheet,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import CustomButton from "../components/CustomButton";
import Footer from "../components/Footer";
import UpperLogo from "../components/UpperLogo";

import { GlobalStyles } from "../constants/Colors";
import Banner from "../components/Banner";
import Description from "../components/Description";

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
      <View style={styles.upperLogoContainer}>
        <UpperLogo children={"TaskSync"} />
      </View>
      <View style={styles.bannerContainer}>
        <Banner />
      </View>
      <View style={styles.descriptionContainer}>
        <Description
          title={"Hello !"}
          description={"Best place to create tasks and manage your teams"}
        />
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
  upperLogoContainer: {
    //flex: 1,
    height: hp("10%"),
    marginTop: hp("2%"),
  },
  bannerContainer: {
    //flex: 4,
    height: hp("30%"),
    marginBottom: wp("5s%"),
  },
  descriptionContainer: {
    //flex: 2,
    height: hp("20%"),
  },
  buttonsContainer: {
    //flex: 3,
    height: hp("30%"),
    paddingHorizontal: wp("20%"),
  },
  signUpButton: {
    backgroundColor: GlobalStyles.colors.neutral100,
    borderColor: GlobalStyles.colors.primary900,
  },
  signText: {
    color: GlobalStyles.colors.primary900,
  },
  footerContainer: {
    //flex: 1,
    height: hp("10%"),
  },
});
