import React from "react";
import PropTypes from "prop-types";
import { Text, View } from "react-native";
import styles from "./styles";

const Session = ({ sessionData }) => {
  console.log(sessionData);
  return (
    <View>
      <Text>This is the Session screen...</Text>
    </View>
  );
};

Session.propTypes = {
  sessionData: PropTypes.object
};

export default Session;
