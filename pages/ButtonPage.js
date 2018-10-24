import React from 'react';
import { StyleSheet, Text, View, Button } from "react-native";

export default class ButtonPage extends React.Component {
    static navigationOptions = {
      title: "Button Page",
    };
  
    render() {
      const { navigate } = this.props.navigation;
      return (
        <View style={styles.container}>
          <View style={styles.buttonContainer}>
            <Button title="Swipe Page"
                    accessibilityLabel="switchToSwipe"
                    onPress={() => navigate("Swipe", { name: "swipePageButton" })}
            />
          </View>

          <View style={styles.buttonContainer}>
            <Button title="Scroll Page"
                    accessibilityLabel="switchToScroll"
                    onPress={() => navigate("Scroll", { name: "scrollPageButton" })}
            />
          </View>
        </View>
        
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
    },
    buttonContainer: {
        flex: 1,
        width: "50%",
        margin: 10,
    },
});