import React from "react";
import { View, Text, TouchableHighlight } from "react-native";
import styles from "./styles";
import PropTypes from "prop-types";
import { withNavigation } from "react-navigation";
import FaveIcon from "../FaveIcon";

const SessionListItem = ({ session, navigation }) => {
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
        <FaveIcon sessionId={session.id} />
      </View>
    </TouchableHighlight>
  );
};

SessionListItem.propTypes = {
  session: PropTypes.object
};

export default withNavigation(SessionListItem);
