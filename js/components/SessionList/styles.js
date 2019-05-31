import { StyleSheet } from "react-native";
import theme from "../../config/styles";

const styles = StyleSheet.create({
  container: {
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 8,
    paddingBottom: 8,
    backgroundColor: theme.colors.lightGrey
  },
  header: {
    fontFamily: theme.fonts.fontRegular,
    fontSize: theme.fonts.fontSize * 1.2
  },
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: theme.colors.lightGrey
  }
});

export default styles;
