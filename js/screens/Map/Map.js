import React from "react";
import PropTypes from "prop-types";
import { Text, View } from "react-native";
import styles from "./styles";

const Map = ({ allSessions }) => {
  console.log(allSessions);
  return <View />;
};

Map.propTypes = {
  allSessions: PropTypes.array.isRequired
};

export default Map;
