/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPlayer = /* GraphQL */ `
  query GetPlayer($username: String!) {
    getPlayer(username: $username) {
      id
      cognitoID
      username
      name
      email
      createdAt
      updatedAt
    }
  }
`;
export const listPlayers = /* GraphQL */ `
  query ListPlayers(
    $username: String
    $filter: ModelPlayerFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listPlayers(
      username: $username
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        cognitoID
        username
        name
        email
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
