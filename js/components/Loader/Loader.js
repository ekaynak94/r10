import React from "react";
import { ActivityIndicator, View } from "react-native";
import styles from "./styles";

const Loader = () => (
  <View style={[styles.container, styles.horizontal]}>
    <ActivityIndicator size="large" color="#000000" />
  </View>
);

export default Loader;
