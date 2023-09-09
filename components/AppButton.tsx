import { useRef } from "react";
import { Animated, Pressable, StyleSheet, Text } from "react-native";

interface AppButtonProps {
  label: string;
  onPress?: () => void;
}

export default function AppButton({ label, onPress }: AppButtonProps) {
  const buttonAnimation = useRef(new Animated.Value(1)).current;

  function handlePressIn() {
    Animated.timing(buttonAnimation, {
      toValue: 0.4,
      duration: 150,
      useNativeDriver: true,
    }).start();
  }

  function handlePressOut() {
    Animated.timing(buttonAnimation, {
      toValue: 1,
      duration: 100,
      useNativeDriver: true,
    }).start();
  }

  return (
    <Pressable
      style={styles.buttonContainer}
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      <Animated.View style={{ ...styles.button, opacity: buttonAnimation }}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: "100%",
  },
  button: {
    padding: 16,
    backgroundColor: "black",
    alignItems: "center",
    borderRadius: 10,
  },
  buttonLabel: {
    fontSize: 24,
    color: "white",
  },
});
