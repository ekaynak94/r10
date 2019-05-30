import React from "react";
import PropTypes from "prop-types";
import {
  Platform,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
  Image
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import styles from "./styles";
import moment from "moment";
import { withNavigation } from "react-navigation";
import Icon from "react-native-vector-icons/Ionicons";
import theme from "../../config/styles";

const HeartIcon = Platform.select({
  ios: "ios-heart",
  android: "md-heart"
});

const Session = ({ sessionData, faveContext, navigation }) => {
  const faved = !!faveContext.faveIds.find(id => id === sessionData.id);
  return (
    <ScrollView style={styles.root}>
      <View style={styles.locationContainer}>
        <Text style={styles.location}>{sessionData.location}</Text>
        {faved && <Icon name={HeartIcon} size={15} color={theme.colors.red} />}
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{sessionData.title}</Text>
        <Text style={styles.time}>
          {moment(sessionData.startTime).format("LT")}
        </Text>
        <Text style={styles.text}>{sessionData.description}</Text>
      </View>

      {sessionData.speaker && (
        <View style={styles.speakerContainer}>
          <Text style={styles.speaker}>Presented by:</Text>

          <View style={styles.profile}>
            <Image
              style={styles.avatar}
              source={{ uri: sessionData.speaker.image }}
            />
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Speaker", {
                  speaker: sessionData.speaker
                });
              }}
            >
              <Text style={styles.name}>{sessionData.speaker.name}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.separator} />
          <View style={styles.buttonContainer}>
            <TouchableHighlight
              underlayColor={theme.colors.lightGrey}
              onPress={() => {
                faved
                  ? faveContext.removeFaveSession(sessionData.id)
                  : faveContext.addFaveSession(sessionData.id);
              }}
            >
              <LinearGradient
                colors={[theme.colors.purple, theme.colors.red]}
                start={{ x: 0.0, y: 1.0 }}
                end={{ x: 1.0, y: 0.0 }}
                style={styles.button}
              >
                <Text style={styles.buttonText}>
                  {faved ? "Remove from Faves" : "Add to Faves"}
                </Text>
              </LinearGradient>
            </TouchableHighlight>
          </View>
        </View>
      )}
    </ScrollView>
  );
};

Session.propTypes = {
  sessionData: PropTypes.object,
  faveContext: PropTypes.object
};

export default withNavigation(Session);
