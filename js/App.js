import React, { Component } from "react";

import { ApolloProvider } from "react-apollo";
import { View } from "react-native";
import client from "./config/api";
import RootStackNavigator from "./navigation/RootStackNavigator";

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <RootStackNavigator />
      </ApolloProvider>
    );
  }
}
