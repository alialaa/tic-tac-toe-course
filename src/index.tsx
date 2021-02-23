import React, { ReactElement } from "react";
import { AppBootstrap } from "@Components";
import Navigator from "@config/navigator";
import {SettingsProvider} from "@contexts/settings-context";

export default function App(): ReactElement {
    return (
        <AppBootstrap>
            <SettingsProvider value={{
                settings: {
                    sounds: true
                }
            }}>
            <Navigator />
            </SettingsProvider>
        </AppBootstrap>
    );
}
