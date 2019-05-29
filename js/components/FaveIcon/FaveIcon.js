import React from "react";
import { Button } from "react-native";
import styles from "./styles";
import PropTypes from "prop-types";
import Icon from "react-native-vector-icons/FontAwesome";
import FavesContext from "../../context/FavesContext";

FaveIcon = ({ sessionId }) => {
  return (
    <FavesContext.Consumer>
      {value => {
        const faved = value.faveIds.find(id => id === sessionId);
        console.log(value);
        if (faved) {
          return (
            <Icon.Button
              name="heart"
              backgroundColor="red"
              onPress={() => value.removeFaveSession(sessionId)}
            />
          );
        } else {
          return (
            <Icon.Button
              name="heart"
              backgroundColor="grey"
              onPress={() => value.addFaveSession(sessionId)}
            />
          );
        }
      }}
    </FavesContext.Consumer>
  );
};

FaveIcon.propTypes = {
  sessionId: PropTypes.string
};

export default FaveIcon;
