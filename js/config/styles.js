import { Platform } from "react-native";

const theme = {
  colors: {
    mediumGrey: "#999999",
    lightGrey: "#e6e6e6",
    blue: "#8797D6",
    purple: "#9963ea",
    lightPurple: "#8875ee",
    red: "#cf392a"
  },
  fonts: {
    fontFamily: Platform.select({
      ios: "Montserrat",
      android: "Montserrat-Regular"
    }),
    fontSize: 16
  }
};
export default theme;
