import React, { useEffect, useState } from "react";
import { View, StyleSheet, Button, TextInput } from "react-native";
import * as Speech from "expo-speech";

export default function App() {
  const [thingToSay, setThingToSay] = useState("Hello Nucamp");

  useEffect(() => {
    (async () => {
      const voices = await Speech.getAvailableVoicesAsync();
      console.log(voices);
    })(); /* note: the final pair of parentheses at the end of this async
                function uses a JavaScript concept called an immediately invoked    
                function expression (IIFE) to call the code inside the async function 
                immediately. you do not need to know about this for this code 
                challenge, but in case you were wondering! */
  }, []);

  const speak = () => {
    Speech.speak(thingToSay, {
      _voiceIndex: 1,
      pitch: 2,
      rate: 0.5,
    });
  };

  const stopSpeak = () => {
    Speech.stop();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setThingToSay}
        defaultValue="Hello Nucamp"
      />
      <Button title="SPEAK" onPress={speak} />
      <Button title="STOP SPEAK" onPress={stopSpeak} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
