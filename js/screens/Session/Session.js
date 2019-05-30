import React from "react";
import PropTypes from "prop-types";
import { Platform, Text, View, TouchableHighlight, Image } from "react-native";
import styles from "./styles";
import moment from "moment";
import { withNavigation } from "react-navigation";
import Icon from "react-native-vector-icons/Ionicons";

const HeartIcon = Platform.select({
  ios: "ios-heart",
  android: "md-heart"
});

const Session = ({ sessionData, faveContext, navigation }) => {
  const faved = !!faveContext.faveIds.find(id => id === sessionData.id);
  return (
    <View>
      <Text>{sessionData.location}</Text>
      {faved && <Icon name={HeartIcon} size={20} color={"red"} />}
      <Text>{sessionData.title}</Text>
      <Text>{moment(sessionData.startTime).format("LT")}</Text>
      <Text>{sessionData.description}</Text>
      <Text>Presented by:</Text>
      <TouchableHighlight
        underlayColor="#EEEFFF"
        onPress={() => {
          navigation.navigate("Speaker", { speaker: sessionData.speaker });
        }}
      >
        <View>
          <Image source={{ uri: sessionData.speaker.image }} />
          <Text>{sessionData.speaker.name}</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        underlayColor="#EEEFFF"
        onPress={() => {
          faved
            ? faveContext.removeFaveSession(sessionData.id)
            : faveContext.addFaveSession(sessionData.id);
        }}
      >
        <Text>{faved ? "Remove from Faves" : "Add to Faves"}</Text>
      </TouchableHighlight>
    </View>
  );
};

Session.propTypes = {
  sessionData: PropTypes.object,
  faveContext: PropTypes.object
};

export default withNavigation(Session);
