import { StyleSheet } from "react-native";
import theme from "../../config/styles";

const styles = StyleSheet.create({
  root: {
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
    backgroundColor: theme.colors.lightGrey
  },
  message: {
    fontFamily: theme.colors.fontRegular,
    fontSize: theme.fonts.fontSize * 1.5
  }
});

export default styles;
