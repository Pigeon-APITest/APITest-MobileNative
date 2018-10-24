import React from 'react';
import { StyleSheet, Text, View, Button } from "react-native";

export default class SwipePage extends React.Component {
    static navigationOptions = {
      title: "Swipe Page",
    };

    constructor(props) {
        super(props);
        this.state = {
        };
    }



    render() {

      const { navigate } = this.props.navigation;

      return (
        <Button
          title="Button Page"
          accessibilityLabel="switchToButtons"
          onPress={() =>
            navigate("Button", { name: "buttonPageButton" })
          }
          style={{
            flex: 1
          }}
        />
      );
    }
  }  