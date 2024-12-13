import { useState } from "react";
import { TextInput, View, StyleSheet, Alert } from "react-native";

import PrimaryButton from "../components/PrimaryButton";

const GameStartScreen = ({ onPickNumber }) => {
  const [enteredNumber, setEnteredNumber] = useState("");
  const numberInputHandler = (input) => {
    setEnteredNumber(input);
  };
  const resetInputHandler = () => setEnteredNumber("");
  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber > 99 || chosenNumber < 0) {
      Alert.alert("Invalid number!", "Please choose a number between 0-99.", [
        {
          text: "Okay",
          style: "desctructive",
          onPress: resetInputHandler,
        },
      ]);
    }
    onPickNumber(chosenNumber);
  };
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        value={enteredNumber}
        onChangeText={numberInputHandler}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContianer}>
          <PrimaryButton handlePress={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContianer}>
          <PrimaryButton handlePress={confirmInputHandler}>
            Confirm
          </PrimaryButton>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginHorizontal: 24,
    marginTop: 100,
    backgroundColor: "#72063c",
    borderRadius: 8,
    // android box shadow
    elevation: 4,
    // ios box shadow
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContianer: {
    flex: 1,
  },
  numberInput: {
    width: 50,
    fontSize: 32,
    padding: 0,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default GameStartScreen;
