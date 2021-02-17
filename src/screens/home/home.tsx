import React, { Component, ReactElement } from "react";
import { View, ScrollView, Image } from "react-native";
import styles from "./home.styles";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackNavigatorParams } from "@config/navigator";
import { GradientBackground, Button } from "@Components";

type HomeProps = {
    navigation: StackNavigationProp<StackNavigatorParams, "Home">;
};

export default function Home({ navigation }: HomeProps): ReactElement {
    return (
        <GradientBackground>
            <ScrollView contentContainerStyle={styles.container}>
                <Image style={styles.logo} source={require("@assets/logo.png")} />
                <View style={styles.buttons}>
                    <Button
                        onPress={() => {
                            navigation.navigate("SinglePlayerGame");
                        }}
                        style={styles.buttons}
                        title="Single Player"
                    />
                    <Button style={styles.buttons} title="Multiplayer" />
                    <Button style={styles.buttons} title="Login" />
                    <Button style={styles.buttons} title="Settings" />
                </View>
            </ScrollView>
        </GradientBackground>
    );
}
