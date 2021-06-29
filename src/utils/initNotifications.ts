import * as Notifications from "expo-notifications";
import Constants from "expo-constants";
import { Platform } from "react-native";

const initNotifications = async (): Promise<void> => {
    if (Constants.isDevice) {
        const { status: existingStatus } = await Notifications.getPermissionsAsync();
        let finalStatus = existingStatus;

        if (existingStatus !== "granted") {
            const { status } = await Notifications.requestPermissionsAsync();
            finalStatus = status;
        }

        if (finalStatus !== "granted") {
            return;
        }

        const tokenRes = await Notifications.getExpoPushTokenAsync();
        console.log("tokenRes: ", tokenRes);

        if (Platform.OS === "android") {
            Notifications.setNotificationChannelAsync("default", {
                name: "default",
                importance: Notifications.AndroidImportance.MAX
            });
        }
    }
};

export default initNotifications;
