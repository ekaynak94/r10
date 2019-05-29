import React from "react";
import PropTypes from "prop-types";
import { Text, View } from "react-native";
import styles from "./styles";

const About = ({ allConducts }) => {
  console.log(allConducts);
  return (
    <View style={styles.container}>
      <Text>This is the about screen...</Text>
    </View>
  );
};

About.propTypes = {
  allConducts: PropTypes.array
};

export default About;
