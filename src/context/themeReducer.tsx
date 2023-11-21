import { ThemeState } from '../interfaces';

type ThemeAction =
    | { type: 'set_light_Theme' }
    | { type: 'set_dark_Theme' }



export const lightTheme: ThemeState = {
    currentTheme: 'light',
    dark: false,
    dividerColor: 'rgba(0, 0, 0, 0.7)',
    colors: {
        primary: '#084f6a',
        background: 'white',
        card: 'green',
        text: 'black',
        border: 'orange',
        notification: 'yellow',
    },
};

export const darkTheme: ThemeState = {
    currentTheme: 'dark',
    dark: true,
    dividerColor: 'rgba(0, 0, 0, 0.7)',
    colors: {
        primary: '#75cedb',
        background: 'black',
        card: 'green',
        text: 'white',
        border: 'orange',
        notification: 'yellow',
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
