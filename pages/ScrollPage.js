import React from 'react';
import { StyleSheet, Text, View, Button } from "react-native";
import * as Colour from "../settings/Colour";
import * as Style from "../settings/Style";

export default class SwipePage extends React.Component {
    static navigationOptions = {
      title: "Scroll Page",
      headerStyle: {
        backgroundColor: Colour.COLOUR_HEADER
      },
      headerTintColor: "white",
      headerTitleStyle:{
        fontWeight: "normal",
        textAlign: "center",
        flex: 1,
        marginRight: 76,
      },
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