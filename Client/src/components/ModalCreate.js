import { 
    Pressable, 
    StyleSheet, 
    TextInput, 
    View, 
    Text, 
    TouchableWithoutFeedback,
    Keyboard
} from "react-native";
import { GlobalStyles } from "../constants/Colors";
import { 
    widthPercentageToDP as wp, 
    heightPercentageToDP as hp
} from "react-native-responsive-screen";

export function TeamsModal({ createTeam, handleClose }) {

    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>Create a new team</Text>
                    </View>
                    <View style={styles.inputsContainer}>
                        <TextInput 
                            placeholder="Enter team name"
                            placeholderTextColor={'#999'}
                            style={styles.inputs}
                        />
                        <View style={styles.buttonSubmitContainer}>
                            <Pressable 
                                style={styles.buttonSubmit}
                                android_ripple={{ color: GlobalStyles.colors.primary400 }}
                                onPress={createTeam}
                            >   
                                <Text style={styles.buttonText}>CREATE</Text>
                            </Pressable>
                            <Pressable 
                                style={[styles.buttonSubmit, styles.buttonCancel]}
                                android_ripple={{ color: GlobalStyles.colors.primary400 }}
                                onPress={handleClose}
                            >   
                                <Text style={[styles.buttonText, {color: GlobalStyles.colors.primary900}]}>CANCEL</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    modalContainer: {
        width: wp('100%'),
        height: hp('100%'),
        alignItems: "center",
        backgroundColor: GlobalStyles.colors.neutral1100,
    },
    modalContent: {
        width: '90%',
        height: '35%',
        backgroundColor: GlobalStyles.colors.neutral100,
        borderRadius: 12,
        marginTop: '40%',
    }, 
    titleContainer: {
        width: '100%',
        height: '20%',
        justifyContent: "center",
        backgroundColor: GlobalStyles.colors.primary900,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
    },
    title: {
        width: '100%',
        textAlign: "center",
        color: '#fff', 
        fontFamily: 'open-sans-bold', 
        fontSize: 17,
    },
    inputsContainer: {
        width: '100%',
        height: '80%',
        justifyContent: "center",
        alignItems:"center",
        gap: 20,
    },
    inputs: {
        width: '85%',
        height: '25%',
        borderRadius: 12,
        borderWidth: 2,
        paddingLeft: 10,
        borderColor: GlobalStyles.colors.primary800,
        fontFamily: 'open-sans-bold',
    },
    buttonSubmitContainer: {
        width: '85%',
        height: '15%',
        alignItems: "flex-start",
        justifyContent: "space-between",
        flexDirection: "row"
    },
    buttonSubmit: {
        width: '45%',
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
    buttonCancel: {
        backgroundColor: GlobalStyles.colors.primary50,
        borderWidth: 2,
        borderColor: GlobalStyles.colors.primary900,
    }
})