import React, { ReactElement } from "react";
import { View, Text } from "react-native";
import { BoardResult } from "@utils";

type BoardLineProps = {
    size: number;
    gameResult?: BoardResult | false;
};

export default function BoardLine({ size, gameResult }: BoardLineProps): ReactElement {
    return (
        <>
            {gameResult && gameResult.column && gameResult.direction === "V" && <View></View>}
            {gameResult && gameResult.row && gameResult.direction === "H" && <View></View>}
            {gameResult && gameResult.diagonal && gameResult.direction === "D" && <View></View>}
        </>
    );
}
