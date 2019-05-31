import React, { Component } from "react";
import styles from "./styles";
import MapView from "react-native-maps";
import { Text } from "react-native";

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }
    };
  }

  onRegionChange(region) {
    this.setState({ region });
  }

  render() {
    return (
      <Text>This is the map screen</Text>
      // <MapView
      //   style={styles.map}
      //   region={this.state.region}
      //   onRegionChange={this.onRegionChange}
      // />
    );
  }
}

export default Map;
