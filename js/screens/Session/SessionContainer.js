import React, { Component } from "react";
import { withNavigation } from "react-navigation";
import Loader from "../../components/Loader";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import FaveContext from "../../context/FavesContext";

import Session from "./Session";

class SessionContainer extends Component {
  static navigationOptions = {
    title: "Session"
  };

  render() {
    const { navigation } = this.props;
    const session = navigation.getParam("session");

    return (
      <Query query={GET_SESSION_SPEAKER} variables={{ id: session.id }}>
        {({ loading, data, error }) => {
          if (loading || !data) return <Loader />;
          return (
            <FaveContext.Consumer>
              {value => (
                <Session
                  sessionData={{ ...session, speaker: data.Session.speaker }}
                  faveContext={value}
                />
              )}
            </FaveContext.Consumer>
          );
        }}
      </Query>
    );
  }
}

const GET_SESSION_SPEAKER = gql`
  query Session($id: ID!) {
    Session(id: $id) {
      speaker {
        id
        bio
        image
        name
        url
      }
    }
  }
`;

export default withNavigation(SessionContainer);
