// Back Button
import { StyleSheet, Pressable, Image } from "react-native";

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
        width: '100%',
        height: 80,
        justifyContent: 'flex-end',
        paddingLeft: 25,
    },
      backButton: {
        width: 40,
        height: 40,
        backgroundColor: '#0000004d',
        borderRadius: 50
    }
})