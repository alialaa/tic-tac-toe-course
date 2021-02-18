import React, { ReactElement } from "react";
import { SafeAreaView } from "react-native";
import { GradientBackground } from "@Components";
import styles from "./single-player-game.styles";
import { Board } from "@Components";
import {
    printFormattedBoard,
    isEmpty,
    isFull,
    getAvailableMoves,
    BoardState,
    isTerminal
} from "@utils";

export default function Game(): ReactElement {
    // prettier-ignore
    const b: BoardState = [
        "x", "o", "o", 
        "o", "x", "x", 
        "o", "x", "o"
    ];

    printFormattedBoard(b);
    console.log(isTerminal(b));
    // console.log(isEmpty(b));
    // console.log(isFull(b));
    // console.log(getAvailableMoves(b));
    return (
        <GradientBackground>
            <SafeAreaView style={styles.container}>
                <Board
                    onCellPressed={index => {
                        alert(index);
                    }}
                    state={b}
                    size={300}
                />
            </SafeAreaView>
        </GradientBackground>
    );
}
