import React from "react";
import { Text, View, Image, Linking, TouchableHighlight } from "react-native";
import styles from "./styles";
import PropTypes from "prop-types";

const goToUrl = url => {
  Linking.canOpenURL(url)
    .then(supported => {
      if (!supported) {
        console.log("Can't handle url: " + url);
      } else {
        return Linking.openURL(url);
      }
    })
    .catch(err => console.error("An error occurred", err));
};

const Speaker = ({ speakerData }) => {
  return (
    <View>
      <Image source={{ uri: speakerData.image }} />
      <Text>{speakerData.name}</Text>
      <Text>{speakerData.bio}</Text>
      <TouchableHighlight
        underlayColor="#EEEFFF"
        onPress={() => {
          goToUrl(speakerData.url);
        }}
      >
        <Text>See more about the speaker on Wikipedia</Text>
      </TouchableHighlight>
    </View>
  );
};

Speaker.propTypes = {
  speakerData: PropTypes.object
};

export default Speaker;
