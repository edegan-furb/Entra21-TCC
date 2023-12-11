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

import { GlobalStyles } from "../constants/Colors";

export default function ButtonGoogleLogin() {
    return(
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
    );
}

const styles = StyleSheet.create({
    container: {
        width: wp('100%'),
        height: hp('10%'),
        alignItems: 'center',
        justifyContent: "center",
    },
    dividerContent: {
        height: '50%',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "center",
        gap: 8,
    },
    divider: {
        width: '33%',
        height: '3.8%',
        backgroundColor: GlobalStyles.colors.primary800
    },
    dividerText: {
        fontWeight: 'bold',
        color: GlobalStyles.colors.primary950,
    },
    googleButton: {
        backgroundColor: GlobalStyles.colors.neutral100,
        paddingVertical: "4.5%",
        paddingHorizontal: '9%',
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
        gap: 10
    },
    buttonText: {
        fontSize: hp ('1.6%'),
        fontFamily: "open-sans-bold",
        color: GlobalStyles.colors.primary800,
    },
    logoGoogle: {
        width: '5%',
        height: '100%'
    }
})


/* 

elevation: 4,
        shadowColor: "black",
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 1,

*/