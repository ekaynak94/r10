import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

const Schedule = ({ allSessions }) => {
  console.log(allSessions);
  return (
    <View style={styles.container}>
      <Text>This is the Schedule screen...</Text>
    </View>
  );
};

export default Schedule;
