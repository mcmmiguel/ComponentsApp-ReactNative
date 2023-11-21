import React, { useContext, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { CustomSwitch, HeaderTitle } from '../components';
import { appTheme } from '../theme/appTheme';
import { ThemeContext } from '../context';

export const SwitchScreen = () => {

    const [state, setState] = useState({
        isActive: true,
        isHungry: false,
        isHappy: true,
    });

    const { theme: { colors } } = useContext(ThemeContext);

    const { isActive, isHappy, isHungry } = state;

    const onChange = (value: boolean, field: string) => {
        setState({
            ...state,
            [field]: value,
        });
    };

    return (
        <View style={appTheme.appContainer}>
            <HeaderTitle title="Switches" />
            <View style={styles.switchRow}>
                <Text style={{ ...styles.switchText, color: colors.text }}>Is active</Text>
                <CustomSwitch isOn={isActive} onChange={(value) => onChange(value, 'isActive')} />
            </View>
            <View style={styles.switchRow}>
                <Text style={{ ...styles.switchText, color: colors.text }}>Is hungry</Text>
                <CustomSwitch isOn={isHungry} onChange={(value) => onChange(value, 'isHungry')} />
            </View>
            <View style={styles.switchRow}>
                <Text style={{ ...styles.switchText, color: colors.text }}>Is happy</Text>
                <CustomSwitch isOn={isHappy} onChange={(value) => onChange(value, 'isHappy')} />
            </View>
            <Text style={{ ...styles.switchText, color: colors.text }}>
                {JSON.stringify(state, null, 5)}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    switchRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 5,
    },
    switchText: {
        fontSize: 25,
    },
});
