import { StyleSheet } from "react-native";
import { globalStyles, colors } from "@utils";

const styles = StyleSheet.create({
    container: {
        ...globalStyles.container
    },
    item: {
        backgroundColor: colors.purple,
        padding: 15,
        borderTopWidth: 1,
        borderColor: colors.lightPurple,
        marginBottom: 20
    },
    itemTitle: {
        color: colors.lightGreen,
        textAlign: "center",
        fontSize: 17,
        marginBottom: 10
    },
    loading: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    newGameButton: {
        backgroundColor: colors.lightPurple,
        padding: 20,
        paddingBottom: 30
    },
    newGameButtonText: {
        color: colors.lightGreen,
        textAlign: "center",
        fontSize: 17
    }
});

export default styles;
