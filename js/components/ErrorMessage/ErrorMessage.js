import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";
import PropTypes from "prop-types";

const ErrorMessage = ({ error }) => {
  console.log(error);
  return (
    <View style={styles.root}>
      <Text style={styles.message}>Could not load page...</Text>
    </View>
  );
};

ErrorMessage.propTypes = {
  error: PropTypes.object.isRequired
};

export default ErrorMessage;
