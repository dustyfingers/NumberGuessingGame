import { TextInput, View, StyleSheet } from "react-native";

import PrimaryButton from "../components/PrimaryButton";

const GameStartScreen = () => {
  return (
    <View style={styles.inputContainer}>
      <TextInput />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    padding: 16,
    marginTop: 100,
    backgroundColor: "#7206c3",
  },
});

export default GameStartScreen;
