import {
  StyleSheet, 
  TouchableWithoutFeedback, 
  View, 
  Keyboard, 
  KeyboardAvoidingView,
  Platform
} from "react-native";

import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import AuthForm from "./AuthForm";

import { Colors } from "../../constants/styles";
import PagesTitle from "../SignUp-Login/PagesTitle";
import TranslatedText from "../../Context/language-context";

function AuthContent({ isLogin, onAuthenticate }) {

  const [credentialsInvalid, setCredentialsInvalid] = useState({
    email: false,
    password: false,
    confirmEmail: false,
    confirmPassword: false,
  });

  function submitHandler(credentials) {
    let { email, confirmEmail, password, confirmPassword } = credentials;

    email = email.trim();
    password = password.trim();

    const emailIsValid = email.includes("@");
    const passwordIsValid = password.length > 6;
    const emailsAreEqual = email === confirmEmail;
    const passwordsAreEqual = password === confirmPassword;

    if (
      !emailIsValid ||
      !passwordIsValid ||
      (!isLogin && (!emailsAreEqual || !passwordsAreEqual))
    ) {
      setCredentialsInvalid({
        email: !emailIsValid,
        confirmEmail: !emailIsValid || !emailsAreEqual,
        password: !passwordIsValid,
        confirmPassword: !passwordIsValid || !passwordsAreEqual,
      });
      return;
    }
    onAuthenticate({ email, password });
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}
        keyboardVerticalOffset={isLogin ? -200 : -170}
      >
        <SafeAreaView style={styles.rootContainer}>
          <PagesTitle 
            style={styles.containerPageTitle}
            title={
              isLogin ?
              <TranslatedText enText={'Wellcome back!'} ptText={'Bem vindo de volta!'}/>
              : 
              <TranslatedText enText={'Hello!'} ptText={'Olá'}/>
            } 
            subTitle={
              isLogin ? 
              <TranslatedText enText={'Hello there, login to continue'} ptText={'Olá, faça login para continuar'}/>
              : 
              <TranslatedText enText={'Create a new account to continue'} ptText={'Crie uma nova conta para continuar'}/>
              
            }
          />
          <View style={styles.inputsContainer}>
            <AuthForm
              isLogin={isLogin}
              onSubmit={submitHandler}
              credentialsInvalid={credentialsInvalid}
            />
          </View>
        </SafeAreaView>
      </KeyboardAvoidingView>   
    </TouchableWithoutFeedback>
  );
}

export default AuthContent;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: Colors.primary800
  },
  containerPageTitle: {
    width: '100%',
    height: '40%',
    alignItems: "flex-start",
    justifyContent: 'flex-start',
    backgroundColor: Colors.neutral100,
  },
  inputsContainer: {
    height: '65%',
  }
});
