import React, { ReactElement } from "react";
import { ScrollView } from "react-native";

import { GradientBackground, Text } from "@components";
import styles from "./multiplayer-home.styles";

export default function MultiplayerHome(): ReactElement {
    return (
        <GradientBackground>
            <ScrollView contentContainerStyle={styles.container}>
                <Text>Multiplayer Home</Text>
            </ScrollView>
        </GradientBackground>
    );
}
