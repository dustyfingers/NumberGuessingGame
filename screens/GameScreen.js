import { View, Text, StyleSheet, Alert } from "react-native";
import { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";

import Card from "../components/ui/Card";
import InstructionsText from "../components/ui/InstructionsText";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";

const generateRandomNumber = (min, max, exclude) => {
  const randNum = Math.floor(Math.random() * (max - min)) + min;
  if (randNum === exclude) {
    return generateRandomNumber(min, max, exclude);
  } else return randNum;
};

let minBoundary = 0;
let maxBoundary = 100;

const GameScreen = ({ userNumber, setGameOver }) => {
  const initialGuess = generateRandomNumber(1, 100, userNumber);
  const [guess, setGuess] = useState(initialGuess);
  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && guess < userNumber) ||
      (direction === "higher" && guess > userNumber)
    ) {
      Alert.alert("Don't lie!", "You know lying is wrong...", [
        {
          text: "Sorry!",
          style: "cancel",
        },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBoundary = guess;
    } else {
      minBoundary = guess + 1;
    }
    const newGuess = generateRandomNumber(minBoundary, maxBoundary, guess);
    setGuess(newGuess);
  };
  useEffect(() => {
    if (guess === userNumber) setGameOver(true);
  }, [guess, userNumber, setGameOver]);
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{guess}</NumberContainer>
      <Card>
        <InstructionsText style={styles.instructionsText}>
          Higher or lower?
        </InstructionsText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton handlePress={() => nextGuessHandler("lower")}>
              <Ionicons name="remove" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton handlePress={() => nextGuessHandler("higher")}>
              <Ionicons name="add" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View>
        <Text>Log Rounds</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,
  },
  instructionsText: { marginBottom: 12 },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});

export default GameScreen;
