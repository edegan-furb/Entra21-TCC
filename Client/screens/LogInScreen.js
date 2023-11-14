import { StyleSheet, View, Text, TextInput, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import CustomButton from "../components/CustomButton";
import { useNavigation } from "@react-navigation/native";

function LogInScreen() {
  const navigation = useNavigation();

  function onPressHandler() {
    navigation.navigate("Tabs");
  }
  
  const handlePress = () => {
    alert('Botão pressionado!');
  };
  return (
    <View style={styles.rootContainer}>
      <LinearGradient
        style={styles.container}
        locations={[0, 0.1198, 0.2205, 0.2917]}
        colors={["#420A89", "rgba(116, 45, 205, 0.83)", "#D7B7FF", "#FFF"]}
      >
        <View>
          <Text style={styles.titulo}> Welcome</Text>
        </View>

        <View name="form" style={styles.form}>
          <Text style={styles.label}>Email</Text>
          <TextInput style={styles.input} />
          <Text style={styles.label}>Password</Text>
          <TextInput style={styles.input} />
        </View>

        <View name="botao" styles={styles.botao}>
          <TouchableOpacity style={styles.button} onPress={handlePress}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
}

export default LogInScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#9a3412",
  },
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'left',
    width: '100%'

  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    border: 0,
    marginLeft: 24,
    marginRight: 68,
    borderWidth: 0,
    borderBottomWidth: 1
  },
  titulo: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 35,
    fontWeight: '800',
    paddingTop: 58
  },
  label: {
    color: '#4215E8',
    textAlign: 'left',
    paddingLeft: 34,
    paddingTop: '22.05%',
    fontSize: 20
  },
  button: {
    backgroundColor: '#48118F',
    alignItems: 'center',
    justifyContent: 'center',
    width: 342,
    height: 60,
    borderRadius: 35,
    alignSelf: 'center'
    
  },
  buttonText: {
    width: 219,
    height: 29,
    color: '#fff',
    textAlign: 'center',
    fontSize: 25,
    
    
  },
  botao: {
    paddingTop: 35
  },
  form: {
    alignText: 'center',
  }
});

/*
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';




export default function App() {

  const handlePress = () => {
    alert('Botão pressionado!');
  };

  return (
    <LinearGradient
      style={styles.container}
      locations={[0, 0.1198, 0.2205, 0.2917]}
      colors={['#420A89', 'rgba(116, 45, 205, 0.83)', '#D7B7FF', '#FFF']}>
      <View >
        <Text style={styles.titulo}> Welcome</Text>
      </View>
      

      <View name='form' style = {styles.form}>
        <Text style = {styles.label}>Email</Text>
        <TextInput style={styles.input} />
        <Text style = {styles.label}>Password</Text>
        <TextInput style = {styles.input} />
      </View>
        
      <View name='botao' styles={styles.botao}>
        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>Clique em mim!</Text>
        </TouchableOpacity>
      </View>


    </LinearGradient>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'left',

  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    border: 0,
    marginLeft: 24,
    marginRight: 68,
    borderWidth: 0,
    borderBottomWidth: 1
  },
  titulo: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 35,
    fontWeight: '800',
    paddingTop: 58
  },
  label: {
    color: '#4215E8',
    textAlign: 'left',
    paddingLeft: 34,
    paddingTop: '22.05%',
    fontSize: 20
  },
  button: {
    backgroundColor: '#48118F',
    alignItems: 'center',
    justifyContent: 'center',
    width: 342,
    height: 60,
    borderRadius: 35,
    alignSelf: 'center'
    
  },
  buttonText: {
    width: 219,
    height: 29,
    color: '#fff',
    textAlign: 'center',
    fontSize: 25,
    
    
  },
  botao: {
    paddingTop: 35
  },
  form: {
    alignText: 'center',
  }
});



*/
