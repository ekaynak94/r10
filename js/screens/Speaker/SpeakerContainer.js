import React, { Component } from "react";
import { withNavigation } from "react-navigation";

import Speaker from "./Speaker";

class SpeakerContainer extends Component {
  render() {
    const { navigation } = this.props;
    const speaker = navigation.getParam("speaker");
    return <Speaker speakerData={speaker} />;
  }
}

export default withNavigation(SpeakerContainer);
