import React, { createContext, useContext, useState, ReactNode } from "react";

interface ThemeContextType {
    themeMode: string;
    darkTheme: () => void;
    lightTheme: () => void;
    greenGoblinTheme: () => void;
    ubuntuTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
    themeMode: "light",
    darkTheme: () => { },
    lightTheme: () => { },
    greenGoblinTheme: () => { },
    ubuntuTheme: () => { }
});

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [themeMode, setThemeMode] = useState<string>("light");

    const darkTheme = () => {
        setThemeMode("dark");
        document.documentElement.classList.remove("light", "green-goblin", "ubuntu");
        document.documentElement.classList.add("dark");
    };

    const lightTheme = () => {
        setThemeMode("light");
        document.documentElement.classList.remove("dark", "green-goblin", "ubuntu");
        document.documentElement.classList.add("light");
    };

    const greenGoblinTheme = () => {
        setThemeMode("green-goblin");
        document.documentElement.classList.remove("dark", "light", "ubuntu");
        document.documentElement.classList.add("green-goblin");
    };

    const ubuntuTheme = () => {
        setThemeMode("ubuntu");
        document.documentElement.classList.remove("dark", "light", "green-goblin");
        document.documentElement.classList.add("ubuntu");
    };

    return (
        <ThemeContext.Provider value={{ themeMode, darkTheme, lightTheme, greenGoblinTheme, ubuntuTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export function useTheme() {
    return useContext(ThemeContext);
}
