import React, { createContext, useEffect, useReducer } from 'react';
import { useColorScheme, AppState, Appearance } from 'react-native';
import { ThemeContextProps } from '../interfaces';
import { darkTheme, lightTheme, themeReducer } from './themeReducer';

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({ children }: any) => {

    // const colorScheme = useColorScheme();
    const [theme, dispatch] = useReducer(
        themeReducer,
        (Appearance.getColorScheme() === 'dark') ? darkTheme : lightTheme
    );

    useEffect(() => {
        AppState.addEventListener('change', (status) => {
            if (status === 'active') {
                (Appearance.getColorScheme() === 'light')
                    ? setLightTheme()
                    : setDarkTheme();
            }
        });
    }, []);

    // Solo iOS
    // useEffect(() => {
    //     (colorScheme === 'light')
    //     ? setLightTheme()
    //     : setDarkTheme();
    // }, [colorScheme]);

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
