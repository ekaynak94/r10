import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import styles from "./styles";
import PropTypes from "prop-types";

const CodeOfConduct = ({ allConducts }) => (
  <View style={styles.root}>
    {allConducts.map(conduct => (
      <View style={styles.item} key={(conduct, index) => conduct.id}>
        <TouchableOpacity
          onPress={() => {
            console.log("open");
          }}
        >
          <Text style={styles.itemTitle}>+ {conduct.title}</Text>
        </TouchableOpacity>
        <Text style={styles.itemDescription}>{conduct.description}</Text>
      </View>
    ))}
  </View>
);

CodeOfConduct.propTypes = {
  allConducts: PropTypes.array.isRequired
};

export default CodeOfConduct;
