/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

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

export enum ModelSortDirection {
    ASC = "ASC",
    DESC = "DESC"
}

export type ModelPlayerConnection = {
    __typename: "ModelPlayerConnection";
    items?: Array<Player | null> | null;
    nextToken?: string | null;
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
        } | null> | null;
        nextToken?: string | null;
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
    } | null;
};
