/* 
Code Challenge 2: 
Add a new animation of your choice to your forked version of the Snack, using a style other than the ones that are already being used (fontSize, backgroundColor, translateY). 
You can modify an existing button/animation combo, or add a completely new one. It can use interpolation, or not. It can use an easing function, or not.
*/

// https://snack.expo.dev/@febinbellamy/code-challenge:-animated

import * as React from "react";
import { Text, View, StyleSheet, Animated, Easing, Button } from "react-native";
import Constants from "expo-constants";
import { Card } from "react-native-elements";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textScaleAnimValue: new Animated.Value(0),
      viewColorAnimValue: new Animated.Value(0),
      viewPosYAnimValue: new Animated.Value(0),
    };
  }

  animateTextScale() {
    this.state.textScaleAnimValue.resetAnimation();
    Animated.timing(this.state.textScaleAnimValue, {
      toValue: 30,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  }

  animateViewColor() {
    this.state.viewColorAnimValue.resetAnimation();
    Animated.timing(this.state.viewColorAnimValue, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  }

  animateViewPosY() {
    this.state.viewPosYAnimValue.resetAnimation();
    Animated.timing(this.state.viewPosYAnimValue, {
      toValue: 1,
      duration: 1500,
      easing: Easing.bounce,
      useNativeDriver: true,
    }).start();
  }

  render() {
    const bgColor = this.state.viewColorAnimValue.interpolate({
      inputRange: [0, 0.15, 0.3, 0.45, 0.6, 0.75, 0.9],
      outputRange: [
        "red",
        "orange",
        "yellow",
        "green",
        "blue",
        "indigo",
        "violet",
      ],
    });

    const posY = this.state.viewPosYAnimValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, -100, -300],
    });

    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          Play around with the Animated code in the editor to learn more about
          how it works.
        </Text>
        <Button
          title="Click To Animate Text Scale"
          onPress={() => this.animateTextScale()}
        />
        <Button
          title="Click To Animate View Color"
          onPress={() => this.animateViewColor()}
        />
        <Button
          title="Clck To Animate View Position Y"
          onPress={() => this.animateViewPosY()}
        />
        <Card>
          <Animated.View
            style={{
              padding: 130,
              backgroundColor: bgColor,
              borderTopLeftRadius: 200,
              borderTopRightRadius: 200,
              borderBottomLeftRadius: 200,
              borderBottomRightRadius: 200,
              transform: [{ translateY: posY }],
            }}
          >
            <Animated.Text
              style={{
                fontSize: this.state.textScaleAnimValue,
                textAlign: "center",
              }}
            >
              Animate Me
            </Animated.Text>
          </Animated.View>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  paragraph: {
    margin: 10,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
