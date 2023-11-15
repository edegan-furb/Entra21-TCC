// Back Button
import { StyleSheet, Pressable, Image } from "react-native";
import {
    widthPercentageToDP as wp, 
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import { GlobalStyles } from "../constants/Colors";

export default function BackButton({ onPress }) {
    return(
        <>
            <Pressable style={styles.backButtonContainer} onPress={onPress}>
                <Image source={require('../assets/images/backButton.png')} style={styles.backButton}/>
            </Pressable>
        </>
    );
}

const styles = StyleSheet.create({
    backButtonContainer: {
        width: wp ('100%'),
        height: hp ('5%'),
        paddingLeft: wp ('3%'),
        elevation: 4,
        shadowColor: "black",
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 1,
    },
      backButton: {
        width: wp ('7%'),
        height: hp ('3%'),
        backgroundColor: GlobalStyles.colors.neutral1000,
        borderRadius: 50,
    }
})