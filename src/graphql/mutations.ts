/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const startGame = /* GraphQL */ `
    mutation StartGame($invitee: String!) {
        startGame(invitee: $invitee) {
            id
            status
            turn
            state
            winner
        }
    }
`;
export const playMove = /* GraphQL */ `
    mutation PlayMove($game: ID!, $index: Int!) {
        playMove(game: $game, index: $index) {
            id
            status
            turn
            state
            winner
        }
    }
`;
export const createPlayer = /* GraphQL */ `
    mutation CreatePlayer($input: CreatePlayerInput!, $condition: ModelPlayerConditionInput) {
        createPlayer(input: $input, condition: $condition) {
            id
            cognitoID
            username
            name
            email
            createdAt
            updatedAt
            games {
                items {
                    id
                    createdAt
                    gameID
                    playerUsername
                    owners
                    updatedAt
                }
                nextToken
            }
            token {
                items {
                    id
                    token
                    playerUsername
                    createdAt
                    updatedAt
                }
                nextToken
            }
        }
    }
`;
export const updatePlayer = /* GraphQL */ `
    mutation UpdatePlayer($input: UpdatePlayerInput!, $condition: ModelPlayerConditionInput) {
        updatePlayer(input: $input, condition: $condition) {
            id
            cognitoID
            username
            name
            email
            createdAt
            updatedAt
            games {
                items {
                    id
                    createdAt
                    gameID
                    playerUsername
                    owners
                    updatedAt
                }
                nextToken
            }
            token {
                items {
                    id
                    token
                    playerUsername
                    createdAt
                    updatedAt
                }
                nextToken
            }
        }
    }
`;
export const deletePlayer = /* GraphQL */ `
    mutation DeletePlayer($input: DeletePlayerInput!, $condition: ModelPlayerConditionInput) {
        deletePlayer(input: $input, condition: $condition) {
            id
            cognitoID
            username
            name
            email
            createdAt
            updatedAt
            games {
                items {
                    id
                    createdAt
                    gameID
                    playerUsername
                    owners
                    updatedAt
                }
                nextToken
            }
            token {
                items {
                    id
                    token
                    playerUsername
                    createdAt
                    updatedAt
                }
                nextToken
            }
        }
    }
`;
export const createPlayerGame = /* GraphQL */ `
    mutation CreatePlayerGame(
        $input: CreatePlayerGameInput!
        $condition: ModelPlayerGameConditionInput
    ) {
        createPlayerGame(input: $input, condition: $condition) {
            id
            createdAt
            gameID
            playerUsername
            owners
            updatedAt
            player {
                id
                cognitoID
                username
                name
                email
                createdAt
                updatedAt
                games {
                    nextToken
                }
                token {
                    nextToken
                }
            }
            game {
                id
                status
                owners
                initiator
                turn
                state
                winner
                createdAt
                updatedAt
                players {
                    nextToken
                }
            }
        }
    }
`;
export const updatePlayerGame = /* GraphQL */ `
    mutation UpdatePlayerGame(
        $input: UpdatePlayerGameInput!
        $condition: ModelPlayerGameConditionInput
    ) {
        updatePlayerGame(input: $input, condition: $condition) {
            id
            createdAt
            gameID
            playerUsername
            owners
            updatedAt
            player {
                id
                cognitoID
                username
                name
                email
                createdAt
                updatedAt
                games {
                    nextToken
                }
                token {
                    nextToken
                }
            }
            game {
                id
                status
                owners
                initiator
                turn
                state
                winner
                createdAt
                updatedAt
                players {
                    nextToken
                }
            }
        }
    }
`;
export const deletePlayerGame = /* GraphQL */ `
    mutation DeletePlayerGame(
        $input: DeletePlayerGameInput!
        $condition: ModelPlayerGameConditionInput
    ) {
        deletePlayerGame(input: $input, condition: $condition) {
            id
            createdAt
            gameID
            playerUsername
            owners
            updatedAt
            player {
                id
                cognitoID
                username
                name
                email
                createdAt
                updatedAt
                games {
                    nextToken
                }
                token {
                    nextToken
                }
            }
            game {
                id
                status
                owners
                initiator
                turn
                state
                winner
                createdAt
                updatedAt
                players {
                    nextToken
                }
            }
        }
    }
`;
export const createGame = /* GraphQL */ `
    mutation CreateGame($input: CreateGameInput!, $condition: ModelGameConditionInput) {
        createGame(input: $input, condition: $condition) {
            id
            status
            owners
            initiator
            turn
            state
            winner
            createdAt
            updatedAt
            players {
                items {
                    id
                    createdAt
                    gameID
                    playerUsername
                    owners
                    updatedAt
                }
                nextToken
            }
        }
    }
`;
export const updateGame = /* GraphQL */ `
    mutation UpdateGame($input: UpdateGameInput!, $condition: ModelGameConditionInput) {
        updateGame(input: $input, condition: $condition) {
            id
            status
            owners
            initiator
            turn
            state
            winner
            createdAt
            updatedAt
            players {
                items {
                    id
                    createdAt
                    gameID
                    playerUsername
                    owners
                    updatedAt
                }
                nextToken
            }
        }
    }
`;
export const deleteGame = /* GraphQL */ `
    mutation DeleteGame($input: DeleteGameInput!, $condition: ModelGameConditionInput) {
        deleteGame(input: $input, condition: $condition) {
            id
            status
            owners
            initiator
            turn
            state
            winner
            createdAt
            updatedAt
            players {
                items {
                    id
                    createdAt
                    gameID
                    playerUsername
                    owners
                    updatedAt
                }
                nextToken
            }
        }
    }
`;
export const createExpoToken = /* GraphQL */ `
    mutation CreateExpoToken(
        $input: CreateExpoTokenInput!
        $condition: ModelExpoTokenConditionInput
    ) {
        createExpoToken(input: $input, condition: $condition) {
            id
            token
            playerUsername
            createdAt
            updatedAt
        }
    }
`;
export const updateExpoToken = /* GraphQL */ `
    mutation UpdateExpoToken(
        $input: UpdateExpoTokenInput!
        $condition: ModelExpoTokenConditionInput
    ) {
        updateExpoToken(input: $input, condition: $condition) {
            id
            token
            playerUsername
            createdAt
            updatedAt
        }
    }
`;
export const deleteExpoToken = /* GraphQL */ `
    mutation DeleteExpoToken(
        $input: DeleteExpoTokenInput!
        $condition: ModelExpoTokenConditionInput
    ) {
        deleteExpoToken(input: $input, condition: $condition) {
            id
            token
            playerUsername
            createdAt
            updatedAt
        }
    }
`;
