import React, { Component } from "react";
import Loader from "../../components/Loader";
import { Query } from "react-apollo";
import { GET_ALL_SESSION_LOCATIONS } from "../../config/queries";
import ErrorMessage from "../../components/ErrorMessage";
import MapView from "./MapView";

class MapViewContainer extends Component {
  static navigationOptions = {
    title: "Map"
  };

  render() {
    return (
      <Query query={GET_ALL_SESSION_LOCATIONS}>
        {({ loading, data, error }) => {
          if (loading || !data) return <Loader />;
          if (error) return <ErrorMessage error={error} />;
          return <MapView allSessions={data.allSessions} />;
        }}
      </Query>
    );
  }
}

export default MapViewContainer;
