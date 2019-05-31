import React from "react";
import styles from "./styles";
import MapView from "react-native-maps";

const region = {
  latitude: 49.264393,
  longitude: -123.138066,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421
};
const Map = () => {
  return <MapView style={styles.map} region={region} />;
};

export default Map;
