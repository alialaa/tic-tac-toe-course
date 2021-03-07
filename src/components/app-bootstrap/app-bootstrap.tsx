import React, {
    ReactElement,
    ReactNode,
    useState,
    useEffect
} from "react";
import {
    useFonts,
    DeliusUnicase_400Regular,
    DeliusUnicase_700Bold
} from "@expo-google-fonts/delius-unicase";
import { AppLoading } from "expo";
import { Auth } from "aws-amplify";
import { useAuth } from "@contexts/auth-context";

type AppBootstrapProps = {
    children: ReactNode;
};

export default function AppBootstrap({ children }: AppBootstrapProps): ReactElement {
    const [fontLoaded] = useFonts({
        DeliusUnicase_400Regular,
        DeliusUnicase_700Bold
    });
    const [authLoaded, setAuthLoaded] = useState(false);
    const {setUser} = useAuth();

    useEffect(() => {
        async function checkCurrentUser() {
            try {
                const user = await Auth.currentAuthenticatedUser();
                setUser(user);
            } catch (error) {
                setUser(null);
            }
            setAuthLoaded(true);
        }

        checkCurrentUser();
    }, []);
    return fontLoaded && authLoaded ? (
        <>
            {children}
            </>
       
    ) : (
        <AppLoading />
    );
}
