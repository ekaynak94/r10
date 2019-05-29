import React from "react";
import PropTypes from "prop-types";
import { Text, View } from "react-native";
import styles from "./styles";
import SessionList from "../../components/SessionList";

const Schedule = ({ allSections }) => {
  return (
    <View>
      <SessionList allSections={allSections} />
    </View>
  );
};

Schedule.propTypes = {
  allSections: PropTypes.array
};

export default Schedule;
