import React, { ReactElement } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, StackNavigationOptions } from "@react-navigation/stack";
import {
    Home,
    SinglePlayerGame,
    Settings,
    Login,
    SignUp,
    ChangePassword,
    ForgotPassword,
    MultiplayerHome
} from "@screens";
import { colors } from "@utils";

export type StackNavigatorParams = {
    Home: undefined;
    SinglePlayerGame: undefined;
    Settings: undefined;
    Login: { redirect: keyof StackNavigatorParams } | undefined;
    SignUp: { username: string } | undefined;
    ChangePassword: undefined;
    ForgotPassword: undefined;
    MultiplayerHome: undefined;
};

const Stack = createStackNavigator<StackNavigatorParams>();

const navigatorOptions: StackNavigationOptions = {
    headerStyle: {
        backgroundColor: colors.purple,
        shadowRadius: 0,
        shadowOffset: {
            height: 0,
            width: 0
        }
    },
    headerTintColor: colors.lightGreen,
    headerTitleStyle: {
        fontFamily: "DeliusUnicase_700Bold",
        fontSize: 20
    },
    headerBackTitleStyle: {
        fontFamily: "DeliusUnicase_400Regular",
        fontSize: 14
    }
};

export default function Navigator(): ReactElement {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={navigatorOptions}>
                <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                <Stack.Screen
                    name="SinglePlayerGame"
                    component={SinglePlayerGame}
                    options={{ headerShown: false }}
                />
                <Stack.Screen name="Settings" component={Settings} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="SignUp" component={SignUp} options={{ title: "Sign-Up" }} />
                <Stack.Screen
                    name="ChangePassword"
                    options={{ title: "Change Password" }}
                    component={ChangePassword}
                />
                <Stack.Screen
                    name="ForgotPassword"
                    options={{ title: "Forgot Password" }}
                    component={ForgotPassword}
                />
                <Stack.Screen
                    name="MultiplayerHome"
                    options={{ title: "Multiplayer" }}
                    component={MultiplayerHome}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
