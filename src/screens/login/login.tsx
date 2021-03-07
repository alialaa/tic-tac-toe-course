import React, { ReactElement, useRef, useState } from "react";
import { ScrollView, TextInput as NativeTextInput, Alert } from "react-native";
import { GradientBackground, TextInput, Button } from "@Components";
import { Auth } from "aws-amplify";
import styles from "./login.styles";
import { Value } from "react-native-reanimated";

export default function Login(): ReactElement {
    const passwordRef = useRef<NativeTextInput | null>(null);
    const [form, setForm] = useState({
        username: "",
        password: ""
    });
    const [loading, setLoading] = useState(false);
    const setFormInput = (key: keyof typeof form, Value: string) => {
        setForm({ ...form, [key]: Value });
    };

    const login = async () => {
        setLoading(true);
        const { username, password } = form;
        try {
            const res = await Auth.signIn(username, password);
            console.log(res);
        } catch (error) {
            console.log(error);
            Alert.alert("Error!", error.message || "An error has occured");
        }
        setLoading(false);
    };
    return (
        <GradientBackground>
            <ScrollView contentContainerStyle={styles.container}>
                <TextInput
                    value={form.username}
                    onChangeText={Value => {
                        setFormInput("username", Value);
                    }}
                    returnKeyType="next"
                    placeholder="Username"
                    style={{ marginBottom: 20 }}
                    onSubmitEditing={() => {
                        passwordRef.current?.focus();
                    }}
                />
                <TextInput
                    value={form.password}
                    onChangeText={Value => {
                        setFormInput("password", Value);
                    }}
                    style={{ marginBottom: 30 }}
                    ref={passwordRef}
                    returnKeyType="done"
                    secureTextEntry
                    placeholder="Password"
                />
                <Button loading={loading} title="Login" onPress={login} />
            </ScrollView>
        </GradientBackground>
    );
}
