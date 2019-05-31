import React, { Component } from "react";
import Loader from "../../components/Loader";
import { Query } from "react-apollo";
import { GET_ALL_SESSIONS } from "../../config/queries";
import FaveContext from "../../context/FavesContext";
import ErrorMessage from "../../components/ErrorMessage";
import Schedule from "./Schedule";

class ScheduleContainer extends Component {
  static navigationOptions = {
    title: "Schedule"
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
                <Schedule
                  allSessions={data.allSessions}
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

export default ScheduleContainer;
