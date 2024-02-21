import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { useTheme } from "../../Context/theme-context";

function LoadingOverlay({ message, style }) {
  const { colors } = useTheme();

  return (
    <View
      style={[
        styles.rootContainer,
        style,
        { backgroundColor: colors.background50 },
      ]}
    >
      <Text style={styles.message}>{message}</Text>
      <ActivityIndicator size="large" />
    </View>
  );
}

export default LoadingOverlay;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
  },
  message: {
    fontSize: 16,
    marginBottom: 12,
  },
});
