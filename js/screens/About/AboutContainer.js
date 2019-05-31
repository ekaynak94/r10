import React, { Component } from "react";
import Loader from "../../components/Loader";
import { Query } from "react-apollo";
import gql from "graphql-tag";
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

const GET_CONDUCT_ITEMS = gql`
  query {
    allConducts(orderBy: order_ASC) {
      id
      description
      title
      order
    }
  }
`;

export default AboutContainer;
