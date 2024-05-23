import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation addUser(
    $first_name: String!
    $last_name: String!
    $username: String!
    $email: String!
  ) {
    addUser(
      first_name: $first_name
      last_name: $last_name
      username: $username
      email: $email
    ) {
      _id
      first_name
      last_name
      username
      email
    }
  }
`;
