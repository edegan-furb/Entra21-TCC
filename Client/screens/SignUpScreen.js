import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

function SignUpScreen() {
  return (  
    <View style={styles.container}>
      <LinearGradient
          colors={['#420A89', '#742dcde6', '#d3b8fa', '#e2d3f8', '#ffffff']}
          locations={[0.05, 0.20, 0.35, 0.4, 0.6]}
          style={styles.background}
        />
        <View style={styles.backButtonContainer}>
          
        </View>
    </View>
  );
}

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: "start",
    justifyContent: "start"
  },
  background: {
    width: '100%',
    height: '100%',
  },
  backButtonContainer: {
    width: '100%',
    height: 100,
    backgroundColor: '#333',
  },
  backButton: {
    width: 30,
    height: 30
  }
});
