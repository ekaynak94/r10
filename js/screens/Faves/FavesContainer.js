import React, { Component } from "react";

import Faves from "./Faves";

class FavesContainer extends Component {
  static navigationOptions = {
    tite: "Faves"
  };

  render() {
    return <Faves />;
  }
}

export default FavesContainer;
