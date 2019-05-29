import React, { Component } from "react";
import { withNavigation } from "react-navigation";

import Session from "./Session";

class SessionContainer extends Component {
  static navigationOptions = {
    title: "Session"
  };

  render() {
    const { navigation } = this.props;
    const session = navigation.getParam("session");
    console.log(session);
    return <Session />;
  }
}

export default withNavigation(SessionContainer);
