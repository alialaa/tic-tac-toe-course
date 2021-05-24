import { StyleSheet } from "react-native";
import { colors, globalStyles } from "@utils";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        marginTop: 80
    },
    modal: {
        position: "absolute",
        backgroundColor: colors.lightPurple,
        bottom: 40,
        left: 30,
        right: 30,
        padding: 30,
        borderWidth: 3,
        borderColor: colors.lightGreen
    },
    modalText: {
        color: colors.lightGreen,
        fontSize: 28,
        textAlign: "center",
        marginBottom: 30
    }
});

export default styles;
