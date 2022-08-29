/* Code Challenge

Challenge 1: Make the first Rating component a read-only component, so that it cannot be changed by swiping. 
Challenge 2: Both Ratings use stars, which are the default if you do not specify otherwise. Turn them both into rockets. 
Challenge 3: Make it possible to set your rating (the second Rating component) with a fraction of one decimal point, e.g. 4.1 or 2.7.
Challenge 4: If you do not specify a number for the max rating, then it is set by default to 5. Set both Ratings to a max of 10 rockets. 
Challenge 5: Show the second Rating's numeric value in real-time, e.g. Rating: 5.6/10
Challenge 6: Add an onPress prop to the Button component so that when the button is clicked, the handleSubmit() method defined below the constructor will be called.
Challenge 7: View the Layout Props documentation for React Native, then modify the style prop for each component using the available layout props. There is no single right answer for this challenge; the motive is to get you to experiment with the layout props and see for yourself how they work. Try out different props and values to see for yourself what they do. You can keep the layout props that are already there and add others, or change them entirely. You can choose to use inline styles or use the styles StyleSheet at the bottom.
Challenge 8: Along with the link to your saved Snack, write at least 3 sentences or more about what layout props you tried in Challenge 7, and what you learned about how they work. 

*/

// https://snack.expo.dev/@febinbellamy/code-challenge:-rne-rating-component

import * as React from "react";
import Constants from "expo-constants";
import { Text, View, StyleSheet, Button } from "react-native";
import { Card, Rating } from "react-native-elements";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 5,
      submittedMessage: "",
    };
  }

  handleSubmit() {
    this.setState({
      submittedMessage: `Submitted Rating: ${this.state.rating}`,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Card>
          <Text>Overall Rating</Text>
          <Rating
            readonly={true}
            type={"rocket"}
            startingValue={3}
            count={10}
            ratingCount={10}
            imageSize={20}
            style={{ alignItems: "center", padding: 10 }}
          />
          <Text>Submit Your Rating</Text>
          <Rating
            imageSize={20}
            type={"rocket"}
            fractions="{1}"
            startingValue={this.state.rating}
            count={10}
            ratingCount={10}
            showRating={true}
            style={{ alignItems: "center" }}
            onFinishRating={(rating) => this.setState({ rating: rating })}
          />
          <View style={{ margin: 20 }}>
            <Button
              color="#5637DD"
              title="Submit"
              onPress={() => this.handleSubmit()}
            />
          </View>
          <View style={{ margin: 10 }}>
            <Text>{this.state.submittedMessage}</Text>
          </View>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    paddingTop: Constants.statusBarHeight,
    padding: 8,
    backgroundColor: "rgba(90, 20, 200, 0.5)",
    borderWidth: 20,
    borderColor: "green",
  },
});
