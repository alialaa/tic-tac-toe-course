import React, { ReactElement, ReactNode, useState, useEffect } from "react";
import {
    useFonts,
    DeliusUnicase_400Regular,
    DeliusUnicase_700Bold
} from "@expo-google-fonts/delius-unicase";
import { AppLoading } from "expo";
import { Auth } from "aws-amplify";

type AppBootstrapProps = {
    children: ReactNode;
};

export default function AppBootstrap({ children }: AppBootstrapProps): ReactElement {
    const [fontLoaded] = useFonts({
        DeliusUnicase_400Regular,
        DeliusUnicase_700Bold
    });
    const [authLoaded, setAuthLoaded] = useState(false);

    useEffect(() => {
        async function checkCurrentUser() {
            try {
                const user = await Auth.currentAuthenticatedUser();
                console.log(user);
            } catch (error) {
                console.log(error);
            }
            setAuthLoaded(true);
        }

        checkCurrentUser();
    }, []);
    return fontLoaded && authLoaded ? <>{children}</> : <AppLoading />;
}
