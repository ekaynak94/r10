import React, { Component } from "react";
import Loader from "../../components/Loader";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import FaveContext from "../../context/FavesContext";

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

export default ScheduleContainer;
