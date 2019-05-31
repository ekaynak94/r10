import React from "react";
import styles from "./styles";
import { View } from "react-native";
import MapView from "react-native-maps";

const region = {
  latitude: 49.264393,
  longitude: -123.138066,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421
};

const markerLocation = {
  latitude: region.latitude,
  longitude: region.longitude
};
const Map = () => {
  return (
    <View>
      <MapView style={styles.map} region={region}>
        <MapView.Marker
          style={styles.maker}
          coordinate={markerLocation}
          title="R10"
          description="This is where R10 is going to take place"
          image={require("../../assets/images/map_pin.png")}
        />
      </MapView>
    </View>
  );
};

export default Map;
