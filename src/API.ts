/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type GameDate = {
    __typename: "GameDate";
    id?: string;
    status?: GameStatus;
    turn?: string;
    state?: Array<Symbol | null>;
    winner?: string | null;
};

export enum GameStatus {
    REQUESTED = "REQUESTED",
    DECLINED = "DECLINED",
    ACTIVE = "ACTIVE",
    FINISHED = "FINISHED",
    CANCELLED = "CANCELLED"
}

export enum Symbol {
    x = "x",
    o = "o"
}

export type CreatePlayerInput = {
    id?: string | null;
    cognitoID: string;
    username: string;
    name: string;
    email: string;
};

export type ModelPlayerConditionInput = {
    cognitoID?: ModelStringInput | null;
    name?: ModelStringInput | null;
    email?: ModelStringInput | null;
    and?: Array<ModelPlayerConditionInput | null> | null;
    or?: Array<ModelPlayerConditionInput | null> | null;
    not?: ModelPlayerConditionInput | null;
};

export type ModelStringInput = {
    ne?: string | null;
    eq?: string | null;
    le?: string | null;
    lt?: string | null;
    ge?: string | null;
    gt?: string | null;
    contains?: string | null;
    notContains?: string | null;
    between?: Array<string | null> | null;
    beginsWith?: string | null;
    attributeExists?: boolean | null;
    attributeType?: ModelAttributeTypes | null;
    size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
    binary = "binary",
    binarySet = "binarySet",
    bool = "bool",
    list = "list",
    map = "map",
    number = "number",
    numberSet = "numberSet",
    string = "string",
    stringSet = "stringSet",
    _null = "_null"
}

export type ModelSizeInput = {
    ne?: number | null;
    eq?: number | null;
    le?: number | null;
    lt?: number | null;
    ge?: number | null;
    gt?: number | null;
    between?: Array<number | null> | null;
};

export type Player = {
    __typename: "Player";
    id?: string;
    cognitoID?: string;
    username?: string;
    name?: string;
    email?: string;
    createdAt?: string;
    updatedAt?: string;
    games?: ModelPlayerGameConnection;
};

export type ModelPlayerGameConnection = {
    __typename: "ModelPlayerGameConnection";
    items?: Array<PlayerGame | null> | null;
    nextToken?: string | null;
};

export type PlayerGame = {
    __typename: "PlayerGame";
    id?: string;
    createdAt?: string;
    gameID?: string;
    playerUsername?: string;
    owners?: Array<string>;
    updatedAt?: string;
    player?: Player;
    game?: Game;
};

export type Game = {
    __typename: "Game";
    id?: string;
    status?: GameStatus;
    owners?: Array<string>;
    initiator?: string;
    turn?: string;
    state?: Array<Symbol | null>;
    winner?: string | null;
    createdAt?: string;
    updatedAt?: string;
    players?: ModelPlayerGameConnection;
};

export type UpdatePlayerInput = {
    id?: string | null;
    cognitoID?: string | null;
    username: string;
    name?: string | null;
    email?: string | null;
};

export type DeletePlayerInput = {
    username: string;
};

export type CreatePlayerGameInput = {
    id?: string | null;
    createdAt?: string | null;
    gameID: string;
    playerUsername: string;
    owners: Array<string>;
};

export type ModelPlayerGameConditionInput = {
    createdAt?: ModelStringInput | null;
    gameID?: ModelIDInput | null;
    playerUsername?: ModelStringInput | null;
    and?: Array<ModelPlayerGameConditionInput | null> | null;
    or?: Array<ModelPlayerGameConditionInput | null> | null;
    not?: ModelPlayerGameConditionInput | null;
};

export type ModelIDInput = {
    ne?: string | null;
    eq?: string | null;
    le?: string | null;
    lt?: string | null;
    ge?: string | null;
    gt?: string | null;
    contains?: string | null;
    notContains?: string | null;
    between?: Array<string | null> | null;
    beginsWith?: string | null;
    attributeExists?: boolean | null;
    attributeType?: ModelAttributeTypes | null;
    size?: ModelSizeInput | null;
};

