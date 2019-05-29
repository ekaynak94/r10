import React from "react";
import { View, Text, TouchableHighlight } from "react-native";
import styles from "./styles";
import PropTypes from "prop-types";
import { withNavigation } from "react-navigation";
import Icon from "react-native-vector-icons/Ionicons";

const SessionListItem = ({ session, navigation, faved }) => {
  return (
    <TouchableHighlight
      underlayColor="#EEEFFF"
      onPress={() => {
        navigation.navigate("Session", {
          session: session
        });
      }}
    >
      <View>
        <Text>{session.title}</Text>
        <Text>{session.location}</Text>
        <Icon name="ios-heart" size={20} color={faved ? "red" : "grey"} />
      </View>
    </TouchableHighlight>
  );
};

SessionListItem.propTypes = {
  session: PropTypes.object,
  faved: PropTypes.bool
};

export default withNavigation(SessionListItem);
