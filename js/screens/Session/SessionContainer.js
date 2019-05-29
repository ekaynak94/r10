import React, { Component } from "react";

import Session from "./Session";

class SessionContainer extends Component {
  static navigationOptions = {
    tite: "Session"
  };

  render() {
    return <Session />;
  }
}

export default SessionContainer;
