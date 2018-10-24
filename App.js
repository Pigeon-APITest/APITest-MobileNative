import React from 'react';
import { StyleSheet, Text, View, Button } from "react-native";
import { createStackNavigator, } from "react-navigation";
import ButtonPage from "./pages/ButtonPage";
import SwipePage from "./pages/SwipePage";
import ScrollPage from "./pages/ScrollPage";

export default createStackNavigator({
  Button: { screen: ButtonPage },
  Swipe: { screen: SwipePage },
  Scroll: {screen: ScrollPage},
})


// export default class App extends React.Component {

//   constructor(){
//     super();
//     this.state = {
//       textValue: "Text before button press"
//     }
//   }

//   onPress = () => {
//     this.setState({
//       textValue: "Button was pressed!"
//     })
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <Text testID="text">{this.state.textValue}</Text>
//         <Button
//           onPress={this.onPress}
//           title="Open Swipe"  
//         />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
