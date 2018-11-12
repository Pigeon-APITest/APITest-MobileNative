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
    testButtonsRow: {
      flexDirection: "row",
      justifyContent: "center",
      backgroundColor: Colour.COLOUR_BACKGROUND,
    },
    navigationButtonContainer: {
      flex: 1,
      borderWidth: 0.5,
    },
    buttonContainer: {
        width: "40%",
        margin: 10,
        justifyContent: "center",
    },
    scrollContainer: {
      margin: 10,
      justifyContent: "center",
  },
    curvedTailArrow: {
        backgroundColor: 'transparent',
        overflow: 'visible',
        width: 70,
        height: 200
      },
      curvedTailArrowTriangle: {
        backgroundColor: 'transparent',
        // width: 0,
        height: 0,
        borderTopWidth: 50,
        borderTopColor: 'transparent',
        borderRightWidth: 50,
        borderRightColor: Colour.COLOUR_HEADER,
        borderStyle: 'solid',
        transform: [
          {rotate: '45deg'}
        ],
        position: 'absolute',
        bottom: 90,
        left: 10,
        overflow: 'visible'
      },
      curvedTailArrowTail: {
        backgroundColor: 'transparent',
        position: 'absolute',
        borderBottomColor: 'transparent',
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderTopWidth: 3,
        borderTopColor: Colour.COLOUR_HEADER,
        borderStyle: 'solid',
        borderTopLeftRadius: 12,
        top: 60,
        left: 33.5,
        width: 50,
        height: 50,
        transform: [
          {rotate: '270deg'}
        ]
      },
      circle: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: 100,
        height: 100,
        borderRadius: 100/2,
        backgroundColor: Colour.COLOUR_GOAL,
        marginBottom: 50,
      },
});

module.exports = Object.freeze({
    STYLES: styles,
});