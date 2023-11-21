import { ThemeState } from '../interfaces';

type ThemeAction =
    | { type: 'set_light_Theme' }
    | { type: 'set_dark_Theme' }



export const lightTheme: ThemeState = {
    currentTheme: 'light',
    dark: false,
    dividerColor: 'rgba(0, 0, 0, 0.6)',
    colors: {
        primary: '#084f6a',
        background: 'white',
        card: 'white',
        text: 'black',
        border: 'black',
        notification: 'teal',
    },
};

export const darkTheme: ThemeState = {
    currentTheme: 'dark',
    dark: true,
    dividerColor: 'rgba(255, 255, 255, 0.6)',
    colors: {
        primary: '#75cedb',
        background: 'black',
        card: 'black',
        text: 'white',
        border: 'black',
        notification: 'teal',
    },
};

export const themeReducer = (state: ThemeState, action: ThemeAction): ThemeState => {

    switch (action.type) {
        case 'set_light_Theme':
            return { ...lightTheme };
        case 'set_dark_Theme':
            return { ...darkTheme };
        default:
            return state;
    }

};
