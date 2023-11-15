import { StyleSheet, View, Text, Pressable, Image, SafeAreaView, Platform } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from "@react-navigation/native";

import BackButton from "../components/BackButton";
import Inputs from "../components/Inputs";
import { GlobalStyles } from "../constants/Colors";

import {
  widthPercentageToDP as wp, 
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import CustomButton from "../components/CustomButton";
import ContentGoogleButton from "../components/LoginGoogle";

function SignUpScreen() {
  const navigation = useNavigation();

  function onPressHandler(page) {
    if (page === "Start") {
      navigation.navigate("Start");
    } else if(page === "Tabs") {
      navigation.navigate("Tabs")
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
        locations={[0.01, 0.05, 0.15, 0.30, 0.40, 0.50]}
        style={styles.background}
    >
      <SafeAreaView style={styles.container}>
        <BackButton onPress={() => onPressHandler("Start")}/>
        <View style={styles.titleContent}>
          <Text style={styles.title}>Hello!</Text>
          <Text style={styles.subTitle}>Create a new account</Text>
        </View>

        <Inputs title={"Name"} secureTextEntry={false} height={0}/>
        <Inputs title={"Email"} secureTextEntry={false} height={0}/>
        <Inputs title={"Password"} secureTextEntry={true} />
        <Inputs title={"Confirm your password"} secureTextEntry={true}/>
        <View style={styles.ContentButtons}>
          <CustomButton 
            styleButton={styles.createButton}
            styleText={styles.createButtonText}
            title={'CREATE ACCOUNT'}
            onPress={() => onPressHandler("Tabs") }
          />
          <ContentGoogleButton title={'LOGIN WITH GOOGLE'}/>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

export default SignUpScreen;

const styles = StyleSheet.create({
  background: {
    width: wp ('100%'),
    height: hp ('100%'),
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    width: wp ('100%'),
    height: hp ('100%'),
  },
  titleContent: {
    width: wp ('80%'),
    height: hp ('20%'),
    alignItems: "start",
    justifyContent: "center",
  },
  title: {
    fontSize: hp ('7%'),
    fontWeight: 'bold',
    color: GlobalStyles.colors.primary50,
    paddingLeft: wp ('18%'),
    fontFamily: "open-sans-bold",
  },
  subTitle: {
    color: GlobalStyles.colors.primary50,
    fontSize: hp ('2.3%'),
    fontWeight: 'bold',
    paddingLeft: wp ('18%'),
    fontFamily: "open-sans-bold",
  },
  ContentButtons: {
    width: wp ('100%'),
    height: hp ('21%'),
    alignItems: "center",
    justifyContent: "center",
    gap: hp ('2.5%')
  },
  createButton: {
    width: wp ('55%'),
    height: hp ('5.7%'),
    borderWidth: 0,
  },
  createButtonText: {
    fontSize: 16
  }
});
