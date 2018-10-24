import React from 'react';
import { StyleSheet, Text, View, Button } from "react-native";

export default class ButtonPage extends React.Component {
    static navigationOptions = {
      title: "Button Page",
    };
  
    render() {
      const { navigate } = this.props.navigation;
      return (
        <Button
          title="Swipe Page"
          accessibilityLabel="switchToSwipe"
          onPress={() =>
            navigate("Swipe", { name: "swipePageButton" })
          }
        />
      );
    }
  }