/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type Player = {
  __typename: "Player",
  id?: string,
  cognitoID?: string,
  username?: string,
  name?: string,
  email?: string,
  createdAt?: string,
  updatedAt?: string,
  games?: ModelPlayerGameConnection,
};

export type ModelPlayerGameConnection = {
  __typename: "ModelPlayerGameConnection",
  items?:  Array<PlayerGame | null > | null,
  nextToken?: string | null,
};

export type PlayerGame = {
  __typename: "PlayerGame",
  id?: string,
  createdAt?: string,
  gameID?: string,
  playerUsername?: string,
  owners?: Array< string >,
  updatedAt?: string,
  player?: Player,
  game?: Game,
};

export type Game = {
  __typename: "Game",
  id?: string,
  status?: GameStatus,
  owners?: Array< string >,
  initiator?: string,
  turn?: string,
  state?: Array< Symbol | null >,
  winner?: string | null,
  createdAt?: string,
  updatedAt?: string,
  players?: ModelPlayerGameConnection,
};

export enum GameStatus {
  REQUESTED = "REQUESTED",
  DECLINED = "DECLINED",
  ACTIVE = "ACTIVE",
  FINISHED = "FINISHED",
  CANCELLED = "CANCELLED",
}


export enum Symbol {
  x = "x",
  o = "o",
}


export type GetPlayerQueryVariables = {
  username?: string,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type GetPlayerQuery = {
  getPlayer?:  {
    __typename: "Player",
    id: string,
    games?:  {
      __typename: "ModelPlayerGameConnection",
      items?:  Array< {
        __typename: "PlayerGame",
        game:  {
          __typename: "Game",
          id: string,
          initiator: string,
          owners: Array< string >,
          status: GameStatus,
          turn: string,
          winner?: string | null,
        },
        player:  {
          __typename: "Player",
          name: string,
          username: string,
        },
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};
