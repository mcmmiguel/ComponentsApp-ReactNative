import React, { useContext, useState } from 'react';
import { Switch, Platform } from 'react-native';
import { CustomSwitchProps } from '../interfaces';
import { ThemeContext } from '../context';

export const CustomSwitch = ({ isOn, onChange }: CustomSwitchProps) => {

    const [isEnabled, setIsEnabled] = useState(isOn);
    const { theme: { colors } } = useContext(ThemeContext);

    const toggleSwitch = () => {
        setIsEnabled(!isEnabled);
        onChange(!isEnabled);
    };

    return (
        <Switch
            trackColor={{ false: '#d9d9db', true: colors.primary }}
            thumbColor={Platform.OS === 'android' ? colors.primary : ''}
            onValueChange={toggleSwitch}
            value={isEnabled}
        />
    );
};
