import React, { ReactElement, useEffect, useState, useRef } from "react";
import {
    View,
    Dimensions,
    Alert,
    TextInput as NativeTextInput,
    FlatList,
    ActivityIndicator
} from "react-native";
import { API, graphqlOperation } from "aws-amplify";

import { GraphQLResult } from "@aws-amplify/api";
import { searchPlayersQuery } from "@api";
import { GradientBackground, Text, TextInput } from "@components";
import { searchPlayers } from "../multiplayer-home.graphql";
import { colors } from "@utils";
import { TouchableOpacity } from "react-native-gesture-handler";

const SCREEN_HEIGHT = Dimensions.get("screen").height;

type PlayesListType = Exclude<searchPlayersQuery["searchPlayers"], null>["items"];

export default function PlayersModal(): ReactElement {
    const [players, setPlayers] = useState<PlayesListType>(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [loading, setLoading] = useState(false);
    const [submittedQuery, setSubmittedQuery] = useState("");

    const inputRef = useRef<NativeTextInput | null>(null);

    const fetchPlayers = async (searchString: string) => {
        setLoading(true);
        setSubmittedQuery(searchString);
        try {
            const players = (await API.graphql(
                graphqlOperation(searchPlayers, {
                    limit: 10,
                    searchString: searchString
                })
            )) as GraphQLResult<searchPlayersQuery>;
            if (players.data?.searchPlayers) {
                setPlayers(players.data.searchPlayers.items);
            }
        } catch (error) {
            Alert.alert("Error!", "An error has occurred. Please try again later!");
        }
        setLoading(false);
    };

    useEffect(() => {
        setTimeout(() => {
            inputRef.current?.focus();
        }, 150);
    }, []);

    return (
        <View
            style={{
                height: SCREEN_HEIGHT * 0.6,
                marginTop: SCREEN_HEIGHT * 0.4
            }}
        >
            <GradientBackground>
                <View style={{ padding: 20, backgroundColor: colors.purple }}>
                    <TextInput
                        value={searchQuery}
                        onChangeText={text => setSearchQuery(text)}
                        onSubmitEditing={() => fetchPlayers(searchQuery)}
                        ref={inputRef}
                        style={{ borderBottomWidth: 0, backgroundColor: colors.darkPurple }}
                        placeholder="Type to search by username or name."
                        returnKeyType="search"
                    />
                </View>
                <View style={{ flex: 1 }}>
                    {loading ? (
                        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                            <ActivityIndicator color={colors.lightGreen} />
                        </View>
                    ) : (
                        <FlatList
                            data={players}
                            renderItem={({ item }) => {
                                return (
                                    <TouchableOpacity>
                                        <Text style={{ color: colors.lightGreen }}>
                                            {" "}
                                            {item?.name}{" "}
                                        </Text>
                                        <Text style={{ color: colors.lightGreen }}>
                                            {" "}
                                            {item?.username}{" "}
                                        </Text>
                                    </TouchableOpacity>
                                );
                            }}
                            keyExtractor={player => player?.username || `${new Date().getTime()}`}
                            ListEmptyComponent={() => {
                                return (
                                    <View>
                                        <Text style={{ color: colors.lightGreen }}>
                                            {submittedQuery
                                                ? "No results found!"
                                                : "Type to search by name or username!"}
                                        </Text>
                                    </View>
                                );
                            }}
                        />
                    )}
                </View>
            </GradientBackground>
        </View>
    );
}
