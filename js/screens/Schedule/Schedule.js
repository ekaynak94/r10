import React from "react";
import PropTypes from "prop-types";
import { Text, View } from "react-native";
import styles from "./styles";

const Schedule = ({ allSessions }) => {
  console.log(allSessions);
  return (
    <View style={styles.container}>
      <Text>This is the Schedule screen...</Text>
    </View>
  );
};

Schedule.propTypes = {
  allSessions: PropTypes.array
};

export default Schedule;
