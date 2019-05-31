import React from "react";
import {
  Platform,
  StyleSheet,
  View,
  TouchableOpacity,
  StatusBar
} from "react-native";
import { Header } from "react-navigation";
import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-vector-icons/Ionicons";
import theme from "../config/styles";

const GradientHeader = props => (
  <View style={{ backgroundColor: "white", overflow: "hidden" }}>
    <LinearGradient
      colors={["#cf392a", "#9963ea"]}
      start={{ x: 0.0, y: 1.0 }}
      end={{ x: 1.0, y: 0.0 }}
      style={[StyleSheet.absoluteFill, { height: "100%", width: "100%" }]}
    />
    <Header {...props} />
    <StatusBar barStyle="light-content" />
  </View>
);

const NavButton = ({ navigation }) => {
  if (navigation.state.routeName === "Session") {
    return (
      <TouchableOpacity
        style={{ padding: 1, marginLeft: 8 }}
        onPress={() => navigation.goBack()}
      >
        <View>
          <Icon name="md-arrow-round-back" size={25} color="white" />
        </View>
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity
        style={{ padding: 1, marginLeft: 8 }}
        onPress={() => navigation.openDrawer()}
      >
        <Icon name="md-menu" size={25} color="white" />
      </TouchableOpacity>
    );
  }
};

export const sharedNavigationOptions = navigation => ({
  headerBackTitle: null,
  header: props => <GradientHeader {...props} />,
  headerLeft: Platform.select({
    android: <NavButton navigation={navigation} />
  }),
  headerStyle: {
    backgroundColor: "transparent"
  },
  headerTitleStyle: {
    color: "white",
    fontFamily: theme.fonts.fontRegular,
    fontSize: theme.fonts.fontSize * 1.5
  }
});
