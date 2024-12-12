import { View, Text, StyleSheet } from "react-native";

const PrimaryButton = ({ children }) => {
  return (
    <View style={styles.buttonContainer}>
      <Text>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    borderWidth: 4,
    borderColor: "green",
  },
});

export default PrimaryButton;
