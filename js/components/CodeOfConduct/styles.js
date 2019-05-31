import { StyleSheet } from "react-native";
import theme from "../../config/styles";

const styles = StyleSheet.create({
  itemTitleContainer: {
    display: "flex",
    flexDirection: "row"
  },
  itemTitle: {
    fontSize: theme.fonts.fontSize,
    fontFamily: theme.fonts.fontRegular,
    color: theme.colors.purple,
    marginBottom: 8,
    marginTop: 8
  },
  itemDescription: {
    fontFamily: theme.fonts.fontLight,
    fontSize: theme.fonts.fontSize,
    marginBottom: 8,
    marginTop: 8
  }
});

export default styles;
