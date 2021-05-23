import React, { ReactElement, useEffect } from "react";
import { TouchableOpacity } from "react-native";
import { API, graphqlOperation } from "aws-amplify";
import Observable from "zen-observable";

import { useAuth } from "@contexts/auth-context";
import { Text } from "@components";
import { PlayerGameType, onUpdateGameById } from "./multiplayer-home.graphql";
import { colors } from "@utils";
import styles from "./multiplayer-home.styles";

export default function GameItem({
    playerGame
}: {
    playerGame: PlayerGameType;
}): ReactElement | null {
    const { user } = useAuth();

    const getResult = (playerGame: PlayerGameType): "win" | "loss" | "draw" | false => {
        if (!playerGame || !user) return false;
        const game = playerGame.game;
        if (game.status !== "FINISHED") return false;
        const opponent = game?.players?.items?.find(
            playerGame => playerGame?.player.username !== user.username
        );
        if (game.winner === user.username) return "win";
        if (game.winner === opponent?.player.username) return "loss";
        if (game.winner === null) return "draw";
        return false;
    };

    if (!user) return null;
    const game = playerGame?.game;
    const result = getResult(playerGame);
    const opponent = game?.players?.items?.find(
        playerGame => playerGame?.player.username !== user.username
    );

    useEffect(() => {
        if (game && (game.status === "REQUESTED" || game.status === "ACTIVE")) {
            const gameUpdates = (API.graphql(
                graphqlOperation(onUpdateGameById, {
                    id: game.id
                })
            ) as unknown) as Observable<{ [key: string]: any }>;
            const subscription = gameUpdates.subscribe({
                next: ({ value }) => {
                    console.log("#########################value: ", value);
                }
            });

            return () => {
                subscription.unsubscribe();
            };
        }
    }, []);

    return (
        <TouchableOpacity style={styles.item}>
            <Text style={styles.itemTitle}>
                {opponent?.player.name} ({opponent?.player.username})
            </Text>
            {(game?.status === "REQUESTED" || game?.status === "ACTIVE") && (
                <Text style={{ color: colors.lightGreen, textAlign: "center" }}>
                    {game.turn === user.username
                        ? "Your Turn!"
                        : `Waiting for ${opponent?.player.username}`}
                </Text>
            )}
            {result && (
                <Text style={{ color: colors[result], textAlign: "center" }}>
                    {result === "win" && "You Won!"}
                    {result === "loss" && "You Lost!"}
                    {result === "draw" && "It is a draw!"}
                </Text>
            )}
        </TouchableOpacity>
    );
}
