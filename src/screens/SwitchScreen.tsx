import React, { useState } from 'react';
import { View, StyleSheet, Switch, Platform } from 'react-native';
import { HeaderTitle } from '../components';
import { appTheme } from '../theme/appTheme';

export const SwitchScreen = () => {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(!isEnabled);

    return (
        <View style={appTheme.appContainer}>
            <HeaderTitle title="Switches" />
            <Switch
                trackColor={{ false: '#d9d9db', true: '#5856d6' }}
                thumbColor={Platform.OS === 'android' ? '#5856d6' : ''}
                // ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
        </View>
    );
};

const styles = StyleSheet.create({

});
