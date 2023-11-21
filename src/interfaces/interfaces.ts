import { Theme } from '@react-navigation/native';
import { ImageStyle, StyleProp, ImageSourcePropType } from 'react-native';
export interface MenuItemProps {
    name: string;
    icon: string;
    component: string;
}

export interface FlatListMenuItemProps {
    menuItem: MenuItemProps;
}

export interface HeaderTitleProps {
    title: string;
}

export interface CustomSwitchProps {
    isOn: boolean;
    onChange: (isEnabled: boolean) => void;
}

export interface FadeInImageProps {
    uri: string;
    style?: StyleProp<ImageStyle>;
}

export interface Slide {
    title: string;
    desc: string;
    img: ImageSourcePropType
}

export interface ThemeContextProps {
    theme: ThemeState;
    setDarkTheme: () => void;
    setLightTheme: () => void;
}
export interface ThemeState extends Theme {
    currentTheme: 'light' | 'dark';
    dividerColor: string;
}
