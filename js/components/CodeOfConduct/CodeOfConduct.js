import React from "react";
import { TouchableHighlight, View, Text } from "react-native";
import styles from "./styles";
import PropTypes from "prop-types";

const CodeOfConduct = ({ conduct }) => (
  <View>
    <View key={(conduct, index) => conduct.id}>
      <TouchableHighlight
        underlayColor="#EEEFFF"
        onPress={() => {
          console.log("open");
        }}
      >
        <Text>{conduct.title}</Text>
      </TouchableHighlight>
      <Text>{conduct.description}</Text>
    </View>
  </View>
);

CodeOfConduct.propTypes = {
  conduct: PropTypes.object
};

export default CodeOfConduct;
