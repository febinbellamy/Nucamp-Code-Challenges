import React, { Component } from "react";
import { FlatList, View } from "react-native";
import { ListItem, Card, Text } from "react-native-elements";
import { FILMS } from "../shared/films";

/*
  Your challenges:  
  1. Fix the component by adding a constructor and adding the data imported as FILMS to the component's state
                    
  2. In the FlatList, use that state data for films in the 'data' attribute.
                   
  3. In the ListItem, add the film title as the title, and the director as the subtitle.
                    
  4. Update films.js to add a third film of your choice. 
  
  Bonus Challenge: Write a custom view in the ListItem subtitle to show more details about each film, such as the release year, genre, language.
*/
class FilmCatalogue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      films: FILMS,
    };
  }

  render() {
    const renderFilm = ({ item }) => {
      return (
        <ListItem
          title={item.title}
          subtitle={
            <View>
              <Text>Director: {item.director}</Text>
              <Text>Release Year: {item.year}</Text>
              <Text>Category: {item.category}</Text>
              <Text>Language: {item.language}</Text>
            </View>
          }
        />
      );
    };

    return (
      <Card title="Film Catalogue">
        <FlatList
          data={this.state.films}
          renderItem={renderFilm}
          keyExtractor={(item) => item.id.toString()}
        />
      </Card>
    );
  }
}

export default FilmCatalogue;
