import React, { ReactElement } from "react";
import { View, TouchableOpacity } from "react-native";
import Text from "../text/text";
import { BoardState, BoardResult } from "@utils";
import BoardLine from "./board-line";
import styles from "./board.styles";

type BoardProps = {
    state: BoardState;
    size: number;
    disabled?: boolean;
    gameResult?: BoardResult | false;
    onCellPressed?: (index: number) => void;
};

export default function Board({
    state,
    disabled,
    size,
    gameResult,
    onCellPressed
}: BoardProps): ReactElement {
    return (
        <View
            style={[
                styles.board,
                {
                    width: size,
                    height: size
                }
            ]}
        >
            {state.map((cell, index) => {
                return (
                    <TouchableOpacity
                        disabled={cell !== null || disabled}
                        onPress={() => onCellPressed && onCellPressed(index)}
                        style={[styles.cell, styles[`cell${index}` as "cell"]]}
                        key={index}
                    >
                        <Text
                            style={[
                                styles.cellText,
                                {
                                    fontSize: size / 7
                                }
                            ]}
                        >
                            {cell}
                        </Text>
                    </TouchableOpacity>
                );
            })}
            {gameResult && <BoardLine size={size} gameResult={gameResult} />}
        </View>
    );
}
