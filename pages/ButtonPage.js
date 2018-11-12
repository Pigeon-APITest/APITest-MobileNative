import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Keyboard, ScrollView } from "react-native";
import * as Colour from "../settings/Colour";
import * as Style from "../settings/Style";


export default class ButtonPage extends React.Component {
  
  resetPage() {
    this.setState({
      displayButton: "none",
      displayButtonDelay: "none",
      textChanger: "Original text",
      hiddenTextDelayOpacity: 0,
      displayedTextOpacity: 1,
      nestedTextDelayOpacity: 0,
    });
    this.textInput.clear();
  }
  
  showElement() { 
    this.setState({ displayButton: "flex"});
  }

  showElementAfterDelay() {
    setTimeout(
      function() {
        this.setState({ displayButtonDelay: "flex"});
      }
      .bind(this),
      1000);
  }

  changeText() {
    setTimeout(
      function() {
        this.setState({ textChanger: "Changed text"});
      }
      .bind(this),
      1000);
  }

  showTextAfterDelay() {
    setTimeout(
      function() {
        this.setState({ hiddenTextDelayOpacity: 1});
      }
      .bind(this),
      1000);
  }
  
  hideTextAfterDelay() {
    setTimeout(
      function() {
        this.setState({ displayedTextOpacity: 0});
      }
      .bind(this),
      1000);
  }

  showNestedTextAfterDelay() {
    setTimeout(
      function() {
        this.setState({ nestedTextDelayOpacity: 1});
      }
      .bind(this),
      1000);
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
      displayButton: "none",
      displayButtonDelay: "none",
      textChanger: "Original text",
      hiddenTextDelayOpacity: 0,
      displayedTextOpacity: 1,
      nestedTextDelayOpacity: 0,
    }
  }
  
    render() {
      const { navigate } = this.props.navigation;
      return (
        
        
        <ScrollView style={{  flexDirection: "column",
                        backgroundColor: Colour.COLOUR_BACKGROUND,
                        height: "100%",}}>

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

          <View style={Style.STYLES.testButtonsRow}>
            <View style={Style.STYLES.buttonContainer}>
              <Button title="Show Button"
                      accessibilityLabel="showElement"
                      onPress={() => this.showElement()}/>
            </View>

            <View style={Style.STYLES.buttonContainer}>
              <View style= {{display: this.state.displayButton}}>
                <Button title="Clickable"
                        accessibilityLabel="hiddenElement"
                        style={{
                          textAlign: "center",
                        }}
                        onPress={() => this.resetPage()}
                        />
              </View>
            </View>
          </View>
          

          <View style={Style.STYLES.testButtonsRow}>
            <View style={Style.STYLES.buttonContainer}>
              <Button title="Show Button After 1 sec"
                      accessibilityLabel="showElementAfterDelay"
                      onPress={() => this.showElementAfterDelay()}/>
            </View>

            <View style={Style.STYLES.buttonContainer}>
              <View style= {{display: this.state.displayButtonDelay}}>
                <Button title="Delayed Element"
                        accessibilityLabel="hiddenElementDelay"
                        style={{
                          textAlign: "center",
                        }}
                        onPress={() => this.resetPage()}
                        />
              </View>
            </View>
          </View>

          <View style={Style.STYLES.testButtonsRow}>
            <View style={Style.STYLES.buttonContainer}>
              <Button title="Show Text After 1 sec"
                      accessibilityLabel="showTextAfterDelay"
                      onPress={() => this.showTextAfterDelay()}/>
            </View>

            <View style={Style.STYLES.buttonContainer}>
                <Text   accessibilityLabel="hiddenTextDelay"
                        style={{
                          textAlign: "center",
                          opacity: this.state.hiddenTextDelayOpacity,
                        }}>Text is now displayed</Text>
            </View>
          </View>


          <View style={Style.STYLES.testButtonsRow}>
            <View style={Style.STYLES.buttonContainer}>
              <Button title="Remove Text After 1 sec"
                      accessibilityLabel="hideTextAfterDelay"
                      onPress={() => this.hideTextAfterDelay()}/>
            </View>

            <View style={Style.STYLES.buttonContainer}>
                <Text   accessibilityLabel="displayedTextDelay"
                        style={{
                          textAlign: "center",
                          opacity: this.state.displayedTextOpacity,
                        }}>Text is now displayed</Text>
            </View>
          </View>
          
          <View style={Style.STYLES.testButtonsRow}>
            <View style={Style.STYLES.buttonContainer}>
              <Button title="Change Text"
                      accessibilityLabel="changeText"
                      onPress={() => this.changeText()}/>
            </View>

            <View style={Style.STYLES.buttonContainer}>
                <Text   accessibilityLabel="changingText"
                        style={{
                          textAlign: "center",
                        }}>{this.state.textChanger}</Text>
            </View>
          </View>

          <View style={Style.STYLES.testButtonsRow}>
            <View style={Style.STYLES.buttonContainer}>
              <Button title="Show Nested Text"
                      accessibilityLabel="showNestedText"
                      onPress={() => this.showNestedTextAfterDelay()}/>
            </View>

            <View style={Style.STYLES.buttonContainer}>
                <View accessibilityLabel="nestedContainer">
                  <Text   accessibilityLabel="nestedElement"
                          style={{
                            textAlign: "center",
                            opacity: this.state.nestedTextDelayOpacity,
                          }}>Nested element now displayed!</Text>
                </View> 
            </View>
          </View>
          

          <View style={Style.STYLES.testButtonsRow}>
            <View style={Style.STYLES.buttonContainer}>
              <TextInput  accessibilityLabel="textBox"
                          onSubmitEditing={Keyboard.dismiss}
                          ref={input => { this.textInput = input }}
                          style={{
                                    height: 40,
                                    borderColor: "gray",
                                    borderWidth: 1,
              }} />
            </View>
            
          </View>

        </ScrollView> 
      );
    }
  }