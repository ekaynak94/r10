import gql from "graphql-tag";

export const GET_CONDUCT_ITEMS = gql`
  query {
    allConducts(orderBy: order_ASC) {
      id
      description
      title
      order
    }
  }
`;

export const GET_ALL_SESSIONS = gql`
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

export const GET_SESSION_SPEAKER = gql`
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
