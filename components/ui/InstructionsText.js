import { Text, StyleSheet } from "react-native";

import Colors from "../../constants/colors";

const InstructionsText = ({ children }) => {
  return <Text style={styles.instructionsText}>{children}</Text>;
};

const styles = StyleSheet.create({
  instructionsText: {
    color: Colors.accent500,
    fontSize: 24,
  },
});

export default InstructionsText;
