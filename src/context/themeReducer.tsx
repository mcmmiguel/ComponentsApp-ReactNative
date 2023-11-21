import { ThemeState } from '../interfaces';

type ThemeAction =
    | { type: 'set_light_Theme' }
    | { type: 'set_dark_Theme' }



const lightTheme: ThemeState = {
    currentTheme: 'light',
    dark: false,
    dividerColor: 'rgba(0, 0, 0, 0.7)',
    colors: {
        primary: 'red',
        background: 'blue',
        card: 'green',
        text: 'pink',
        border: 'orange',
        notification: 'yellow',
    },
};

export const themeReducer = (state: ThemeState, action: ThemeAction): ThemeState => {

    switch (action.type) {
        case 'set_light_Theme':
            return { ...lightTheme };
        default:
            return state;
    }

};
