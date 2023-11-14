import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../components/CustomButton";
import Footer from "../components/Footer";
import { GlobalStyles } from "../constants/Colors";

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
      <View style={styles.title}>
        <Image
          source={require("../assets/images/logoInicio.png")}
          style={styles.imgLogo}
        />
        <Text style={styles.text}>TaskSync</Text>
      </View>
      <View style={styles.banner}>
        <Image
          style={styles.image}
          source={require("../assets/images/undraw.png")}
        />
      </View>
      <View style={styles.description}>
        <View>
          <Text style={styles.descTitle}> WELCOME !</Text>
        </View>
        <View>
          <Text style={styles.desSub}>
            {" "}
            Best place to create tasks and manage your teams
          </Text>
        </View>
      </View>
      <View style={styles.buttons}>
        <View style={styles.loginButtonContainer}>
          <CustomButton
            title={"LOGIN"}
            onPress={() => onPressHandler("LogIn")}
          />
        </View>
        <View>
          <CustomButton
            title={"SIGN UP"}
            styleButton={styles.signUpButton}
            styleText={styles.signText}
            onPress={() => onPressHandler("SignUp")}
          />
        </View>
      </View>
      <View style={styles.footer}>
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

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.neutral100,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  title: {
    flex: 1,
    flexDirection: "row",
    gap: 4,
    paddingLeft: 15,
    alignItems: "center",
  },
  imgLogo: {
    width: 20,
    height: 20,
  },
  text: {
    fontSize: 15,
    fontFamily: "open-sans-bold",
  },
  banner: {
    flex: 5,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "75%",
    height: "100%",
  },
  description: {
    flex: 3,
    alignItems: "center",
  },
  descTitle: {
    fontSize: 28,
    fontFamily: "open-sans-bold",
  },
  desSub: {
    fontSize: 16,
    fontFamily: "open-sans",
    textAlign: "center",
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  buttons: {
    flex: 4,
    paddingBottom: "10%",
    paddingHorizontal: "20%",
  },
  loginButtonContainer: {
    paddingBottom: "5%",
  },
  signUpButton: {
    borderColor: GlobalStyles.colors.primary950,
    backgroundColor: GlobalStyles.colors.neutral100,
    borderWidth: 3,
  },
  signText: {
    color: GlobalStyles.colors.primary950,
  },
  footer: {
    flex: 1,
  },
});
