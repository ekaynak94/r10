import { StyleSheet } from "react-native";
import theme from "../../config/styles";

const styles = StyleSheet.create({
  itemTitle: {
    fontSize: theme.fonts.fontSize,
    fontFamily: theme.fonts.fontFamily,
    color: theme.colors.purple,
    marginBottom: 8,
    marginTop: 8
  },
  itemDescription: {
    fontFamily: theme.fonts.fontFamily,
    fontWeight: "200",
    fontSize: theme.fonts.fontSize,
    marginBottom: 8,
    marginTop: 8
  }
});

export default styles;
