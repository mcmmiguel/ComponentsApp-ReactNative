import React, { useState } from 'react';
import { Switch, Platform } from 'react-native';
import { CustomSwitchProps } from '../interfaces';

export const CustomSwitch = ({ isOn, onChange }: CustomSwitchProps) => {

    const [isEnabled, setIsEnabled] = useState(isOn);

    const toggleSwitch = () => {
        setIsEnabled(!isEnabled);
        onChange(!isEnabled);
    };

    return (
        <Switch
            trackColor={{ false: '#d9d9db', true: '#5856d6' }}
            thumbColor={Platform.OS === 'android' ? '#5856d6' : ''}
            onValueChange={toggleSwitch}
            value={isEnabled}
        />
    );
};
