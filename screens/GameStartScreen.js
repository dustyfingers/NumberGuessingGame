import { useState } from "react";
import { TextInput, View, StyleSheet, Alert } from "react-native";

import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionsText from "../components/ui/InstructionsText";

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
    <View style={styles.rootContainer}>
      <Title>Guess my number</Title>
      <Card>
        <InstructionsText>Enter a Number:</InstructionsText>
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
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: { flex: 1, marginTop: 100, alignItems: "center" },
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
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default GameStartScreen;
