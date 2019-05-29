import React from "react";
import PropTypes from "prop-types";
import { Text, View } from "react-native";
import styles from "./styles";
import SessionList from "../../components/SessionList";

const Schedule = ({ allSessions }) => {
  return (
    <View>
      <SessionList allSessions={allSessions} />
    </View>
  );
};

Schedule.propTypes = {
  allSessions: PropTypes.array
};

export default Schedule;
