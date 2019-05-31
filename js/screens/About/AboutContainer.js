import React, { Component } from "react";
import Loader from "../../components/Loader";
import { Query } from "react-apollo";
import { GET_CONDUCT_ITEMS } from "../../config/queries";
import ErrorMessage from "../../components/ErrorMessage";
import About from "./About";

class AboutContainer extends Component {
  static navigationOptions = {
    title: "About"
  };
  render() {
    return (
      <Query query={GET_CONDUCT_ITEMS}>
        {({ loading, data, error }) => {
          if (loading || !data) return <Loader />;
          if (error) return <ErrorMessage error={error} />;
          return <About allConducts={data.allConducts} />;
        }}
      </Query>
    );
  }
}

export default AboutContainer;
