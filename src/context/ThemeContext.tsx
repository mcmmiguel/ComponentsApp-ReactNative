import React, { createContext } from 'react';

export interface ThemeContextProps {
    theme: any;
    setDarkTheme: () => void;
    setLightTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({ children }: any) => {

    const theme = {};

    const setDarkTheme = () => {
        console.log('Dark theme');
    };

    const setLightTheme = () => {
        console.log('Light theme');
    };

    return (
        <ThemeContext.Provider value={{
            theme,
            setDarkTheme,
            setLightTheme,
        }}>
            {children}
        </ThemeContext.Provider>
    );
};
