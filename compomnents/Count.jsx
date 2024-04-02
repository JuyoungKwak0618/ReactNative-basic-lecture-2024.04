import React, { useState } from "react";
import { View, Button, Text, StyleSheet } from "react-native";

export default function Count() {
  const [count, setCount] = useState(0);

  const handleButton = () => {
    if(count < 10) {
      setCount(count + 1);
    } else {
      setCount(1);
    }
  }
  const handleReset = () => {
    setCount(0);
  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 60,
    },
    buttonContainer: {
      marginTop: 20,
      flexDirection: 'row',
    },
  });
  return (
    <View style={styles.container}>
      <Text>Count: {count}</Text>
      <View style={styles.buttonContainer}>
        <Button title="증가시키기" onPress={handleButton} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="리셋하기" onPress={handleReset} />
      </View>
    </View>
  );
};

