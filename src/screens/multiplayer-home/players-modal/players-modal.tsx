import React, { ReactElement } from "react";
import { View, Dimensions } from "react-native";

import { GradientBackground, Text } from "@components";

const SCREEN_HEIGHT = Dimensions.get("screen").height;

export default function PlayersModal(): ReactElement {
    return (
        <View
            style={{
                height: SCREEN_HEIGHT * 0.6,
                marginTop: SCREEN_HEIGHT * 0.4
            }}
        >
            <GradientBackground>
                <Text>Hello</Text>
            </GradientBackground>
        </View>
    );
}
