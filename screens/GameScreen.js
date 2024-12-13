import { View, Text, StyleSheet } from "react-native";

const GameScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Opponent's Guess</Text>
      <View>
        <Text>Higher or lower?</Text>
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
