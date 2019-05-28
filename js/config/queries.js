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
