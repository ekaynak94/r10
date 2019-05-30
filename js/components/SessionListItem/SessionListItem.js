import React from "react";
import { Platform, View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import PropTypes from "prop-types";
import { withNavigation } from "react-navigation";
import Icon from "react-native-vector-icons/Ionicons";
import theme from "../../config/styles";

const HeartIcon = Platform.select({
  ios: "ios-heart",
  android: "md-heart"
});

const SessionListItem = ({ session, navigation, faved }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Session", {
          session: session
        });
      }}
    >
      <View style={styles.root}>
        <Text style={styles.title}>{session.title}</Text>
        <View style={styles.content}>
          <Text style={styles.location}>{session.location}</Text>
          {faved && (
            <Icon name={HeartIcon} size={15} color={theme.colors.red} />
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

SessionListItem.propTypes = {
  session: PropTypes.object.isRequired,
  faved: PropTypes.bool.isRequired
};

export default withNavigation(SessionListItem);
