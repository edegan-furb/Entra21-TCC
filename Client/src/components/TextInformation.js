import { StyleSheet, View, Text } from "react-native";
import { GlobalStyles } from "../constants/Colors";
import AddButton from "./AddButton";
import group from "./lixo/group";
import List from "./List";

export default function TextInformation({ onPress, onPressHandler, data, title, firstText, secondText }) {
  
  if(group.length > 0) {
    return <List action={onPressHandler} data={data}/>
  } 

  let button = <AddButton title={title} onPress={onPress} button={styles.button}/>
  
  return(
    <View style={styles.textContainer}>
      <Text style={styles.text}>
        {firstText}
      </Text>
      <Text style={styles.text}>
        {secondText}
      </Text>
      <View style={styles.addButtonContainer}>
        {button}
      </View>
    </View>  
  );
}

const styles = StyleSheet.create({
  textContainer: {
    width: '100%',
    height: '60%',
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  text: {
    width: '80%',
    fontWeight: "500",
    fontSize: 19,
    textAlign: "center",
    color: GlobalStyles.colors.primary900,
  },
  addButtonContainer: {
    width: '95%',
    height: '20%',
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: '80%'
  }
})