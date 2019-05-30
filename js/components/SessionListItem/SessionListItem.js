import React from "react";
import { Platform, View, Text, TouchableHighlight } from "react-native";
import styles from "./styles";
import PropTypes from "prop-types";
import { withNavigation } from "react-navigation";
import Icon from "react-native-vector-icons/Ionicons";

const HeartIcon = Platform.select({
  ios: "ios-heart",
  android: "md-heart"
});

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
        {faved && <Icon name={HeartIcon} size={20} color={"red"} />}
      </View>
    </TouchableHighlight>
  );
};

SessionListItem.propTypes = {
  session: PropTypes.object,
  faved: PropTypes.bool
};

export default withNavigation(SessionListItem);
