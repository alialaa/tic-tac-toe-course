import React, { ReactElement } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Home, Game } from "@screens";

export type StackNavigatorParams = {
    Home: undefined;
    Game: { gameId: string };
};

const Stack = createStackNavigator<StackNavigatorParams>();

export default function Navigator(): ReactElement {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Game" component={Game} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
