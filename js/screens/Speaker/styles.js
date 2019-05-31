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
    marginTop: 30,
    marginBottom: 30,
    position: "relative"
  },
  headerText: {
    fontFamily: theme.fonts.fontFamily,
    fontSize: theme.fonts.fontSize,
    color: "white"
  },
  backButton: {
    position: "absolute",
    left: 0,
    borderRadius: 5
  },
  content: {
    height: "100%",
    backgroundColor: "white",
    borderRadius: 5
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
    fontFamily: theme.fonts.fontFamily,
    fontSize: theme.fonts.fontSize,
    color: "white"
  }
});

export default styles;
