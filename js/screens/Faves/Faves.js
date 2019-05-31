import React from "react";
import { Text, View } from "react-native";
import PropTypes from "prop-types";
import SessionList from "../../components/SessionList";
import styles from "./styles";

const Faves = ({ allSessions, faveIds }) => {
  return (
    <View>
      <SessionList allSessions={allSessions} faveIds={faveIds} />
    </View>
  );
};

Faves.propTypes = {
  allSessions: PropTypes.array.isRequired,
  faveIds: PropTypes.array.isRequired
};

export default Faves;
