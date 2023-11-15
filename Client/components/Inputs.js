import { StyleSheet, Text, TextInput, View, TouchableOpacity } from "react-native";
import { GlobalStyles } from "../constants/Colors";
import { Ionicons } from '@expo/vector-icons';
import { useState } from "react";
import {
    widthPercentageToDP as wp, 
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';

export default function Inputs({ title, placeHolder, placeHolderTextColor, height, secureTextEntry }) {
    // creates the input state
    const [hidePass, setHidePass] = useState(true)
    
    return(
        <View style={styles.inputContent}>
            <Text style={styles.inputText}>{title}</Text>
            <View style={styles.inputArea}>
                <TextInput
                    style={styles.input}
                    placeholder={placeHolder}
                    placeholderTextColor={placeHolderTextColor}
                    secureTextEntry={secureTextEntry ? hidePass : !hidePass}
                />
                <TouchableOpacity onPress={() => setHidePass(!hidePass)}>
                    {/* Icon check */}
                    { hidePass ?
                        // true
                        <Ionicons name="eye" color={GlobalStyles.colors.primary800} size={20} height={height}/>
                        :
                        // false
                        <Ionicons name="eye-off" color={GlobalStyles.colors.primary800} size={20} height={height}/>
                    }
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    inputContent: {
        width: wp ('100%'),
        height: hp ('10%'),
        alignItems: "start",
        justifyContent: "center", 
        paddingHorizontal: wp ('12%')
    },
    inputText: {
        fontSize: hp ('1.8%'),
        color: GlobalStyles.colors.primary800,
    },
    inputArea: {
        flexDirection: 'row',
        borderBottomWidth: wp ('0.5%'),
        borderColor: GlobalStyles.colors.primary800,
        height: hp ('4.5%'),
        alignItems: "center"
    },  
    input: {
        width: wp ('70%'),
    },
})