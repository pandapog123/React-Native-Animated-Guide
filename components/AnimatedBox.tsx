import { useEffect, useRef } from "react";
import { Animated } from "react-native";

interface AnimatedBoxProps {
  animationStep: 1 | 2 | 3;
}

export default function AnimatedBox({ animationStep }: AnimatedBoxProps) {
  const baseAnimation = useRef(new Animated.Value(0)).current;

  const boxRotation = baseAnimation.interpolate({
    inputRange: [1, 2, 3],
    outputRange: ["0deg", "45deg", "90deg"],
  });

  const boxBorderRadius = baseAnimation.interpolate({
    inputRange: [1, 2, 3],
    outputRange: [10, 50, 75],
  });

  const boxSize = baseAnimation.interpolate({
    inputRange: [1, 2, 3],
    outputRange: [100, 200, 300],
  });

  const boxBackground = baseAnimation.interpolate({
    inputRange: [1, 2, 3],
    outputRange: ["red", "green", "blue"],
  });

  useEffect(() => {
    Animated.timing(baseAnimation, {
      toValue: animationStep,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [animationStep]);

  return (
    <Animated.View
      style={{
        backgroundColor: boxBackground,
        width: boxSize,
        height: boxSize,
        transform: [{ rotate: boxRotation }],
        borderRadius: boxBorderRadius,
      }}
    ></Animated.View>
  );
}
