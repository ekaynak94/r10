import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";
import PropTypes from "prop-types";

const Speaker = ({ speakerData }) => {
  console.log(speakerData);
  return (
    <View>
      <Text>This is the Speaker screen...</Text>
    </View>
  );
};

Speaker.propTypes = {
  speakerData: PropTypes.object
};

export default Speaker;
