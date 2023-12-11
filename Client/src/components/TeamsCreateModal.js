import { Pressable, StyleSheet, TextInput, View, Text } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { GlobalStyles } from "../constants/Colors";

export function TeamsModal({ onPress, handleClose }) {

    return(
        <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
                <Pressable onPress={handleClose} style={styles.buttonClose}>
                    <AntDesign name="closecircleo" size={20} color={'#000'}/>
                </Pressable>
                <View style={styles.inputsContainer}>
                    <TextInput 
                        placeholder="Nome da Equipe"
                        style={styles.inputs}
                    />
                    <TextInput 
                        placeholder="Nome da Equipe"
                        style={styles.inputs}
                    />
                    <TextInput 
                        placeholder="Nome usuario"
                        style={styles.inputs}
                    />
                    <View style={styles.buttonSubmitContainer}>
                        <Pressable style={styles.buttonSubmit}>
                            <Text>SUBMIT</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    modalContainer: {
        width: '100%',
        height: '100%',
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: GlobalStyles.colors.neutral1100
    },
    modalContent: {
        width: '90%',
        height: '80%',
        alignItems: "flex-start",
        justifyContent: "flex-start",
        backgroundColor: GlobalStyles.colors.neutral100,
        borderRadius: 12,
    },
    buttonClose: {
        width: '100%',
        height: '7%',
        alignItems: "flex-start",
        justifyContent: "center",
        padding: 10,
    },
    inputsContainer: {
        width: '100%',
        height: '60%',
        backgroundColor: '#888',
        alignItems:"center",
        justifyContent: "center",
        gap: 20
    },
    inputs: {
        width: '80%',
        height: 50,
        borderRadius: 12,
        borderWidth: 2,
        paddingLeft: 10,
        borderColor: GlobalStyles.colors.primary800,
    },
    buttonSubmitContainer: {
        width: '80%',
        height: '15%',
        backgroundColor: GlobalStyles.colors.primary100,
        alignItems: "flex-start",
        justifyContent: "center"
    },
    buttonSubmit: {
        width: '50%',
        backgroundColor: GlobalStyles.colors.primary900,
        height: 50,
        borderRadius: 12
    }
})