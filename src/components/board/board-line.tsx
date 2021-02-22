import React, { ReactElement } from "react";
import { View, StyleSheet } from "react-native";
import { BoardResult } from "@utils";

const style = StyleSheet.create({
    line: {
        position: "absolute",
        backgroundColor: "#f03"
    },
    vLine: {
        width: 2,
        height: "100%"
    },
    hLine: {
        height: 2,
        width: "100"
    },
    dLine: {
        width: 2,
        height: "100%",
        top: 0,
        left: "50%"
    }
});

type BoardLineProps = {
    size: number;
    gameResult?: BoardResult | false;
};

export default function BoardLine({ size, gameResult }: BoardLineProps): ReactElement {
    const diagonalHeight = Math.sqrt(Math.pow(size, 2) + Math.pow(size, 2));
    return (
        <>
            {gameResult && gameResult.column && gameResult.direction === "V" && (
                <View
                    style={[
                        style.line,
                        style.vLine,
                        {
                            left: `${33.3333 * gameResult.column - 16.6666}%`
                        }
                    ]}
                ></View>
            )}
            {gameResult && gameResult.row && gameResult.direction === "H" && (
                <View
                    style={[
                        style.line,
                        style.hLine,
                        {
                            top: `${33.3333 * gameResult.row - 16.6666}%`
                        }
                    ]}
                ></View>
            )}
            {gameResult && gameResult.diagonal && gameResult.direction === "D" && (
                <View
                    style={[
                        style.line,
                        style.dLine,
                        {
                            height: diagonalHeight,
                            transform: [
                                {
                                    translateY: -(diagonalHeight - size) / 2
                                },
                                {
                                    rotateZ: gameResult.diagonal === "MAIN" ? "-45deg" : "45deg"
                                }
                            ]
                        }
                    ]}
                ></View>
            )}
        </>
    );
}
