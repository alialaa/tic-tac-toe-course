import React, { ReactElement, useRef, useState } from "react";
import {
    ScrollView,
    TextInput as NativeTextInput,
    Alert,
    KeyboardAvoidingView,
    Platform,
    ActivityIndicator
} from "react-native";
import { GradientBackground, TextInput, Button, Text } from "@components";
import { StackNavigationProp, useHeaderHeight } from "@react-navigation/stack";
import { StackNavigatorParams } from "@config/navigator";
import { Auth } from "aws-amplify";
import OTPInput from "@twotalltotems/react-native-otp-input";
import styles from "./signup.styles";
import { colors } from "@utils";
type SignUpProps = {
    navigation: StackNavigationProp<StackNavigatorParams, "SignUp">;
};
export default function SiginUp({ navigation }: SignUpProps): ReactElement {
    const headerHeight = useHeaderHeight();
    const passwordRef = useRef<NativeTextInput | null>(null);
    const emailRef = useRef<NativeTextInput | null>(null);
    const nameRef = useRef<NativeTextInput | null>(null);
    const [form, setForm] = useState({
        username: "test",
        email: "arnav.6@egzones.com",
        name: "Test Name",
        password: "12345678"
    });
    const [loading, setLoading] = useState(false);
    const [step, setStep] = useState<"signUp" | "otp">("signUp");
    const [confirming, setConfirming] = useState(false);
    const setFormInput = (key: keyof typeof form, Value: string) => {
        setForm({ ...form, [key]: Value });
    };
    const signUp = async () => {
        setLoading(true);
        const { username, password, email, name } = form;
        try {
            await Auth.signUp({
                username,
                password,
                attributes: {
                    email,
                    name
                }
            });
            setStep("otp");
        } catch (error) {
            Alert.alert("Error!", error.message || "An error has occured");
        }
        setLoading(false);
    };
    const confirmCode = async (code: string) => {
        setConfirming(true);
        try {
            await Auth.confirmSignUp(form.username, code);
            navigation.navigate("Login");
            Alert.alert("Success", "You can now login with your account");
        } catch (error) {
            Alert.alert("Error!", error.message || "An error has occured");
        }
        setConfirming(false);
    };
    return (
        <GradientBackground>
            <KeyboardAvoidingView
                keyboardVerticalOffset={headerHeight}
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={{ flex: 1 }}
            >
                <ScrollView contentContainerStyle={styles.container}>
                    {step === "otp" && (
                        <>
                            <Text style={styles.otpText}>
                                Enter the code that you received via email.
                            </Text>
                            {confirming ? (
                                <ActivityIndicator color={colors.lightGreen} />
                            ) : (
                                <OTPInput
                                    placeholderCharacter="0"
                                    placeholderTextColor="#5d5379"
                                    pinCount={6}
                                    codeInputFieldStyle={styles.otpInputBox}
                                    codeInputHighlightStyle={styles.otpActiveInputBox}
                                    onCodeFilled={code => {
                                        confirmCode(code);
                                    }}
                                />
                            )}
                        </>
                    )}
                    {step === "signUp" && (
                        <>
                            <TextInput
                                value={form.username}
                                onChangeText={Value => {
                                    setFormInput("username", Value);
                                }}
                                returnKeyType="next"
                                placeholder="Username"
                                style={{ marginBottom: 20 }}
                                onSubmitEditing={() => {
                                    emailRef.current?.focus();
                                }}
                            />
                            <TextInput
                                ref={nameRef}
                                value={form.name}
                                onChangeText={Value => {
                                    setFormInput("name", Value);
                                }}
                                returnKeyType="next"
                                placeholder="Name"
                                style={{ marginBottom: 20 }}
                                onSubmitEditing={() => {
                                    emailRef.current?.focus();
                                }}
                            />
                            <TextInput
                                keyboardType="email-address"
                                ref={emailRef}
                                value={form.email}
                                onChangeText={Value => {
                                    setFormInput("email", Value);
                                }}
                                returnKeyType="next"
                                placeholder="Email"
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
                            <Button loading={loading} title="Sign-Up" onPress={signUp} />
                        </>
                    )}
                </ScrollView>
            </KeyboardAvoidingView>
        </GradientBackground>
    );
}
