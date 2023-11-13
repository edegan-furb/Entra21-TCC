import { StyleSheet, View, Text } from "react-native";

function Footer({ children }) {
  return (
    <View style={styles.footer}>
      <Text style={styles.textFooter}>{children}</Text>
    </View>
  );
}

export default Footer;

const styles = StyleSheet.create({
  footer: {
    marginBottom: 10,
  },
  textFooter: {
    fontFamily: "open-sans",
    textAlign: "center",
    fontSize: 12
  },
});
