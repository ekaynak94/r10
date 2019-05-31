import { StyleSheet } from "react-native";
import theme from "../../config/styles";

const styles = StyleSheet.create({
  root: {
    padding: 12
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
    marginTop: 8
  },
  logo: {
    height: 80,
    width: 210
  },
  separator: {
    backgroundColor: theme.colors.lightGrey,
    width: "100%",
    height: 1,
    marginBottom: 8,
    marginTop: 8
  },
  title: {
    fontFamily: theme.fonts.fontFamily,
    fontSize: theme.fonts.fontSize * 1.5,
    marginBottom: 8,
    marginTop: 8
  },
  text: {
    fontFamily: theme.fonts.fontFamily,
    fontWeight: "200",
    fontSize: theme.fonts.fontSize,
    marginBottom: 8,
    marginTop: 8
  },
  listItem: {
    fontFamily: theme.fonts.fontFamily,
    fontSize: theme.fonts.fontSize,
    marginBottom: 8,
    marginTop: 8
  },
  footer: {
    fontFamily: theme.fonts.fontFamily,
    fontSize: theme.fonts.fontSize,
    marginBottom: 8,
    marginTop: 8
  }
});

export default styles;