export type UpdatePlayerGameInput = {
    id: string;
    createdAt?: string | null;
    gameID?: string | null;
    playerUsername?: string | null;
    owners?: Array<string> | null;
};

export type DeletePlayerGameInput = {
    id?: string | null;
};

export type CreateGameInput = {
    id?: string | null;
    status: GameStatus;
    owners: Array<string>;
    initiator: string;
    turn: string;
    state: Array<Symbol | null>;
    winner?: string | null;
};

export type ModelGameConditionInput = {
    status?: ModelGameStatusInput | null;
    initiator?: ModelStringInput | null;
    turn?: ModelStringInput | null;
    state?: ModelSymbolListInput | null;
    winner?: ModelStringInput | null;
    and?: Array<ModelGameConditionInput | null> | null;
    or?: Array<ModelGameConditionInput | null> | null;
    not?: ModelGameConditionInput | null;
};

export type ModelGameStatusInput = {
    eq?: GameStatus | null;
    ne?: GameStatus | null;
};

export type ModelSymbolListInput = {
    eq?: Array<Symbol | null> | null;
    ne?: Array<Symbol | null> | null;
    contains?: Symbol | null;
    notContains?: Symbol | null;
};

export type UpdateGameInput = {
    id: string;
    status?: GameStatus | null;
    owners?: Array<string> | null;
    initiator?: string | null;
    turn?: string | null;
    state?: Array<Symbol | null> | null;
    winner?: string | null;
};

export type DeleteGameInput = {
    id?: string | null;
};

export type ModelPlayerFilterInput = {
    id?: ModelIDInput | null;
    cognitoID?: ModelStringInput | null;
    username?: ModelStringInput | null;
    name?: ModelStringInput | null;
    email?: ModelStringInput | null;
    and?: Array<ModelPlayerFilterInput | null> | null;
    or?: Array<ModelPlayerFilterInput | null> | null;
    not?: ModelPlayerFilterInput | null;
};

export enum ModelSortDirection {
    ASC = "ASC",
    DESC = "DESC"
}

export type ModelPlayerConnection = {
    __typename: "ModelPlayerConnection";
    items?: Array<Player | null> | null;
    nextToken?: string | null;
};

export type ModelGameFilterInput = {
    id?: ModelIDInput | null;
    status?: ModelGameStatusInput | null;
    owners?: ModelStringInput | null;
    initiator?: ModelStringInput | null;
    turn?: ModelStringInput | null;
    state?: ModelSymbolListInput | null;
    winner?: ModelStringInput | null;
    and?: Array<ModelGameFilterInput | null> | null;
    or?: Array<ModelGameFilterInput | null> | null;
    not?: ModelGameFilterInput | null;
};

export type ModelGameConnection = {
    __typename: "ModelGameConnection";
    items?: Array<Game | null> | null;
    nextToken?: string | null;
};

export type StartGameMutationVariables = {
    invitee?: string;
};

export type StartGameMutation = {
    startGame?: {
        __typename: "GameDate";
        id: string;
        status: GameStatus;
        turn: string;
        state: Array<Symbol | null>;
        winner?: string | null;
    } | null;
};

export type CreatePlayerMutationVariables = {
    input?: CreatePlayerInput;
    condition?: ModelPlayerConditionInput | null;
};

export type CreatePlayerMutation = {
    createPlayer?: {
        __typename: "Player";
        id: string;
        cognitoID: string;
        username: string;
        name: string;
        email: string;
        createdAt: string;
        updatedAt: string;
        games?: {
            __typename: "ModelPlayerGameConnection";
            items?: Array<{
                __typename: "PlayerGame";
                id: string;
                createdAt: string;
                gameID: string;
                playerUsername: string;
                owners: Array<string>;
                updatedAt: string;
            } | null> | null;
            nextToken?: string | null;
        } | null;
    } | null;
};

export type UpdatePlayerMutationVariables = {
    input?: UpdatePlayerInput;
    condition?: ModelPlayerConditionInput | null;
};

