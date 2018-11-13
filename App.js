import { createStackNavigator, } from "react-navigation";
import ButtonPage from "./pages/ButtonPage";
import SwipePage from "./pages/SwipePage";
import ScrollPage from "./pages/ScrollPage";

export default createStackNavigator({
  Button: { screen: ButtonPage },
  Swipe: { screen: SwipePage },
  Scroll: {screen: ScrollPage},
})