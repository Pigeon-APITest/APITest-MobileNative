import { StyleSheet } from "react-native";
import * as Colour from "./Colour";

const styles = StyleSheet.create({
    navigationButtonsContainer: {
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: Colour.COLOUR_HEADER,
        borderTopWidth: 0.5,
        borderBottomWidth: 0.5,
    },
    testButtonsContainer: {
      flexDirection: "row",
      justifyContent: "center",
      height: "100%",
      backgroundColor: Colour.COLOUR_BACKGROUND,
    },
    navigationButtonContainer: {
      flex: 1,
      borderWidth: 0.5,
    },
    buttonContainer: {
        width: "40%",
        margin: 10,
    },
});

module.exports = Object.freeze({
    STYLES: styles,
});