export type UpdatePlayerMutation = {
    updatePlayer?: {
        __typename: "Player";
        id: string;
        cognitoID: string;
        username: string;
        name: string;
        email: string;
        createdAt: string;
        updatedAt: string;
        games?: {
            __typename: "ModelPlayerGameConnection";
            items?: Array<{
                __typename: "PlayerGame";
                id: string;
                createdAt: string;
                gameID: string;
                playerUsername: string;
                owners: Array<string>;
                updatedAt: string;
            } | null> | null;
            nextToken?: string | null;
        } | null;
    } | null;
};

export type DeletePlayerMutationVariables = {
    input?: DeletePlayerInput;
    condition?: ModelPlayerConditionInput | null;
};

export type DeletePlayerMutation = {
    deletePlayer?: {
        __typename: "Player";
        id: string;
        cognitoID: string;
        username: string;
        name: string;
        email: string;
        createdAt: string;
        updatedAt: string;
        games?: {
            __typename: "ModelPlayerGameConnection";
            items?: Array<{
                __typename: "PlayerGame";
                id: string;
                createdAt: string;
                gameID: string;
                playerUsername: string;
                owners: Array<string>;
                updatedAt: string;
            } | null> | null;
            nextToken?: string | null;
        } | null;
    } | null;
};

export type CreatePlayerGameMutationVariables = {
    input?: CreatePlayerGameInput;
    condition?: ModelPlayerGameConditionInput | null;
};

export type CreatePlayerGameMutation = {
    createPlayerGame?: {
        __typename: "PlayerGame";
        id: string;
        createdAt: string;
        gameID: string;
        playerUsername: string;
        owners: Array<string>;
        updatedAt: string;
        player: {
            __typename: "Player";
            id: string;
            cognitoID: string;
            username: string;
            name: string;
            email: string;
            createdAt: string;
            updatedAt: string;
            games?: {
                __typename: "ModelPlayerGameConnection";
                nextToken?: string | null;
            } | null;
        };
        game: {
            __typename: "Game";
            id: string;
            status: GameStatus;
            owners: Array<string>;
            initiator: string;
            turn: string;
            state: Array<Symbol | null>;
            winner?: string | null;
            createdAt: string;
            updatedAt: string;
            players?: {
                __typename: "ModelPlayerGameConnection";
                nextToken?: string | null;
            } | null;
        };
    } | null;
};

export type UpdatePlayerGameMutationVariables = {
    input?: UpdatePlayerGameInput;
    condition?: ModelPlayerGameConditionInput | null;
};

export type UpdatePlayerGameMutation = {
    updatePlayerGame?: {
        __typename: "PlayerGame";
        id: string;
        createdAt: string;
        gameID: string;
        playerUsername: string;
        owners: Array<string>;
        updatedAt: string;
        player: {
            __typename: "Player";
            id: string;
            cognitoID: string;
            username: string;
            name: string;
            email: string;
            createdAt: string;
            updatedAt: string;
            games?: {
                __typename: "ModelPlayerGameConnection";
                nextToken?: string | null;
            } | null;
        };
        game: {
            __typename: "Game";
            id: string;
            status: GameStatus;
            owners: Array<string>;
            initiator: string;
            turn: string;
            state: Array<Symbol | null>;
            winner?: string | null;
            createdAt: string;
            updatedAt: string;
            players?: {
                __typename: "ModelPlayerGameConnection";
                nextToken?: string | null;
            } | null;
        };
    } | null;
};

export type DeletePlayerGameMutationVariables = {
    input?: DeletePlayerGameInput;
    condition?: ModelPlayerGameConditionInput | null;
};

export type DeletePlayerGameMutation = {
    deletePlayerGame?: {
        __typename: "PlayerGame";
        id: string;
        createdAt: string;
        gameID: string;
        playerUsername: string;
        owners: Array<string>;
        updatedAt: string;
        player: {
            __typename: "Player";
            id: string;
            cognitoID: string;
            username: string;
            name: string;
            email: string;
            createdAt: string;
            updatedAt: string;
            games?: {
                __typename: "ModelPlayerGameConnection";
                nextToken?: string | null;
            } | null;
        };
        game: {
            __typename: "Game";
            id: string;
            status: GameStatus;
            owners: Array<string>;
            initiator: string;
            turn: string;
            state: Array<Symbol | null>;
            winner?: string | null;
            createdAt: string;
            updatedAt: string;
            players?: {
                __typename: "ModelPlayerGameConnection";
                nextToken?: string | null;
            } | null;
        };
    } | null;
};

