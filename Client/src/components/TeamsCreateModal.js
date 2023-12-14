import { Pressable, StyleSheet, TextInput, View, Text, KeyboardAvoidingView } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { GlobalStyles } from "../constants/Colors";
import { 
    widthPercentageToDP as wp, 
    heightPercentageToDP as hp
} from "react-native-responsive-screen";

export function TeamsModal({ createTeam, handleClose }) {
    return(
        <View style={styles.modalContainer}>
            <View style={[styles.modalContent, styles.modalPressed]}>
                <View style={styles.titleContainer}>
                    <Pressable onPress={handleClose} style={styles.buttonClose}>
                        <AntDesign name="closecircleo" size={20} color={'#fff'}/>
                    </Pressable>
                    <View style={styles.titleContent}>
                        <Text style={styles.title}>Create a new team</Text>
                    </View>
                </View>
                <View style={styles.inputsContainer}>
                    <TextInput 
                        placeholder="Enter team name"
                        placeholderTextColor={'#02020252'}
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
                        <Pressable 
                            style={({ pressed }) => pressed ? [styles.buttonSubmit, styles.pressed] : styles.buttonSubmit} 
                            android_ripple={{ color: GlobalStyles.colors.primary400 }}
                            onPress={createTeam}
                        >   
                            <Text style={styles.buttonText}>CREATE</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    modalContainer: {
        width: wp('100%'),
        height: hp('100%'),
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: GlobalStyles.colors.neutral1100,
    },
    modalContent: {
        width: '90%',
        height: '50%',
        alignItems: "flex-start",
        justifyContent: "flex-start",
        backgroundColor: GlobalStyles.colors.neutral100,
        borderRadius: 12,
    }, 
    titleContainer: {
        width: '100%',
        height: '10%',
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: GlobalStyles.colors.primary900,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        flexDirection: "row",
    },
    titleContent: {
        width: '85%',
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        color: '#fff', 
        fontFamily: 'open-sans-bold', 
        fontSize: 17,
        width: '55%',
    },
    buttonClose: {
        width: '7%',
        height: '55%',
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50,
    },
    inputsContainer: {
        width: '100%',
        height: '90%',
        alignItems:"center",
        justifyContent: "center",
        gap: 20,
    },
    inputs: {
        width: '80%',
        height: '15%',
        borderRadius: 12,
        borderWidth: 2,
        paddingLeft: 10,
        borderColor: GlobalStyles.colors.primary800,
        fontFamily: 'open-sans-bold',
    },
    buttonSubmitContainer: {
        width: '80%',
        height: '15%',
        alignItems: "flex-start",
        justifyContent: "center",
    },
    buttonSubmit: {
        width: '50%',
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: GlobalStyles.colors.primary900,
        height: 50,
        borderRadius: 12,
    },
    buttonText: {
        color: '#fff',
        fontFamily: 'open-sans-bold'
    },
    pressed: {
        opacity: 0.8,
    }
})