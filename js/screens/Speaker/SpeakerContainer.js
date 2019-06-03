import React, { Component } from "react";
import PropTypes from "prop-types";
import Speaker from "./Speaker";

class SpeakerContainer extends Component {
  render() {
    const { navigation } = this.props;
    const speaker = navigation.getParam("speaker");
    return <Speaker speakerData={speaker} navigation={navigation} />;
  }
}

SpeakerContainer.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default SpeakerContainer;
