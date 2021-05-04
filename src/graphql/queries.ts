/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getGame = /* GraphQL */ `
    query GetGame($id: ID!) {
        getGame(id: $id) {
            id
            status
            owners
            initiator
            turn
            state
            winner
            players {
                items {
                    id
                    createdAt
                    gameID
                    playerUsername
                    owner
                    updatedAt
                }
                nextToken
            }
            createdAt
            updatedAt
        }
    }
`;
export const listGames = /* GraphQL */ `
    query ListGames($filter: ModelGameFilterInput, $limit: Int, $nextToken: String) {
        listGames(filter: $filter, limit: $limit, nextToken: $nextToken) {
            items {
                id
                status
                owners
                initiator
                turn
                state
                winner
                players {
                    nextToken
                }
                createdAt
                updatedAt
            }
            nextToken
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
                games {
                    nextToken
                }
                createdAt
                updatedAt
            }
            nextToken
        }
    }
`;
export const getPlayer = /* GraphQL */ `
    query GetPlayer($username: String!) {
        getPlayer(username: $username) {
            id
            cognitoID
            username
            name
            email
            games {
                items {
                    id
                    createdAt
                    gameID
                    playerUsername
                    owner
                    updatedAt
                }
                nextToken
            }
            createdAt
            updatedAt
        }
    }
`;
