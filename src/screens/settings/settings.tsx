import React, { ReactElement, useState, useEffect } from "react";
import { ScrollView, View, TouchableOpacity, Switch, Alert } from "react-native";
import { GradientBackground, Text } from "@Components";
import styles from "./settings.styles";
import { colors } from "@utils";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useSettings} from "@contexts/settings-context";

const difficulties = {
    "1": "Beginner",
    "3": "Intermediate",
    "4": "Hard",
    "-1": "Impossible"
};

type SettingsType = {
    difficulty: keyof typeof difficulties;
    haptics: boolean;
    sounds: boolean;
};

const defaultSettings: SettingsType = {
    difficulty: "-1",
    haptics: true,
    sounds: true
};

export default function Settings(): ReactElement | null {
    const [settings, setSettings] = useState<SettingsType | null>(null);
    const context = useSettings();
    console.log(context);
    const saveSetting = async <T extends keyof SettingsType>(
        setting: T,
        value: SettingsType[T]
    ) => {
        try {
            const oldSettings = settings ? settings : defaultSettings;
            const newSettings = { ...oldSettings, [setting]: value };
            const jsonSettigns = JSON.stringify(newSettings);
            await AsyncStorage.setItem("@settigns", jsonSettigns);
            setSettings(newSettings);
        } catch (error) {
            Alert.alert("Error!", "An error has occurred!");
        }
    };

    const loadSettings = async () => {
        try {
            const settings = await AsyncStorage.getItem("@settings");
            settings !== null ? setSettings(JSON.parse(settings)) : setSettings(defaultSettings);
        } catch (error) {
            setSettings(defaultSettings);
        }
    };
    useEffect(() => {
        loadSettings();
    }, []);

    if (!settings) return null;
    return (
        <GradientBackground>
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.field}>
                    <Text style={styles.label}>Bot Difficulty </Text>
                    <View style={styles.choices}>
                        {Object.keys(difficulties).map(level => {
                            return (
                                <TouchableOpacity
                                    onPress={() => {
                                        saveSetting(
                                            "difficulty",
                                            level as keyof typeof difficulties
                                        );
                                    }}
                                    style={[
                                        styles.choice,
                                        {
                                            backgroundColor:
                                                settings.difficulty === level
                                                    ? colors.lightPurple
                                                    : colors.lightGreen
                                        }
                                    ]}
                                    key={level}
                                >
                                    <Text
                                        style={[
                                            styles.choiceText,
                                            {
                                                color:
                                                    settings.difficulty === level
                                                        ? colors.lightGreen
                                                        : colors.darkPurple
                                            }
                                        ]}
                                    >
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
                        value={settings.sounds}
                        onValueChange={() => {
                            saveSetting("sounds", !settings.sounds);
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
                        value={settings.haptics}
                        onValueChange={() => {
                            saveSetting("haptics", !settings.haptics);
                        }}
                    />
                </View>
            </ScrollView>
        </GradientBackground>
    );
}
