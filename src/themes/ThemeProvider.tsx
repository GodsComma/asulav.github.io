import React from "react";
import { ReactNode, useState } from "react";
import { DarkThemeConfigMap } from "themes/darkTheme";
import { LightThemeConfigMap } from "themes/lightTheme";
import { NatureThemeConfigMap } from "./natureTheme";

type ThemeTypeProps = 'DARK' | 'LIGHT' | 'NATURE';

type ThemeProviderProps = {
    themeType: ThemeTypeProps;
    children : ReactNode;
};

const ThemeConfigMap = {
    DARK: DarkThemeConfigMap,
    LIGHT: LightThemeConfigMap,
    NATURE: NatureThemeConfigMap
};

const InitialContext = {
    theme: ThemeConfigMap['DARK'],
    updateTheme: (theme: ThemeTypeProps ) => {}
}

export const ThemeContext = React.createContext({...InitialContext});

const ThemeProvider = ( { themeType = 'DARK', children } : ThemeProviderProps) => {

    const [ theme, setTheme ] = useState(ThemeConfigMap[themeType]);

    const updateTheme = (themeType: ThemeTypeProps) => {
        setTheme(ThemeConfigMap[themeType]);
    }

    return (
        <ThemeContext.Provider value={{theme, updateTheme}}>
        { children }
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;