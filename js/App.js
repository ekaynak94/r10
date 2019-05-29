import React, { Component } from "react";

import { ApolloProvider } from "react-apollo";
import FavesProvider from "./context/FavesContext";
import client from "./config/api";
import RootStackNavigator from "./navigation/RootStackNavigator";

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <FavesProvider>
          <RootStackNavigator />
        </FavesProvider>
      </ApolloProvider>
    );
  }
}
