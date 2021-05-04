/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePlayerGame = /* GraphQL */ `
    subscription OnCreatePlayerGame {
        onCreatePlayerGame {
            id
            createdAt
            gameID
            playerUsername
            owner
            game {
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
            updatedAt
            player {
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
        }
    }
`;
export const onUpdatePlayerGame = /* GraphQL */ `
    subscription OnUpdatePlayerGame {
        onUpdatePlayerGame {
            id
            createdAt
            gameID
            playerUsername
            owner
            game {
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
            updatedAt
            player {
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
        }
    }
`;
export const onDeletePlayerGame = /* GraphQL */ `
    subscription OnDeletePlayerGame {
        onDeletePlayerGame {
            id
            createdAt
            gameID
            playerUsername
            owner
            game {
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
            updatedAt
            player {
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
        }
    }
`;
export const onCreateGame = /* GraphQL */ `
    subscription OnCreateGame {
        onCreateGame {
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
export const onUpdateGame = /* GraphQL */ `
    subscription OnUpdateGame {
        onUpdateGame {
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
export const onDeleteGame = /* GraphQL */ `
    subscription OnDeleteGame {
        onDeleteGame {
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
export const onCreatePlayer = /* GraphQL */ `
    subscription OnCreatePlayer {
        onCreatePlayer {
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
export const onUpdatePlayer = /* GraphQL */ `
    subscription OnUpdatePlayer {
        onUpdatePlayer {
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
export const onDeletePlayer = /* GraphQL */ `
    subscription OnDeletePlayer {
        onDeletePlayer {
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
