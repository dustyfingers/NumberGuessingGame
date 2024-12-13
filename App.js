import { useState } from "react";
import { ImageBackground, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import GameStartScreen from "./screens/GameStartScreen";
import GameScreen from "./screens/GameScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();

  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
  };

  let screen = <GameStartScreen onPickNumber={pickedNumberHandler} />;
  if (userNumber) screen = <GameScreen />;
  return (
    <LinearGradient style={styles.rootScreen} colors={["#4e0329", "#ddb52f"]}>
      <ImageBackground
        source={require("./assets/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        {screen}
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
