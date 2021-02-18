import React, { ReactElement } from "react";
import { Text, SafeAreaView } from "react-native";
import { GradientBackground } from "@Components";
import styles from "./single-player-game.styles";
import { Board } from "@Components";

export default function Game(): ReactElement {
    return (
        <GradientBackground>
            <SafeAreaView style={styles.container}>
                <Board
                    onCellPressed={index => {
                        alert(index);
                    }}
                    state={["x", "o", "x", "x", "o", null, "x", "o", null]}
                    size={300}
                />
            </SafeAreaView>
        </GradientBackground>
    );
}
