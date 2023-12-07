import {
    StyleSheet,
    View,
    Text,
    Pressable,
    Image,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { SimpleLineIcons } from '@expo/vector-icons';

import { GlobalStyles } from "../constants/Colors";

export default function ButtonGoogleLogin() {
    return(
        <>
            <View style={styles.container}>
                <View style={styles.dividerContent}>
                    <View style={styles.divider}></View>
                    <Text style={styles.dividerText}>or</Text>
                    <View style={styles.divider}></View>
                </View>
                <Pressable style={styles.googleButton}>
                    <Image 
                        source={require('../../assets/images/google.png')} 
                        style={styles.logoGoogle}
                    />
                    <Text style={styles.buttonText}>LOGIN WITH GOOGLE</Text>
                </Pressable>
            </View>
        </>

    );
}

const styles = StyleSheet.create({
    container: {
        width: wp('100%'),
        height: hp('10'),
        alignItems: 'center',
        justifyContent: "center",
    },
    dividerContent: {
        height: hp('6'),
        width: wp('100'),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "center",
        gap: 8,
    },
    divider: {
        width: '34%',
        height: hp('0.2%'),
        backgroundColor: GlobalStyles.colors.primary800
    },
    dividerText: {
        fontWeight: 'bold',
        color: GlobalStyles.colors.primary950,
    },
    googleButton: {
        backgroundColor: GlobalStyles.colors.neutral100,
        width: wp('60'),
        height: hp('6.5'),
        borderWidth: 2,
        borderRadius: 12,
        borderColor: GlobalStyles.colors.primary800,
        elevation: 8,
        shadowColor: "black",
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "center",
        gap: wp('3')
    },
    buttonText: {
        fontSize: hp ('1.6%'),
        fontFamily: "open-sans-bold",
        color: GlobalStyles.colors.primary950,
    },
    logoGoogle: {
        width: wp('6'),
        height: hp('3')
    }
})


/* 

elevation: 4,
        shadowColor: "black",
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 1,

*/