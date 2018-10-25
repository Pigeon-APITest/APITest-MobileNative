import React from 'react';
import { StyleSheet, Text, View, Button } from "react-native";
import * as Colour from "../settings/Colour";
import * as Style from "../settings/Style";

export default class SwipePage extends React.Component {
    static navigationOptions = {
      title: "Scroll Page",
      headerLeft: null,
      headerStyle: {
        backgroundColor: Colour.COLOUR_HEADER
      },
      headerTintColor: "white",
      headerTitleStyle:{
        fontWeight: "normal",
        textAlign: "center",
        flex: 1,
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
        <View style={Style.STYLES.navigationButtonsContainer}>
                <View style={Style.STYLES.navigationButtonContainer}>
                <Button title="Button Page"
                        color={Colour.COLOUR_HEADER_BUTTON}
                        accessibilityLabel="switchToButton"
                        onPress={() => navigate("Button", { name: "buttonPageButton" })}
                />
                </View>

                <View style={Style.STYLES.navigationButtonContainer}>
                <Button title="Swipe Page"
                        color={Colour.COLOUR_HEADER_BUTTON}
                        accessibilityLabel="switchToSwipe"
                        onPress={() => navigate("Swipe", { name: "swipePageButton" })}
                />
                </View>
        </View>
      );
    }
  }  