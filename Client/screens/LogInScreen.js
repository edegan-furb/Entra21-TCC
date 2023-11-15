import {
  StyleSheet,
  View,
  StatusBar,
  Pressable,
  Text,
  TextInput,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { useNavigation } from "@react-navigation/native";

import { GlobalStyles } from "../constants/Colors";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../components/CustomButton";
import { LinearGradient } from "expo-linear-gradient";

function LogInScreen() {
  const navigation = useNavigation();

  function onPressHandler(page) {
    if (page === "Tabs") {
      navigation.navigate("Tabs");
    } else if (page === "Start") {
      navigation.navigate("Start");
    } else {
      navigation.navigate("SignUp");
    }
  }

  return (
    <LinearGradient
      style={styles.linearContainer}
      colors={[
        GlobalStyles.colors.primary800,
        GlobalStyles.colors.primary700,
        GlobalStyles.colors.primary500,
        GlobalStyles.colors.primary300,
        GlobalStyles.colors.neutral100,
      ]}
      locations={[0, 0.075, 0.15, 0.25, 0.35]}
    >
      <SafeAreaView style={styles.rootContainer}>
        <View style={styles.backButtonContainer}>
          <Pressable
            onPress={() => onPressHandler("Start")}
            style={({ pressed }) => pressed && styles.pressed}
          >
            <Ionicons
              name={"arrow-back"}
              size={32}
              color={GlobalStyles.colors.neutral100}
            />
          </Pressable>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Welcome!</Text>
          <Text style={styles.subtitle}>Sign in to continue</Text>
        </View>
        <View style={styles.inputOuterContainer}>
          <View style={styles.inputInnerContainer}>
            <TextInput style={styles.input} placeholder="email" />
          </View>
          <View style={styles.inputInnerContainer}>
            <TextInput
              style={styles.input}
              placeholder="password"
              secureTextEntry={true}
            />
          </View>
        </View>
        <View style={styles.loginButton}>
          <CustomButton
            title={"Login"}
            onPress={() => onPressHandler("Tabs")}
          />
          <Pressable style={({ pressed }) => pressed && styles.pressed}>
            <Text style={styles.buttonText}>Forgot Passwod?</Text>
          </Pressable>
        </View>
        <View style={styles.separator}>
          <View style={styles.divider}></View>
          <Text style={styles.text}>or</Text>
          <View style={styles.divider}></View>
        </View>
        <View style={styles.otherLogins}>
          <Text style={styles.socialText}>Social Media Logins</Text>
          <View style={styles.socialButtons}>
            <Pressable
              onPress={() => onPressHandler("Start")}
              style={({ pressed }) => pressed && styles.pressed}
            >
              <Ionicons name={"logo-google"} size={48} color={"#4285F4"} />
            </Pressable>
            <Pressable
              onPress={() => onPressHandler("Start")}
              style={({ pressed }) => pressed && styles.pressed}
            >
              <Ionicons name={"logo-github"} size={48} color={"#c9510c"} />
            </Pressable>
            <Pressable
              onPress={() => onPressHandler("Start")}
              style={({ pressed }) => pressed && styles.pressed}
            >
              <Ionicons
                name={"logo-apple"}
                size={48}
                color={GlobalStyles.colors.neutral900}
              />
            </Pressable>
          </View>
        </View>
        <View style={styles.signUpButton}>
          <Text style={styles.signText}>Don't have an account</Text>
          <Pressable
            style={({ pressed }) => pressed && styles.pressed}
            onPress={() => onPressHandler("SignUp")}
          >
            <Text style={styles.signTextButton}> SignUp</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

export default LogInScreen;

const styles = StyleSheet.create({
  linearContainer: {
    flex: 1,
    width: wp("100%"),
    height: hp("100%"),
  },
  rootContainer: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  backButtonContainer: {
    height: hp("7.5%"),
    marginTop: hp("2%"),
    marginLeft: wp("5%"),
  },
  pressed: {
    opacity: 0.7,
  },
  titleContainer: {
    height: hp("12.5%"),
    marginLeft: wp("10%"),
  },
  title: {
    textAlign: "left",
    fontSize: hp("5%"),
    fontFamily: "open-sans-bold",
    color: GlobalStyles.colors.neutral100,
    textShadowColor: GlobalStyles.colors.neutral500,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  subtitle: {
    textAlign: "left",
    fontSize: hp("2.5%"),
    fontFamily: "open-sans",
    color: GlobalStyles.colors.neutral100,
    textShadowColor: GlobalStyles.colors.neutral500,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  inputOuterContainer: {
    height: hp("27.5%"),
    paddingHorizontal: wp("10%"),
    paddingVertical: hp("5%"),
  },
  inputInnerContainer: {
    borderBottomWidth: wp("0.5%"),
    borderColor: GlobalStyles.colors.primary900,
    marginBottom: hp("7.5%"),
    height: hp("5%"),
  },
  input: {
    width: wp("70%"),
  },
  loginButton: {
    height: hp("10%"),
    paddingHorizontal: wp("15%"),
  },
  buttonText: {
    paddingTop: wp("1%"),
    fontSize: hp("1.7%"),
    fontFamily: "open-sans-bold",
    textAlign: "center",
    color: GlobalStyles.colors.primary950,
  },
  separator: {
    height: hp(" 10%"),
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: wp("5%"),
  },
  divider: {
    height: hp("0.3%"),
    width: wp("30%"),
    backgroundColor: GlobalStyles.colors.primary950,
  },
  text: {
    fontSize: hp("2%"),
    color: GlobalStyles.colors.primary950,
    fontFamily: "open-sans-bold",
  },
  otherLogins: {
    height: hp(" 20%"),
  },
  socialText: {
    fontSize: hp("2.5%"),
    color: GlobalStyles.colors.primary950,
    fontFamily: "open-sans",
    textAlign: "center",
  },
  socialButtons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: wp("5%"),
    marginTop: hp("1%"),
  },
  signUpButton: {
    height: hp(" 10%"),
    flexDirection: "row",
    justifyContent: "center",
  },
  signText: {
    fontSize: hp("2%"),
    fontFamily: "open-sans",
    color: GlobalStyles.colors.primary950,
  },
  signTextButton: {
    fontSize: hp("2%"),
    fontFamily: "open-sans-bold",
    color: GlobalStyles.colors.primary800,
  },
});
