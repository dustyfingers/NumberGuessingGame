import { View, Text, StyleSheet, Alert } from "react-native";
import Title from "../components/ui/Title";
import { useEffect, useState } from "react";
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
      <View>
        <Text>Higher or lower?</Text>
        <View>
          <PrimaryButton handlePress={() => nextGuessHandler("lower")}>
            -
          </PrimaryButton>
          <PrimaryButton handlePress={() => nextGuessHandler("higher")}>
            +
          </PrimaryButton>
        </View>
      </View>
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
});

export default GameScreen;
