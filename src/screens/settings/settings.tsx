import React, { ReactElement, useState } from "react";
import { ScrollView, View, TouchableOpacity, Switch } from "react-native";
import { GradientBackground, Text } from "@Components";
import styles from "./settings.styles";
import { colors } from "@utils";

export default function Settings(): ReactElement {
    const [state, setState] = useState(false);
    const difficulties = {
        "1": "Beginner",
        "3": "Intermediate",
        "4": "Hard",
        "-1": "Impossible"
    };
    return (
        <GradientBackground>
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.field}>
                    <Text style={styles.label}>Bot Difficulty </Text>
                    <View style={styles.choices}>
                        {Object.keys(difficulties).map(level => {
                            return (
                                <TouchableOpacity style={styles.choice} key={level}>
                                    <Text style={styles.choiceText}>
                                        {difficulties[level as keyof typeof difficulties]}
                                    </Text>
                                </TouchableOpacity>
                            );
                        })}
                    </View>
                </View>
                <View style={[styles.field, styles.switchField]}>
                    <Text style={styles.label}>Sounds</Text>
                    <Switch
                        trackColor={{
                            false: colors.purple,
                            true: colors.lightPurple
                        }}
                        thumbColor={colors.lightGreen}
                        ios_backgroundColor={colors.purple}
                        value={state}
                        onValueChange={() => {
                            setState(!state);
                        }}
                    />
                </View>
                <View style={[styles.field, styles.switchField]}>
                    <Text style={styles.label}>Haptics/Vibrations</Text>
                    <Switch
                        trackColor={{
                            false: colors.purple,
                            true: colors.lightPurple
                        }}
                        thumbColor={colors.lightGreen}
                        ios_backgroundColor={colors.purple}
                        value={state}
                        onValueChange={() => {
                            setState(!state);
                        }}
                    />
                </View>
            </ScrollView>
        </GradientBackground>
    );
}
