import { gql } from "@apollo/client";

export const QUERY_USERS = gql`
query all Users {
    users {
        _id
        first_name
        last_name
        username
        email
        orders
    }
}
`;
