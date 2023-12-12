import { StyleSheet, View, Text } from "react-native";
import { GlobalStyles } from "../constants/Colors";
import AddButton from "./AddButton";

export default function TextInformation() {

    

    return(
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            Oops! It looks like you don't have any teams registered yet.
          </Text>
          <Text style={styles.text}>
            Press the button below to create your first team now!
          </Text>
          <View style={styles.addButtonContainer}>
            <AddButton title={'Add Teams'} onPress={modalPress}/>
          </View>
        </View>
        
    );
}

const styles = StyleSheet.create({
    textContainer: {
        width: '90%',
        height: '70%',
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
    },
    text: {
        width: '90%',
        fontWeight: "500",
        fontSize: 19,
        textAlign: "center",
        color: GlobalStyles.colors.primary900
    },
    addButtonContainer: {
        width: '100%',
        height: '15%',
        alignItems: "center",
        justifyContent: "center",
    }
})