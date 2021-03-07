import React, { Component, ReactElement } from "react";
import { View, ScrollView, Image } from "react-native";
import styles from "./home.styles";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackNavigatorParams } from "@config/navigator";
import { GradientBackground, Button, Text } from "@Components";
import { useAuth } from "@contexts/auth-context";

type HomeProps = {
    navigation: StackNavigationProp<StackNavigatorParams, "Home">;
};

export default function Home({ navigation }: HomeProps): ReactElement {
    const {user} = useAuth();
    return (
        <GradientBackground>
            <ScrollView contentContainerStyle={styles.container}>
                <Image style={styles.logo} source={require("@assets/logo.png")} />
                <View style={styles.buttons}>
                    <Button
                        onPress={() => {
                            navigation.navigate("SinglePlayerGame");
                        }}
                        style={styles.button}
                        title="Single Player"
                    />
                    <Button style={styles.button} title="Multiplayer" />
                    <Button
                        onPress={() => {
                            if(user){

                            } else {
                                navigation.navigate("Login");    
                            }
                            
                        }}
                        style={styles.button}
                        title={user ? "Logout": "Login"}
                    />
                    <Button
                        onPress={() => {
                            navigation.navigate("Settings");
                        }}
                        style={styles.button}
                        title="Settings"
                    />

                    {user && 
                        <Text weight="400" style={styles.loggedInText}>
                            Logged in as <Text weight="700">{ user.username }</Text>
                        </Text>
                    }
                </View>
            </ScrollView>
        </GradientBackground>
    );
}
