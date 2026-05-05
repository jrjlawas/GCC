import { gql } from "@apollo/client";

export const LIST_USERS = gql`
  query listGbsAccounts {
    listGbsAccounts {
      items {
        id
        nickname
        firstname
        lastname
        email
        clientid
        password
        role
      }
    }
  }
`;

export const GET_USER_BY_CREDENTIALS = gql`
  query GetUserByCredentials($clientid: String!, $password: String!) {
    listGbsAccounts(
      filter: { clientid: { eq: $clientid }, password: { eq: $password } }
    ) {
      items {
        id
        nickname
        firstname
        lastname
        email
        clientid
        role
      }
    }
  }
`;
