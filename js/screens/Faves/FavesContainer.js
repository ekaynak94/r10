import React, { Component } from "react";
import Loader from "../../components/Loader";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Faves from "./Faves";
import FaveContext from "../../context/FavesContext";

class FavesContainer extends Component {
  static navigationOptions = {
    title: "Faves"
  };

  render() {
    return (
      <Query query={GET_ALL_SESSIONS}>
        {({ loading, data, error }) => {
          if (loading || !data) return <Loader />;
          return (
            <FaveContext.Consumer>
              {value => (
                <Faves
                  allSessions={data.allSessions.filter(session =>
                    value.faveIds.find(id => id === session.id)
                  )}
                  faveIds={value.faveIds}
                />
              )}
            </FaveContext.Consumer>
          );
        }}
      </Query>
    );
  }
}

const GET_ALL_SESSIONS = gql`
  query {
    allSessions(orderBy: startTime_DESC) {
      id
      description
      location
      startTime
      title
    }
  }
`;

export default FavesContainer;