export type CreateGameMutationVariables = {
    input?: CreateGameInput;
    condition?: ModelGameConditionInput | null;
};

export type CreateGameMutation = {
    createGame?: {
        __typename: "Game";
        id: string;
        status: GameStatus;
        owners: Array<string>;
        initiator: string;
        turn: string;
        state: Array<Symbol | null>;
        winner?: string | null;
        createdAt: string;
        updatedAt: string;
        players?: {
            __typename: "ModelPlayerGameConnection";
            items?: Array<{
                __typename: "PlayerGame";
                id: string;
                createdAt: string;
                gameID: string;
                playerUsername: string;
                owners: Array<string>;
                updatedAt: string;
            } | null> | null;
            nextToken?: string | null;
        } | null;
    } | null;
};

export type UpdateGameMutationVariables = {
    input?: UpdateGameInput;
    condition?: ModelGameConditionInput | null;
};

export type UpdateGameMutation = {
    updateGame?: {
        __typename: "Game";
        id: string;
        status: GameStatus;
        owners: Array<string>;
        initiator: string;
        turn: string;
        state: Array<Symbol | null>;
        winner?: string | null;
        createdAt: string;
        updatedAt: string;
        players?: {
            __typename: "ModelPlayerGameConnection";
            items?: Array<{
                __typename: "PlayerGame";
                id: string;
                createdAt: string;
                gameID: string;
                playerUsername: string;
                owners: Array<string>;
                updatedAt: string;
            } | null> | null;
            nextToken?: string | null;
        } | null;
    } | null;
};

export type DeleteGameMutationVariables = {
    input?: DeleteGameInput;
    condition?: ModelGameConditionInput | null;
};

export type DeleteGameMutation = {
    deleteGame?: {
        __typename: "Game";
        id: string;
        status: GameStatus;
        owners: Array<string>;
        initiator: string;
        turn: string;
        state: Array<Symbol | null>;
        winner?: string | null;
        createdAt: string;
        updatedAt: string;
        players?: {
            __typename: "ModelPlayerGameConnection";
            items?: Array<{
                __typename: "PlayerGame";
                id: string;
                createdAt: string;
                gameID: string;
                playerUsername: string;
                owners: Array<string>;
                updatedAt: string;
            } | null> | null;
            nextToken?: string | null;
        } | null;
    } | null;
};

export type ListPlayersQueryVariables = {
    username?: string | null;
    filter?: ModelPlayerFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
    sortDirection?: ModelSortDirection | null;
};

export type ListPlayersQuery = {
    listPlayers?: {
        __typename: "ModelPlayerConnection";
        items?: Array<{
            __typename: "Player";
            id: string;
            cognitoID: string;
            username: string;
            name: string;
            email: string;
            createdAt: string;
            updatedAt: string;
            games?: {
                __typename: "ModelPlayerGameConnection";
                nextToken?: string | null;
            } | null;
        } | null> | null;
        nextToken?: string | null;
    } | null;
};

export type GetPlayerQueryVariables = {
    username?: string;
};

export type GetPlayerQuery = {
    getPlayer?: {
        __typename: "Player";
        id: string;
        cognitoID: string;
        username: string;
        name: string;
        email: string;
        createdAt: string;
        updatedAt: string;
        games?: {
            __typename: "ModelPlayerGameConnection";
            items?: Array<{
                __typename: "PlayerGame";
                id: string;
                createdAt: string;
                gameID: string;
                playerUsername: string;
                owners: Array<string>;
                updatedAt: string;
            } | null> | null;
            nextToken?: string | null;
        } | null;
    } | null;
};

export type ListGamesQueryVariables = {
    filter?: ModelGameFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
};

