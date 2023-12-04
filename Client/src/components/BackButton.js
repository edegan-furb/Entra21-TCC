// Back Button
import { StyleSheet, Pressable } from "react-native";
import {
    widthPercentageToDP as wp, 
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import { Ionicons } from '@expo/vector-icons';

export default function BackButton({ onPress }) {
    return(
        <>
            <Pressable style={styles.backButtonContainer} onPress={onPress}>
                <Ionicons name="arrow-back" color={'#fff'} size={wp('7.5%')} style={styles.backButton}/>
            </Pressable>
        </>
    );
}

const styles = StyleSheet.create({
    backButtonContainer: {
        width: wp ('100%'),
        height: hp ('7%'),
        paddingLeft: wp ('6%'),
        elevation: 4,
        shadowColor: "black",
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 1,
        justifyContent: 'flex-end'
    },
})