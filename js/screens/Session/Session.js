import React from "react";
import PropTypes from "prop-types";
import { Text, View, TouchableHighlight, Image } from "react-native";
import styles from "./styles";
import moment from "moment";

const Session = ({ sessionData }) => {
  console.log(sessionData);
  return (
    <View>
      <Text>{sessionData.location}</Text>
      <Text>{sessionData.title}</Text>
      <Text>{moment(sessionData.startTime).format("LT")}</Text>
      <Text>{sessionData.description}</Text>
      <Text>Presented by:</Text>
      <TouchableHighlight
        underlayColor="#EEEFFF"
        onPress={() => {
          console.log("pressed");
        }}
      >
        <View>
          <Image source={{ uri: sessionData.speaker.image }} />
          <Text>{sessionData.speaker.name}</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

Session.propTypes = {
  sessionData: PropTypes.object
};

export default Session;
