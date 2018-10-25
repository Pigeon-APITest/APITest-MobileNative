import React from 'react';
import { StyleSheet, Text, View, Button } from "react-native";
import * as Colour from "../settings/Colour";
import * as Style from "../settings/Style";


export default class ButtonPage extends React.Component {
  
  resetPage() {
    this.setState({
      elementTextVisible: 0,
    });
  }
  
  showElementText() { 
    this.setState({elementTextVisible: 100 });
  }

  static navigationOptions = {
    title: "Button Page",
    headerStyle: {
      backgroundColor: Colour.COLOUR_HEADER,
      height: 45,
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
      elementTextVisible: 0,
    }
  }
  
    render() {
      const { navigate } = this.props.navigation;
      return (
        
        
        <View>

          <View style={Style.STYLES.navigationButtonsContainer}>
            <View style={Style.STYLES.navigationButtonContainer}>
                  <Button title="Button Page"
                          color={Colour.COLOUR_HEADER_BUTTON_SELECTED}
                          accessibilityLabel="switchToButton"
                          onPress={() => this.resetPage()} />
            </View>

            <View style={Style.STYLES.navigationButtonContainer}>
              <Button title="Swipe Page"
                      color={Colour.COLOUR_HEADER_BUTTON}
                      accessibilityLabel="switchToSwipe"
                      onPress={() => {  this.resetPage()
                                        navigate("Swipe", { name: "swipePageButton" })}} />
            </View>

            <View style={Style.STYLES.navigationButtonContainer}>
              <Button title="Scroll Page"
                      color={Colour.COLOUR_HEADER_BUTTON}
                      accessibilityLabel="switchToScroll"
                      onPress={() => { this.resetPage()
                                       navigate("Scroll", { name: "scrollPageButton" })}} />
            </View>
          </View>

          <View style={Style.STYLES.testButtonsContainer}>
            <View style={Style.STYLES.buttonContainer}>
              <Button title="Show Element"
                      accessibilityLabel="showElement"
                      onPress={() => this.showElementText()}/>
            </View>

            <View style={Style.STYLES.buttonContainer}>
              <Text accessibilityLabel="hiddenText"
                  style={{
                    textAlign: "center",
                    opacity: this.state.elementTextVisible
                  }}>
              Text is now visible</Text>
            </View>
          </View>
        </View>
        
      );
    }
  }