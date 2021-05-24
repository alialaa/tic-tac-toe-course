import React, { ReactElement, useEffect } from "react";
import { View, Dimensions, Alert } from "react-native";
import { API, graphqlOperation } from "aws-amplify";

import { GraphQLResult } from "@aws-amplify/api";
import { searchPlayersQuery } from "@api";
import { GradientBackground, Text } from "@components";
import { searchPlayers } from "../multiplayer-home.graphql";

const SCREEN_HEIGHT = Dimensions.get("screen").height;

export default function PlayersModal(): ReactElement {
    const fetchPlayers = async (searchString: string) => {
        try {
            const players = (await API.graphql(
                graphqlOperation(searchPlayers, {
                    limit: 10,
                    searchString: searchString
                })
            )) as GraphQLResult<searchPlayersQuery>;
            console.log("players: ", players.data?.searchPlayers?.items);
        } catch (error) {
            Alert.alert("Error!", "An error has occurred. Please try again later!");
        }
    };

    useEffect(() => {
        fetchPlayers("player");
    }, []);

    return (
        <View
            style={{
                height: SCREEN_HEIGHT * 0.6,
                marginTop: SCREEN_HEIGHT * 0.4
            }}
        >
            <GradientBackground>
                <Text>Hello</Text>
            </GradientBackground>
        </View>
    );
}
