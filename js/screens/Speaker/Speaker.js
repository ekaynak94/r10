import React from "react";
import {
  Text,
  View,
  Image,
  Linking,
  TouchableOpacity,
  ScrollView
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import styles from "./styles";
import PropTypes from "prop-types";
import theme from "../../config/styles";

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

const Speaker = ({ speakerData, navigation }) => {
  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Text style={styles.headerText}>X</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>About The Speaker</Text>
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        <Image style={styles.avatar} source={{ uri: speakerData.image }} />
        <Text style={styles.name}>{speakerData.name}</Text>
        <Text style={styles.bio}>{speakerData.bio}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.buttonHighlight}
            onPress={() => {
              goToUrl(speakerData.url);
            }}
          >
            <LinearGradient
              colors={[theme.colors.purple, theme.colors.lightPurple]}
              start={{ x: 0.0, y: 1.0 }}
              end={{ x: 1.0, y: 0.0 }}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Read more on Wikipedia</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

Speaker.propTypes = {
  speakerData: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired
};

export default Speaker;
