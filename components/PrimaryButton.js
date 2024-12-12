import { View, Text, StyleSheet, Pressable } from "react-native";

const PrimaryButton = ({ children }) => {
  function pressHandler() {}
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={pressHandler}
        android_ripple={{ color: "#640233" }}
        style={({ pressed }) =>
          pressed
            ? [styles.pressed, styles.buttonInnerContainer]
            : styles.buttonInnerContainer
        }
      >
        <Text>{children}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonOuterContainer: { margin: 4, borderRadius: 28, overflow: "hidden" },
  buttonInnerContainer: {
    backgroundColor: "#4e0329",
    paddingVertical: 8,
    paddingHorizontal: 16,
    // android shadow
    elevation: 2,
  },
  buttonText: {
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});

export default PrimaryButton;
