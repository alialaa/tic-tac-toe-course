import React, { useEffect, ReactElement } from "react";
import { ScrollView, View } from "react-native";
import { Alert } from "react-native";
import { API, graphqlOperation } from "aws-amplify";

import { GradientBackground, Text } from "@components";
import styles from "./multiplayer-home.styles";
import { useAuth } from "@contexts/auth-context";
import { colors } from "@utils";
import { getPlayer } from "./multiplayer-home.graphql";

export default function MultiplayerHome(): ReactElement {
    const { user } = useAuth();

    const fetchPlayer = async (nextToken: string | null) => {
        if (user) {
            try {
                const player = await API.graphql(
                    graphqlOperation(getPlayer, {
                        username: user.username,
                        limit: 1,
                        nextToken: nextToken,
                        sortDirection: "DESC"
                    })
                );
                console.log("resp: ", player);
            } catch (error) {
                Alert.alert("Error!", "An error has occurred!");
            }
        }
    };

    useEffect(() => {
        fetchPlayer(null);
    }, []);

    return (
        <GradientBackground>
            {user ? (
                <ScrollView contentContainerStyle={styles.container}>
                    <Text style={{ color: colors.lightGreen }}>{user.username}</Text>
                </ScrollView>
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
