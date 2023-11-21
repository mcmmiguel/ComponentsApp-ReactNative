import React, { createContext, useReducer } from 'react';
import { ThemeContextProps } from '../interfaces';
import { lightTheme, themeReducer } from './themeReducer';

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({ children }: any) => {

    const [theme, dispatch] = useReducer(themeReducer, lightTheme);

    const setDarkTheme = () => {
        dispatch({ type: 'set_dark_Theme' });
        console.log('Dark theme');
    };

    const setLightTheme = () => {
        dispatch({ type: 'set_light_Theme' });
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
