import React, { Component } from "react";
import Loader from "../../components/Loader";
import ErrorMessage from "../../components/ErrorMessage";
import Map from "./Map";

class MapContainer extends Component {
  static navigationOptions = {
    title: "Map"
  };

  render() {
    return <Map />;
  }
}

export default MapContainer;
