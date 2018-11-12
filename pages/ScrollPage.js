import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from "react-native";
import * as Colour from "../settings/Colour";
import * as Style from "../settings/Style";

export default class SwipePage extends React.Component {
    static navigationOptions = {
      title: "Scroll Page",
      headerLeft: null,
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
        };
    }

    render() {

      const { navigate } = this.props.navigation;

      return (

        <View>
          <View style={Style.STYLES.navigationButtonsContainer}>
                    <View style={Style.STYLES.navigationButtonContainer}>
                      <Button title="Button Page"
                              color={Colour.COLOUR_HEADER_BUTTON}
                              accessibilityLabel="switchToButton"
                              onPress={() => navigate("Button", { name: "buttonPageButton" })} />
                    </View>

                    <View style={Style.STYLES.navigationButtonContainer}>
                      <Button title="Swipe Page"
                              color={Colour.COLOUR_HEADER_BUTTON}
                              accessibilityLabel="switchToSwipe"
                              onPress={() => navigate("Swipe", { name: "swipePageButton" })} />
                    </View>

                    <View style={Style.STYLES.navigationButtonContainer}>
                        <Button title="Scroll Page"
                                color={Colour.COLOUR_HEADER_BUTTON_SELECTED}
                                accessibilityLabel="switchToScroll"
                                onPress={() => navigate("Scroll", { name: "scrollPageButton" })} />
                    </View>
            </View>

          <ScrollView style={{  flexDirection: "column",
          backgroundColor: Colour.COLOUR_BACKGROUND,
          height: "100%",}}>

            

            <View style={Style.STYLES.testButtonsRow}>
              <View style={Style.STYLES.scrollContainer}>
                <View style={Style.STYLES.curvedTailArrow}>
                  <View style={Style.STYLES.curvedTailArrowTail} />
                  <View style={Style.STYLES.curvedTailArrowTriangle} />
                </View>            
              </View>
            </View>

            <View style={Style.STYLES.testButtonsRow}>
              <View style={Style.STYLES.scrollContainer}>
                <View style={Style.STYLES.curvedTailArrow}>
                  <View style={Style.STYLES.curvedTailArrowTail} />
                  <View style={Style.STYLES.curvedTailArrowTriangle} />
                </View>            
              </View>
            </View>

            <View style={Style.STYLES.testButtonsRow}>
              <View style={Style.STYLES.scrollContainer}>
                <View style={Style.STYLES.curvedTailArrow}>
                  <View style={Style.STYLES.curvedTailArrowTail} />
                  <View style={Style.STYLES.curvedTailArrowTriangle} />
                </View>            
              </View>
            </View>

            <View style={Style.STYLES.testButtonsRow}>
              <View style={Style.STYLES.scrollContainer}>
                <View style={Style.STYLES.curvedTailArrow}>
                  <View style={Style.STYLES.curvedTailArrowTail} />
                  <View style={Style.STYLES.curvedTailArrowTriangle} />
                </View>            
              </View>
            </View>

            <View style={Style.STYLES.testButtonsRow}>
              <View style={Style.STYLES.scrollContainer}>
                <View style={Style.STYLES.curvedTailArrow}>
                  <View style={Style.STYLES.curvedTailArrowTail} />
                  <View style={Style.STYLES.curvedTailArrowTriangle} />
                </View>            
              </View>
            </View>

            <View style={Style.STYLES.testButtonsRow}>
              <View style={Style.STYLES.scrollContainer}>
                <View style={Style.STYLES.curvedTailArrow}>
                  <View style={Style.STYLES.curvedTailArrowTail} />
                  <View style={Style.STYLES.curvedTailArrowTriangle} />
                </View>            
              </View>
            </View>

            <View style={Style.STYLES.testButtonsRow}>
              <View style={Style.STYLES.scrollContainer}>
                <View style={Style.STYLES.curvedTailArrow}>
                  <View style={Style.STYLES.curvedTailArrowTail} />
                  <View style={Style.STYLES.curvedTailArrowTriangle} />
                </View>            
              </View>
            </View>

            <View style={Style.STYLES.testButtonsRow}>
              <View style={Style.STYLES.scrollContainer}>
                <View style={Style.STYLES.curvedTailArrow}>
                  <View style={Style.STYLES.curvedTailArrowTail} />
                  <View style={Style.STYLES.curvedTailArrowTriangle} />
                </View>            
              </View>
            </View>

            <View style={Style.STYLES.testButtonsRow}>
              <View style={Style.STYLES.scrollContainer}>
                <View accessibilityLabel="scrollDestination"
                      style={Style.STYLES.circle} />
              </View>
            </View>
            

          </ScrollView>
        </View>

      );
    }
  }  