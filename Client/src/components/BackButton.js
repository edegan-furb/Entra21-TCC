// Back Button
import { StyleSheet, Pressable, View } from "react-native";
import {
    widthPercentageToDP as wp, 
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import { Ionicons } from '@expo/vector-icons';

export default function BackButton({ onPress }) {
    return(
        <View style={styles.container}>
            <Pressable style={styles.backButtonContainer} onPress={onPress}>
                <Ionicons 
                    name="ios-arrow-back" 
                    color={'#fff'} 
                    size={wp('7.5%')} 
                    style={styles.backButton}
                />
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: wp ('100%'),
        height: hp ('4%'),
        justifyContent: "center",
        paddingLeft: wp ('7')
    },
    backButtonContainer: {
        width: wp ('7'),
        height: hp ('4'),
        borderRadius: 20,
        elevation: 4,
        shadowColor: "black",
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 1,
    },
})