export type ListGamesQuery = {
    listGames?: {
        __typename: "ModelGameConnection";
        items?: Array<{
            __typename: "Game";
            id: string;
            status: GameStatus;
            owners: Array<string>;
            initiator: string;
            turn: string;
            state: Array<Symbol | null>;
            winner?: string | null;
            createdAt: string;
            updatedAt: string;
            players?: {
                __typename: "ModelPlayerGameConnection";
                nextToken?: string | null;
            } | null;
        } | null> | null;
        nextToken?: string | null;
    } | null;
};

export type GetGameQueryVariables = {
    id?: string;
};

export type GetGameQuery = {
    getGame?: {
        __typename: "Game";
        id: string;
        status: GameStatus;
        owners: Array<string>;
        initiator: string;
        turn: string;
        state: Array<Symbol | null>;
        winner?: string | null;
        createdAt: string;
        updatedAt: string;
        players?: {
            __typename: "ModelPlayerGameConnection";
            items?: Array<{
                __typename: "PlayerGame";
                id: string;
                createdAt: string;
                gameID: string;
                playerUsername: string;
                owners: Array<string>;
                updatedAt: string;
            } | null> | null;
            nextToken?: string | null;
        } | null;
    } | null;
};

export type OnCreatePlayerSubscription = {
    onCreatePlayer?: {
        __typename: "Player";
        id: string;
        cognitoID: string;
        username: string;
        name: string;
        email: string;
        createdAt: string;
        updatedAt: string;
        games?: {
            __typename: "ModelPlayerGameConnection";
            items?: Array<{
                __typename: "PlayerGame";
                id: string;
                createdAt: string;
                gameID: string;
                playerUsername: string;
                owners: Array<string>;
                updatedAt: string;
            } | null> | null;
            nextToken?: string | null;
        } | null;
    } | null;
};

export type OnUpdatePlayerSubscription = {
    onUpdatePlayer?: {
        __typename: "Player";
        id: string;
        cognitoID: string;
        username: string;
        name: string;
        email: string;
        createdAt: string;
        updatedAt: string;
        games?: {
            __typename: "ModelPlayerGameConnection";
            items?: Array<{
                __typename: "PlayerGame";
                id: string;
                createdAt: string;
                gameID: string;
                playerUsername: string;
                owners: Array<string>;
                updatedAt: string;
            } | null> | null;
            nextToken?: string | null;
        } | null;
    } | null;
};

export type OnDeletePlayerSubscription = {
    onDeletePlayer?: {
        __typename: "Player";
        id: string;
        cognitoID: string;
        username: string;
        name: string;
        email: string;
        createdAt: string;
        updatedAt: string;
        games?: {
            __typename: "ModelPlayerGameConnection";
            items?: Array<{
                __typename: "PlayerGame";
                id: string;
                createdAt: string;
                gameID: string;
                playerUsername: string;
                owners: Array<string>;
                updatedAt: string;
            } | null> | null;
            nextToken?: string | null;
        } | null;
    } | null;
};

export type OnCreatePlayerGameSubscriptionVariables = {
    owners?: string | null;
};

export type OnCreatePlayerGameSubscription = {
    onCreatePlayerGame?: {
        __typename: "PlayerGame";
        id: string;
        createdAt: string;
        gameID: string;
        playerUsername: string;
        owners: Array<string>;
        updatedAt: string;
        player: {
            __typename: "Player";
            id: string;
            cognitoID: string;
            username: string;
            name: string;
            email: string;
            createdAt: string;
            updatedAt: string;
            games?: {
                __typename: "ModelPlayerGameConnection";
                nextToken?: string | null;
            } | null;
        };
        game: {
            __typename: "Game";
            id: string;
            status: GameStatus;
            owners: Array<string>;
            initiator: string;
            turn: string;
            state: Array<Symbol | null>;
            winner?: string | null;
            createdAt: string;
            updatedAt: string;
            players?: {
                __typename: "ModelPlayerGameConnection";
                nextToken?: string | null;
            } | null;
        };
    } | null;
};

export type OnUpdatePlayerGameSubscriptionVariables = {
    owners?: string | null;
};

