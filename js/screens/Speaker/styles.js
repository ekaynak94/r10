import { StyleSheet } from "react-native";
import theme from "../../config/styles";

const styles = StyleSheet.create({
  root: {
    padding: 10,
    backgroundColor: "black",
    height: "100%"
  },
  header: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    position: "relative"
  },
  headerText: {
    marginTop: 30,
    marginBottom: 30,
    fontFamily: theme.fonts.fontRegular,
    fontSize: theme.fonts.fontSize * 1.5,
    color: "white"
  },
  backButton: {
    position: "absolute",
    left: 0,
    borderRadius: 5
  },
  content: {
    minHeight: "100%",
    backgroundColor: "white",
    borderRadius: 5,
    flexGrow: 1,
    alignItems: "center",
    padding: 10
  },
  avatar: {
    height: 120,
    width: 120,
    borderRadius: 60,
    marginTop: 8,
    marginBottom: 8
  },
  name: {
    fontFamily: theme.fonts.fontRegular,
    fontSize: theme.fonts.fontSize * 1.5,
    marginTop: 8,
    marginBottom: 8
  },
  bio: {
    fontFamily: theme.fonts.fontLight,
    fontSize: theme.fonts.fontSize,
    marginTop: 8,
    marginBottom: 8
  },

  buttonContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
    marginBottom: 8
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
