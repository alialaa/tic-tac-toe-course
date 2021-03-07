import React, { ReactElement, useRef } from "react";
import { ScrollView, TextInput as NativeTextInput } from "react-native";
import { GradientBackground, TextInput } from "@Components";
import styles from "./login.styles";

export default function Login(): ReactElement {
    const passwordRef = useRef<NativeTextInput | null>(null);
    return (
        <GradientBackground>
            <ScrollView contentContainerStyle={styles.container}>
                <TextInput
                    returnKeyType="next"
                    placeholder="Username"
                    style={{ marginBottom: 20 }}
                    onSubmitEditing={() => {
                        passwordRef.current?.focus();
                    }}
                />
                <TextInput
                    ref={passwordRef}
                    returnKeyType="done"
                    secureTextEntry
                    placeholder="Password"
                />
            </ScrollView>
        </GradientBackground>
    );
}