export type OnUpdatePlayerGameSubscription = {
    onUpdatePlayerGame?: {
        __typename: "PlayerGame";
        id: string;
        createdAt: string;
        gameID: string;
        playerUsername: string;
        owners: Array<string>;
        updatedAt: string;
        player: {
            __typename: "Player";
            id: string;
            cognitoID: string;
            username: string;
            name: string;
            email: string;
            createdAt: string;
            updatedAt: string;
            games?: {
                __typename: "ModelPlayerGameConnection";
                nextToken?: string | null;
            } | null;
        };
        game: {
            __typename: "Game";
            id: string;
            status: GameStatus;
            owners: Array<string>;
            initiator: string;
            turn: string;
            state: Array<Symbol | null>;
            winner?: string | null;
            createdAt: string;
            updatedAt: string;
            players?: {
                __typename: "ModelPlayerGameConnection";
                nextToken?: string | null;
            } | null;
        };
    } | null;
};

export type OnDeletePlayerGameSubscriptionVariables = {
    owners?: string | null;
};

export type OnDeletePlayerGameSubscription = {
    onDeletePlayerGame?: {
        __typename: "PlayerGame";
        id: string;
        createdAt: string;
        gameID: string;
        playerUsername: string;
        owners: Array<string>;
        updatedAt: string;
        player: {
            __typename: "Player";
            id: string;
            cognitoID: string;
            username: string;
            name: string;
            email: string;
            createdAt: string;
            updatedAt: string;
            games?: {
                __typename: "ModelPlayerGameConnection";
                nextToken?: string | null;
            } | null;
        };
        game: {
            __typename: "Game";
            id: string;
            status: GameStatus;
            owners: Array<string>;
            initiator: string;
            turn: string;
            state: Array<Symbol | null>;
            winner?: string | null;
            createdAt: string;
            updatedAt: string;
            players?: {
                __typename: "ModelPlayerGameConnection";
                nextToken?: string | null;
            } | null;
        };
    } | null;
};

export type OnCreateGameSubscriptionVariables = {
    owners?: string | null;
};

export type OnCreateGameSubscription = {
    onCreateGame?: {
        __typename: "Game";
        id: string;
        status: GameStatus;
        owners: Array<string>;
        initiator: string;
        turn: string;
        state: Array<Symbol | null>;
        winner?: string | null;
        createdAt: string;
        updatedAt: string;
        players?: {
            __typename: "ModelPlayerGameConnection";
            items?: Array<{
                __typename: "PlayerGame";
                id: string;
                createdAt: string;
                gameID: string;
                playerUsername: string;
                owners: Array<string>;
                updatedAt: string;
            } | null> | null;
            nextToken?: string | null;
        } | null;
    } | null;
};

export type OnUpdateGameSubscriptionVariables = {
    owners?: string | null;
};

export type OnUpdateGameSubscription = {
    onUpdateGame?: {
        __typename: "Game";
        id: string;
        status: GameStatus;
        owners: Array<string>;
        initiator: string;
        turn: string;
        state: Array<Symbol | null>;
        winner?: string | null;
        createdAt: string;
        updatedAt: string;
        players?: {
            __typename: "ModelPlayerGameConnection";
            items?: Array<{
                __typename: "PlayerGame";
                id: string;
                createdAt: string;
                gameID: string;
                playerUsername: string;
                owners: Array<string>;
                updatedAt: string;
            } | null> | null;
            nextToken?: string | null;
        } | null;
    } | null;
};

export type OnDeleteGameSubscriptionVariables = {
    owners?: string | null;
};

export type OnDeleteGameSubscription = {
    onDeleteGame?: {
        __typename: "Game";
        id: string;
        status: GameStatus;
        owners: Array<string>;
        initiator: string;
        turn: string;
        state: Array<Symbol | null>;
        winner?: string | null;
        createdAt: string;
        updatedAt: string;
        players?: {
            __typename: "ModelPlayerGameConnection";
            items?: Array<{
                __typename: "PlayerGame";
                id: string;
                createdAt: string;
                gameID: string;
                playerUsername: string;
                owners: Array<string>;
                updatedAt: string;
            } | null> | null;
            nextToken?: string | null;
        } | null;
    } | null;
};
