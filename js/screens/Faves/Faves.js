import React from "react";
import { Text, View } from "react-native";
import PropTypes from "prop-types";
import SessionList from "../../components/SessionList";
import styles from "./styles";

const Faves = ({ allSessions, faveIds }) => {
  if (faveIds.lenght > 0) {
    return (
      <View>
        <SessionList allSessions={allSessions} faveIds={faveIds} />
      </View>
    );
  } else {
    return (
      <View style={styles.messageContainer}>
        <Text style={styles.message}>No faves available...</Text>
      </View>
    );
  }
};

Faves.propTypes = {
  allSessions: PropTypes.array.isRequired,
  faveIds: PropTypes.array.isRequired
};

export default Faves;
