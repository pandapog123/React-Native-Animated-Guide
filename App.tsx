import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import AppButton from "./components/AppButton";
import AnimatedBox from "./components/AnimatedBox";
import { useState } from "react";

export default function App() {
  const [animationStep, setAnimationStep] = useState<1 | 2 | 3>(1);

  function handleAnimateClick() {
    setAnimationStep((prev) => {
      switch (prev) {
        case 1:
          return 2;
        case 2:
          return 3;
        case 3:
          return 1;
      }
    });
  }

  return (
    <SafeAreaView style={styles.appContainer}>
      <View style={styles.appSection}>
        <Text style={styles.heading1}>React Animated Guide</Text>

        <Text style={styles.heading2}>
          Click the button to animate the container!
        </Text>
      </View>

      <View style={styles.appSection}>
        <AnimatedBox animationStep={animationStep} />
      </View>

      <View style={styles.appSection}>
        <AppButton label="Animate Button!" onPress={handleAnimateClick} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  appSection: {
    alignItems: "center",
    gap: 8,
    padding: 24,
    width: "100%",
  },
  heading1: {
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
  },
  heading2: {
    fontSize: 26,
    textAlign: "center",
  },
});
