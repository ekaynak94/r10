import React, { Component } from "react";
import Loader from "../../components/Loader";
import { Query } from "react-apollo";
import { GET_CONDUCT_ITEMS } from "../../config/queries";

import About from "./About";

class AboutContainer extends Component {
  static navigationOptions = {
    tite: "About"
  };
  render() {
    return (
      <Query query={GET_CONDUCT_ITEMS}>
        {({ loading, data, error }) => {
          if (loading || !data) return <Loader />;
          console.log(data);
          return <About />;
        }}
      </Query>
    );
  }
}

export default AboutContainer;
