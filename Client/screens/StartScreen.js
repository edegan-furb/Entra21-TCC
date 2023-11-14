import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
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
      <UpperLogo children={"TaskSync"} />
      <Banner />
      <Description
        title={"WELCOME !"}
        description={"Best place to create tasks and manage your teams"}
      />
      <View style={styles.buttonsContainer}>
        <CustomButton title={"LOGIN"} onPress={() => onPressHandler("LogIn")} />
        <CustomButton
          title={"SIGN UP"}
          styleButton={styles.signUpButton}
          styleText={styles.signText}
          onPress={() => onPressHandler("SignUp")}
        />
      </View>
      <Footer
        children={
          "© Todos os direitos reservados \n Desenvolvido por Ariel Marcellino, Eduardo Degan e Julio Vanz"
        }
      />
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
  buttonsContainer: {
    flex: 3,
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
});
