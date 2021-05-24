import React, { ReactElement, useEffect, useState, useRef } from "react";
import { Animated, TouchableOpacity } from "react-native";
import { API, graphqlOperation } from "aws-amplify";
import Observable from "zen-observable";

import { useAuth } from "@contexts/auth-context";
import { Text } from "@components";
import { PlayerGameType, onUpdateGameById } from "./multiplayer-home.graphql";
import { colors } from "@utils";
import styles from "./multiplayer-home.styles";

type GameItemProps = {
    playerGame: PlayerGameType;
    onPress: () => void;
};

export default function GameItem({
    playerGame: playerGameProp,
    onPress
}: GameItemProps): ReactElement | null {
    const { user } = useAuth();
    const [playerGame, setPlayerGame] = useState(playerGameProp);
    const animationRef = useRef<Animated.Value>(new Animated.Value(0));

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

    if (!user || !playerGame) return null;
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
                    const newGame = value.data.onUpdateGameById;
                    if (newGame) {
                        setPlayerGame({
                            ...playerGame,
                            ["game"]: { ...playerGame?.game, ...newGame }
                        });
                        if (newGame.status === "FINISHED") {
                            subscription.unsubscribe();
                        }
                        Animated.sequence([
                            Animated.timing(animationRef.current, {
                                toValue: 1,
                                duration: 500,
                                useNativeDriver: false
                            }),
                            Animated.delay(1000),
                            Animated.timing(animationRef.current, {
                                toValue: 0,
                                duration: 500,
                                useNativeDriver: false
                            })
                        ]).start();
                    }
                }
            });

            return () => {
                subscription.unsubscribe();
            };
        }
    }, []);

    return (
        <TouchableOpacity
            onPress={() => {
                onPress();
            }}
            style={styles.item}
        >
            <Animated.View
                style={[
                    styles.itemBackground,
                    {
                        backgroundColor: animationRef.current.interpolate({
                            inputRange: [0, 1],
                            outputRange: [colors.purple, colors.lightPurple]
                        })
                    }
                ]}
            />
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
