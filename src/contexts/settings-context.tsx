import React, {
    createContext,
    useContext,
} from "react";


const SettingsContext = createContext({
    settings: {
        sounds: true
    }
})

function useSettings() {
    const context = useContext(SettingsContext);
    if (!context) {
        throw new Error("useSettings must be used within a SettingsProvider.");
    }
    return context;
}

function SettingsProvider(props) {
    return (
        <SettingsContext.Provider {...props} value = {{ settings: {
            sounds: true
        } }}
    />
    );
}

export { useSettings, SettingsProvider };
