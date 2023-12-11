import { View, Image, Text, StyleSheet } from "react-native";
import { Feather } from '@expo/vector-icons'; 
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

function UpperLogo({ children }) {
  return (
    <View style={styles.container}>
      <Feather 
        name="check-square"
        size={20}
        color={'#000'}
      />
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

export default UpperLogo;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 5,
    paddingLeft: "5%",
    alignItems: "center",
  },
  text: {
    fontSize: hp ('1.9%'),
    fontFamily: "open-sans-bold",
  },
});
