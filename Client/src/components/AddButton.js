import { Pressable, StyleSheet, Text, View } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Ionicons } from '@expo/vector-icons';
import { GlobalStyles } from "../constants/Colors"; 

export default function AddButton({ title, onPress }) {
    return(
        <View style={styles.addButtonContainer}>
            <Pressable style={styles.addButton} onPress={onPress}>
                <Ionicons
                    name="add-outline"
                    size={20}
                    color={GlobalStyles.colors.primary900}
                />
                <Text style={styles.addButtonText}>{title}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    addButtonContainer:{
        width: wp('100%'),
        height: hp('5%'),
        alignItems: "flex-end",
        paddingRight: '5%',
    },    
    addButton: {
        width: '30%',
        height: '100%',
        borderRadius: 12,
        backgroundColor: GlobalStyles.colors.primary50,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: GlobalStyles.colors.primary900,
    },
    addButtonText: {
        fontFamily: "open-sans-bold",
        fontSize: hp('1.5'),
        color: GlobalStyles.colors.primary900,
    }
})