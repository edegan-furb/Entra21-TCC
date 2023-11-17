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
import IconButton from "../components/IconButton";
import Divider from "../components/Divider";
import TextButton from "../components/TextButton";
import Inputs from "../components/Inputs";

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
        GlobalStyles.colors.primary950,
        GlobalStyles.colors.primary900,
        GlobalStyles.colors.primary600,
        GlobalStyles.colors.primary300,
        GlobalStyles.colors.neutral300,
        GlobalStyles.colors.neutral300,
      ]}
      locations={[0.01, 0.05, 0.15, 0.3, 0.4, 0.5]}
    >
      <SafeAreaView style={styles.rootContainer}>
        <View style={styles.backButtonContainer}>
          <IconButton
            onPress={() => onPressHandler("Start")}
            icon={"arrow-back"}
            size={wp("7.5%")}
            color={GlobalStyles.colors.neutral100}
          />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Welcome!</Text>
          <Text style={styles.subtitle}>Sign in to continue</Text>
        </View>
        
        <Inputs 
          placeHolder={'Email'} 
          placeHolderTextColor={'#555'} 
          secureTextEntry={false} 
          height={0}
          maxLength={60}
        />
        <Inputs
          placeHolder={'Password'} 
          placeHolderTextColor={'#555'} 
          secureTextEntry={true} 
          maxLength={10}
        />
        <View style={styles.loginButton}>
          <CustomButton
            title={"Login"}
            onPress={() => onPressHandler("Tabs")}
          />
          <TextButton children={"Forgot passord?"} />
        </View>
        <View style={styles.separator}>
          <Divider />
        </View>
        <View style={styles.otherLogins}>
          <Text style={styles.socialText}>Social Media Logins</Text>
          <View style={styles.socialButtons}>
            <IconButton
              onPress={() => onPressHandler("Start")}
              icon={"logo-google"}
              size={hp("5%")}
              color={"#4285F4"}
            />
            <IconButton
              onPress={() => onPressHandler("Start")}
              icon={"logo-github"}
              size={hp("5%")}
              color={"#c9510c"}
            />
            <IconButton
              onPress={() => onPressHandler("Start")}
              icon={"logo-apple"}
              size={hp("5%")}
              color={"black"}
            />
          </View>
        </View>
        <View style={styles.signUpButton}>
          <Text style={styles.signText}>Don't have an account</Text>
          <TextButton children={"SignUp"} />
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

export default LogInScreen;

const styles = StyleSheet.create({
  linearContainer: {
    //flex: 1,
    width: wp("100%"),
    height: hp("100%"),
    //paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  rootContainer: {
    width: wp("100%"),
    height: hp("100%"),
  },
  backButtonContainer: {
    justifyContent: "center",
    height: hp("7%"),
    marginLeft: wp("5%"),
  },
  pressed: {
    opacity: 0.7,
  },
  titleContainer: {
    width: wp("100%"),
    height: hp("20%"),
    alignItems: "start",
    justifyContent: "center",
  },
  title: {
    paddingLeft: wp("18%"),
    fontSize: hp("5%"),
    fontFamily: "open-sans-bold",
    color: GlobalStyles.colors.neutral100,
    textShadowColor: GlobalStyles.colors.neutral500,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  subtitle: {
    paddingLeft: wp("18%"),
    textAlign: "left",
    fontSize: hp("2.5%"),
    fontFamily: "open-sans",
    color: GlobalStyles.colors.neutral100,
    textShadowColor: GlobalStyles.colors.neutral500,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  loginButton: {
    height: hp("15%"),
    paddingHorizontal: wp("20%"),
  },
  separator: {
    height: hp(" 5%"),
  },
  otherLogins: {
    height: hp("15%"),
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
    height: hp(" 5.5%"),
    gap: wp("1%"),
    flexDirection: "row",
    justifyContent: "center",
  },
  signText: {
    fontSize: hp("2%"),
    fontFamily: "open-sans",
    color: GlobalStyles.colors.primary950,
  },
});
