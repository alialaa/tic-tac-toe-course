import React, { ReactElement, useRef, useState } from "react";
import { ScrollView, TextInput as NativeTextInput, Alert, TouchableOpacity } from "react-native";
import { GradientBackground, TextInput, Button, Text } from "@components";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackNavigatorParams } from "@config/navigator";
import { Auth } from "aws-amplify";
import styles from "./login.styles";
import { RouteProp } from "@react-navigation/native";

type LoginProps = {
    navigation: StackNavigationProp<StackNavigatorParams, "Login">;
    route: RouteProp<StackNavigatorParams, "Login">;
};

export default function Login({ navigation, route }: LoginProps): ReactElement {
    const redirect = route.params?.redirect;
    const passwordRef = useRef<NativeTextInput | null>(null);
    const [form, setForm] = useState({
        username: "test",
        password: "12345678"
    });
    const [loading, setLoading] = useState(false);
    const setFormInput = (key: keyof typeof form, Value: string) => {
        setForm({ ...form, [key]: Value });
    };

    const login = async () => {
        setLoading(true);
        const { username, password } = form;
        try {
            await Auth.signIn(username, password);
            // navigation.navigate("Home");
            redirect ? navigation.replace(redirect) : navigation.navigate("Home");
        } catch (error) {
            if (error.code === "UserNotConfirmedException") {
                navigation.navigate("SignUp", { username });
            } else {
                Alert.alert("Error!", error.message || "An error has occured");
            }
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
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate("ForgotPassword");
                    }}
                >
                    <Text style={styles.forgotPasswordLink}>Forgot Password?</Text>
                </TouchableOpacity>
                <Button loading={loading} title="Login" onPress={login} />

                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate("SignUp");
                    }}
                >
                    <Text style={styles.registerLink}> Don&apos;t have an account? </Text>
                </TouchableOpacity>
            </ScrollView>
        </GradientBackground>
    );
}
