import { colors } from "@utils";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingVertical: 40
    },

    registerLink: {
        color: colors.lightGreen,
        textAlign: "center",
        marginTop: 20,
        textDecorationLine: "underline"
    },

    forgotPasswordLink: {
        color: colors.lightGreen,
        textAlign: "right",
        fontSize: 12,
        marginTop: -15,
        marginBottom: 30,
        textDecorationLine: "underline"
    }
});

export default styles;
