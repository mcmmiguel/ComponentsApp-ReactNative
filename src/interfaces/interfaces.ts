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

