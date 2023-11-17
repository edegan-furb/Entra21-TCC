import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

import BackButton from "../components/BackButton";
import Inputs from "../components/Inputs";
import { GlobalStyles } from "../constants/Colors";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import CustomButton from "../components/CustomButton";

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
      style={styles.background}
    >
      <SafeAreaView style={styles.container}>
        <BackButton onPress={() => onPressHandler("Start")} />
        <View style={styles.titleContent}>
          <Text style={styles.title}>Hello!</Text>
          <Text style={styles.subTitle}>Create a new account</Text>
        </View>

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
          />
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

export default SignUpScreen;

const styles = StyleSheet.create({
  background: {
    width: wp("100%"),
    height: hp("100%"),
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  titleContent: {
    width: wp("100%"),
    height: hp("20%"),
    alignItems: "start",
    justifyContent: "center",
  },
  title: {
    fontSize: hp("5.5%"),
    color: GlobalStyles.colors.primary50,
    paddingLeft: wp("18%"),
    fontFamily: "open-sans-bold",
  },
  subTitle: {
    color: GlobalStyles.colors.primary50,
    fontSize: hp("2.3%"),
    fontWeight: "bold",
    paddingLeft: wp("18%"),
    fontFamily: "open-sans-bold",
  },
  ContentButtons: {
    height: hp ('25%'),
    paddingHorizontal: wp ('20%'),
    gap: 10,
    alignItems: "start",
    justifyContent: "center",
  },
});
