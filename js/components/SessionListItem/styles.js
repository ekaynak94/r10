import { StyleSheet } from "react-native";
import theme from "../../config/styles";

const styles = StyleSheet.create({
  root: {
    padding: 12
  },
  title: {
    fontFamily: theme.fonts.fontFamily,
    fontSize: theme.fonts.fontSize * 1.2,
    paddingBottom: theme.fonts.fontSize * 0.5
  },
  content: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  location: {
    color: theme.colors.mediumGrey,
    fontFamily: theme.fonts.fontFamily,
    fontSize: theme.fonts.fontSize
  }
});

export default styles;
