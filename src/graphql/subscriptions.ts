/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePlayer = /* GraphQL */ `
    subscription OnCreatePlayer {
        onCreatePlayer {
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
        }
    }
`;
export const onUpdatePlayer = /* GraphQL */ `
    subscription OnUpdatePlayer {
        onUpdatePlayer {
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
        }
    }
`;
export const onDeletePlayer = /* GraphQL */ `
    subscription OnDeletePlayer {
        onDeletePlayer {
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
        }
    }
`;
export const onCreatePlayerGame = /* GraphQL */ `
    subscription OnCreatePlayerGame($owners: String) {
        onCreatePlayerGame(owners: $owners) {
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
export const onUpdatePlayerGame = /* GraphQL */ `
    subscription OnUpdatePlayerGame($owners: String) {
        onUpdatePlayerGame(owners: $owners) {
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
export const onDeletePlayerGame = /* GraphQL */ `
    subscription OnDeletePlayerGame($owners: String) {
        onDeletePlayerGame(owners: $owners) {
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
export const onCreateGame = /* GraphQL */ `
    subscription OnCreateGame($owners: String) {
        onCreateGame(owners: $owners) {
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
export const onUpdateGame = /* GraphQL */ `
    subscription OnUpdateGame($owners: String) {
        onUpdateGame(owners: $owners) {
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
export const onDeleteGame = /* GraphQL */ `
    subscription OnDeleteGame($owners: String) {
        onDeleteGame(owners: $owners) {
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
