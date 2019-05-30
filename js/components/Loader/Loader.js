import React from "react";
import { ActivityIndicator, View } from "react-native";
import styles from "./styles";
import theme from "../../config/styles";

const Loader = () => (
  <View style={[styles.container, styles.horizontal]}>
    <ActivityIndicator size="large" color={theme.colors.red} />
  </View>
);

export default Loader;
