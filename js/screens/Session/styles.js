import { StyleSheet } from "react-native";
import theme from "../../config/styles";

const styles = StyleSheet.create({
  root: {
    padding: 12
  },
  locationContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
    marginTop: 8
  },
  location: {
    color: theme.colors.mediumGrey,
    fontFamily: theme.fonts.fontRegular,
    fontSize: theme.fonts.fontSize
  },
  title: {
    fontFamily: theme.fonts.fontRegular,
    fontSize: theme.fonts.fontSize * 1.5,
    marginBottom: 8,
    marginTop: 8
  },
  time: {
    color: theme.colors.red,
    fontFamily: theme.fonts.fontRegular,
    fontSize: theme.fonts.fontSize * 1.2,
    marginBottom: 8,
    marginTop: 8
  },
  text: {
    fontFamily: theme.fonts.fontLight,
    fontSize: theme.fonts.fontSize * 1.2,
    marginBottom: 8,
    marginTop: 8
  },
  speaker: {
    color: theme.colors.mediumGrey,
    fontFamily: theme.fonts.fontRegular,
    fontSize: theme.fonts.fontSize,
    marginBottom: 8,
    marginTop: 8
  },
  profile: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
    marginTop: 8
  },
  avatar: {
    height: 70,
    width: 70,
    borderRadius: 35,
    marginRight: 10,
    marginLeft: 10
  },
  name: {
    fontFamily: theme.fonts.fontRegular,
    fontSize: theme.fonts.fontSize
  },
  separator: {
    backgroundColor: theme.colors.lightGrey,
    width: "100%",
    height: 1,
    marginBottom: 8,
    marginTop: 8
  },
  buttonContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 20
  },
  buttonHighlight: {
    borderRadius: 20,
    marginBottom: 3,
    marginTop: 3
  },

  buttonText: {
    fontFamily: theme.fonts.fontRegular,
    fontSize: theme.fonts.fontSize,
    color: "white"
  }
});

export default styles;
