import React from "react";
import PropTypes from "prop-types";
import { Text, View } from "react-native";
import styles from "./styles";

const MapView = ({ allSessions }) => {
  console.log(allSessions);
  return (
    <View>
      <Text>This is the map view...</Text>
    </View>
  );
};

MapView.propTypes = {
  allSessions: PropTypes.array.isRequired
};

export default MapView;
