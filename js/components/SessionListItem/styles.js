import { StyleSheet } from "react-native";
import theme from "../../config/styles";

const styles = StyleSheet.create({
  root: {
    padding: 5
  },
  title: {
    fontFamily: theme.fonts.fontFamily,
    fontSize: theme.fonts.fontSize * 1.2,
    paddingBottom: 2,
    paddingTop: 2
  },
  content: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 2,
    paddingTop: 2
  },
  location: {
    color: theme.colors.mediumGrey,
    fontFamily: theme.fonts.fontFamily,
    fontSize: theme.fonts.fontSize
  }
});

export default styles;
