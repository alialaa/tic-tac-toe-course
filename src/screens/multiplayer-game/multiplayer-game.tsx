import React, { ReactElement } from "react";
import { View } from "react-native";

import { GradientBackground, Text } from "@components";
import styles from "./multiplayer-game.styles";

export default function multiplayerGame(): ReactElement {
    return (
        <GradientBackground>
            <View>
                <Text>Game</Text>
            </View>
        </GradientBackground>
    );
}
