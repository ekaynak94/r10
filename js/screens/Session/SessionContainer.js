import React, { Component } from "react";
import { withNavigation } from "react-navigation";
import Loader from "../../components/Loader";
import { Query } from "react-apollo";
import { GET_SESSION_SPEAKER } from "../../config/queries";
import FaveContext from "../../context/FavesContext";
import ErrorMessage from "../../components/ErrorMessage";

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
          if (error) return <ErrorMessage error={error} />;
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

export default withNavigation(SessionContainer);
