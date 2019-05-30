import { Platform } from "react-native";

const theme = {
  colors: {
    mediumGrey: "#999999",
    lightGrey: "#e6e6e6",
    blue: "#8797D6",
    purple: "#9963ea",
    red: "#cf392a"
  },
  fonts: {
    fontFamily: Platform.select({
      ios: "Montserrat",
      android: "Montserrat-Regular"
    })
  }
};
export default theme;
