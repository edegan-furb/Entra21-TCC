import { StyleSheet, View, Text, Image, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GoogleButton from "../components/GoogleButton";
import PrimaryButton from "../components/SignInButton";
import DescriptionButton from "../components/SignUp";
import Footer from "../components/Footer";

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
    <View style={styles.rootContainer}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/images/logo.png")} />
        <Text style={styles.title}>TaskSync App</Text>
      </View>
      <View style={styles.signInContainer}>
        <PrimaryButton
          children={"Sign In"}
          onPress={() => onPressHandler("LogIn")}
        />
        <DescriptionButton
          outerText={"Don’t have an account ? "}
          innerText={"Sign up"}
          onPress={() => onPressHandler("SignUp")}
        />
      </View>
      <View style={styles.googleContainer}>
        <GoogleButton />
      </View>
      <View style={styles.footer}>
        <Footer
          children={
            "© Todos os direitos reservados \n Ariel Marcellino, Eduardo Degan e Julio Vanz"
          }
        />
      </View>
    </View>
  );
}

export default StartScreen;

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "#E2E2E2",
  },
  logoContainer: {
    alignItems: "center",
    marginTop: height / 8,
  },
  signInContainer: {
    alignItems: "center",
    marginTop: width < 380 ? height / 10 : height / 8,
  },
  googleContainer: {
    alignItems: "center",
    marginTop: height / 10,
  },
  footer: {
    marginTop: width < 380 ? height / 10 : height / 6,
  },
  logo: {
    width: width < 380 ? 120 : 160,
    height: width < 380 ? 120 : 160,
    marginBottom: 8,
    borderRadius: 25,
  },
  title: {
    fontSize: 40,
    fontFamily: "open-sans",
  },
});
