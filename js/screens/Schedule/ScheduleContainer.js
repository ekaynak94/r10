import React, { Component } from "react";
import Loader from "../../components/Loader";
import { Query } from "react-apollo";
import gql from "graphql-tag";

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
          return <Schedule allSessions={data.allSessions} faveIds={[]} />;
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
