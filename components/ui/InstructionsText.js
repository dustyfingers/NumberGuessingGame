import { Text, StyleSheet } from "react-native";

import Colors from "../../constants/colors";

const InstructionsText = ({ children, style }) => {
  return <Text style={[styles.instructionsText, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  instructionsText: {
    color: Colors.accent500,
    fontSize: 24,
    fontFamily: "open-sans",
  },
});

export default InstructionsText;
