import React, { Component } from "react";
import Loader from "../../components/Loader";
import { Query } from "react-apollo";
import gql from "graphql-tag";
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
          const errorMsg = error ? error : new Error("new Error");
          if (errorMsg) return <ErrorMessage error={errorMsg} />;
          // if (loading || !data) return <Loader />;
          // if (error) return <ErrorMessage error={error} />;
          // return (
          //   <FaveContext.Consumer>
          //     {value => (
          //       <Schedule
          //         allSessions={data.allSessions}
          //         faveIds={value.faveIds}
          //       />
          //     )}
          //   </FaveContext.Consumer>
          // );
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
