import React from "react";
import PropTypes from "prop-types";
import { Text, View } from "react-native";
import styles from "./styles";
import SessionList from "../../components/SessionList";

const Schedule = ({ allSessions, faveIds }) => {
  return (
    <View>
      <SessionList allSessions={allSessions} faveIds={faveIds} />
    </View>
  );
};

Schedule.propTypes = {
  allSessions: PropTypes.array,
  faveIds: PropTypes.array
};

export default Schedule;
