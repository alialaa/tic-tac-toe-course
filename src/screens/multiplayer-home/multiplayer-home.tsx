import React, { useEffect, ReactElement, useState } from "react";
import { Alert, ScrollView, View, FlatList, ActivityIndicator } from "react-native";
import { API, graphqlOperation } from "aws-amplify";

import { GradientBackground, Text } from "@components";
import styles from "./multiplayer-home.styles";
import { useAuth } from "@contexts/auth-context";
import { colors } from "@utils";
import { GraphQLResult } from "@aws-amplify/api";
import { GetPlayerQuery } from "@api";
import { getPlayer } from "./multiplayer-home.graphql";
import { TouchableOpacity } from "react-native-gesture-handler";

type PlayerGamesType = Exclude<Exclude<GetPlayerQuery["getPlayer"], null>["games"], null>["items"];
type PlayerGameType = Exclude<PlayerGamesType, null>[0];

export default function MultiplayerHome(): ReactElement {
    const { user } = useAuth();
    const [playerGames, setPlayerGames] = useState<PlayerGameType[] | null>(null);
    const [nextToken, setNextToken] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const fetchPlayer = async (nextToken: string | null) => {
        if (user) {
            setLoading(true);
            try {
                const player = (await API.graphql(
                    graphqlOperation(getPlayer, {
                        username: user.username,
                        limit: 2,
                        nextToken: nextToken,
                        sortDirection: "DESC"
                    })
                )) as GraphQLResult<GetPlayerQuery>;
                if (player.data?.getPlayer?.games) {
                    setPlayerGames(player.data.getPlayer.games.items);
                    setNextToken(player.data.getPlayer.games.nextToken);
                }
            } catch (error) {
                Alert.alert("Error!", "An error has occurred!");
            }
            setLoading(false);
        }
    };

    const renderGame = ({ item }: { item: PlayerGameType }) => {
        const game = item?.game;
        return (
            <TouchableOpacity style={{ marginBottom: 20 }}>
                <Text style={{ color: colors.lightGreen }}>{game?.owners[0]}</Text>
                <Text style={{ color: colors.lightGreen }}>{game?.owners[1]}</Text>
            </TouchableOpacity>
        );
    };

    useEffect(() => {
        fetchPlayer(null);
    }, []);

    return (
        <GradientBackground>
            {user ? (
                <FlatList
                    contentContainerStyle={styles.container}
                    data={playerGames}
                    renderItem={renderGame}
                    keyExtractor={playerGame =>
                        playerGame ? playerGame.game.id : `${new Date().getTime()}`
                    }
                    ListEmptyComponent={() => {
                        if (loading) {
                            return (
                                <View
                                    style={{
                                        flex: 1,
                                        justifyContent: "center",
                                        alignItems: "center"
                                    }}
                                >
                                    <ActivityIndicator color={colors.lightGreen} />
                                </View>
                            );
                        }
                        return (
                            <View>
                                <Text style={{ color: colors.lightGreen }}>No Games Yet</Text>
                            </View>
                        );
                    }}
                />
            ) : (
                <View style={styles.container}>
                    <Text style={{ color: colors.lightGreen }}>
                        You must be logged in order to play a multiplayer game!
                    </Text>
                </View>
            )}
        </GradientBackground>
    );
}
