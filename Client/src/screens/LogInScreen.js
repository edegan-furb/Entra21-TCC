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
import BackButton from "../components/BackButton";
import PagesTitle from "../components/PagesTitle";
import Inputs from "../components/Inputs";
import ButtonGoogleLogin from "../components/ButtonGoogleLogin";

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
      colors={[
        GlobalStyles.colors.primary950,
        GlobalStyles.colors.primary900,
        GlobalStyles.colors.primary600,
        GlobalStyles.colors.primary300,
        GlobalStyles.colors.neutral300,
        GlobalStyles.colors.neutral300,
      ]}
      locations={[0.01, 0.05, 0.15, 0.3, 0.4, 0.5]}
      style={styles.linearContainer}
    >
      <SafeAreaView style={styles.rootContainer}>
        <BackButton onPress={() => onPressHandler("Start")}/>
        <PagesTitle title={'Hello !'} subTitle={'Sign in to continue'}/>
        <View style={styles.inputsContainer}>
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
        </View>
        <View style={styles.ContentButtons}>
          <CustomButton
            onPress={() => onPressHandler("Tabs")}
            title={"LOGIN"}
            styleButton={styles.ButtonCreateAccount}
            styleText={styles.textCustomButton}
          />
        </View>
        <ButtonGoogleLogin/>
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
    width: wp("100%"),
    height: hp("100%"),
  },
  rootContainer: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  inputsContainer: {
    marginTop: hp('5')
  },
  ContentButtons: {
    paddingVertical: wp('2'),
    alignItems: "center",
  },
  ButtonCreateAccount: {
    width: wp('60'),
    height: hp('6'),
  },
  textCustomButton: {
    fontSize: hp ('1.6%'),
  },
  buttonText: {
    paddingTop: wp("1%"),
    fontSize: hp("1.7%"),
    fontFamily: "open-sans-bold",
    textAlign: "center",
    color: GlobalStyles.colors.primary950,
  },
  signUpButton: {
    height: hp("5%"),
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 25,
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
    textDecorationLine: 1
  },
});
