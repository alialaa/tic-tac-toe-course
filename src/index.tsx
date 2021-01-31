import React from "react";
import { StyleSheet, View } from "react-native";
import {
    useFonts,
    DeliusUnicase_400Regular,
    DeliusUnicase_700Bold
} from "@expo-google-fonts/delius-unicase";
import { AppLoading } from "expo";
import { Text } from "@Components";

export default function App() {
    const [fontLoaded] = useFonts({
        DeliusUnicase_400Regular,
        DeliusUnicase_700Bold
    });
    if (!fontLoaded) return <AppLoading />;
    return (
        <View style={styles.container}>
            <Text
                onPress={() => {
                    alert(true);
                }}
                style={{ fontSize: 25 }}
                weight="400"
            >
                mkllkm <Text weight="700">ttalkokkmf</Text>
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    }
});
