import {
  StyleSheet,
  View,
  SafeAreaView,
  Platform,
  StatusBar
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

import BackButton from "../components/BackButton";
import Inputs from "../components/Inputs";
import { GlobalStyles } from "../constants/Colors";
import CustomButton from "../components/CustomButton";
import PagesTitle from "../components/PagesTitle";
import ButtonGoogleLogin from "../components/ButtonGoogleLogin";

function SignUpScreen() {
  const navigation = useNavigation();

  function onPressHandler(page) {
    if (page === "Start") {
      navigation.navigate("Start");
    } else if (page === "Tabs") {
      navigation.navigate("Tabs");
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
      <SafeAreaView style={styles.container}>
        <BackButton onPress={() => onPressHandler("Start")} />
        <PagesTitle title={'Hello !'} subTitle={'Create a new account'}/>
        <Inputs 
          placeHolder={'Name'}
          placeHolderTextColor={'#555'} 
          secureTextEntry={false} 
          height={0} 
          maxLength={40}
        />
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
        <Inputs 
          placeHolder={'Confirm your password'} 
          placeHolderTextColor={'#555'} 
          secureTextEntry={true} 
          maxLength={10}
        />
        <View style={styles.ContentButtons}>
          <CustomButton
            title={"CREATE ACCOUNT"}
            onPress={() => onPressHandler("Tabs")}
            styleButton={styles.ButtonCreateAccount}
            styleText={styles.textCustomButton}
          />
          <ButtonGoogleLogin/>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

export default SignUpScreen;

const styles = StyleSheet.create({
  linearContainer: {
    width: wp("100%"),
    height: hp ('100%'),
  },
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    width: "100%",
    height: '100%',
  },
  ContentButtons: {
    paddingVertical: '1%',
    alignItems: "center",
  },
  textCustomButton: {
    fontSize: hp ('1.6%'),
  },
  ButtonCreateAccount: {
    paddingVertical: "4%",
    paddingHorizontal: '15%',
  }
});
