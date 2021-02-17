import React, { ReactElement } from "react";
import { Text, SafeAreaView } from "react-native";
import { GradientBackground } from "@Components";
import styles from "./single-player-game.styles";

export default function Game(): ReactElement {
    return (
        <GradientBackground>
            <SafeAreaView style={styles.container}>
                <Text style={{ color: "#fff" }}> Game </Text>
            </SafeAreaView>
        </GradientBackground>
    );
}
