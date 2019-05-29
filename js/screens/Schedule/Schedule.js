import React from "react";
import PropTypes from "prop-types";
import { Text, View } from "react-native";
import styles from "./styles";
import SectionList from "../../components/SectionList";

const Schedule = ({ allSessions }) => {
  return (
    <View>
      <SectionList allSessions={allSessions} />
    </View>
  );
};

Schedule.propTypes = {
  allSessions: PropTypes.array
};

export default Schedule;
