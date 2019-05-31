import React, { Component } from "react";
import Loader from "../../components/Loader";
import { Query } from "react-apollo";
import { GET_ALL_SESSIONS } from "../../config/queries";
import Faves from "./Faves";
import FaveContext from "../../context/FavesContext";
import ErrorMessage from "../../components/ErrorMessage";

class FavesContainer extends Component {
  static navigationOptions = {
    title: "Faves"
  };

  render() {
    return (
      <Query query={GET_ALL_SESSIONS}>
        {({ loading, data, error }) => {
          if (loading || !data) return <Loader />;
          if (error) return <ErrorMessage error={error} />;
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

export default FavesContainer;
