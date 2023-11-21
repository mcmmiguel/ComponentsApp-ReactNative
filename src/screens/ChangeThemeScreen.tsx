import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { appTheme } from '../theme/appTheme';
import { HeaderTitle } from '../components';
import { ThemeContext } from '../context';

export const ChangeThemeScreen = () => {

    const { setDarkTheme } = useContext(ThemeContext);

    return (
        <View style={appTheme.appContainer}>
            <HeaderTitle title="Theme" />

            <TouchableOpacity
                activeOpacity={0.8}
                style={styles.button}
                onPress={setDarkTheme}
            >
                <Text style={styles.buttonText}>Light / Dark</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#5856d6',
        justifyContent: 'center',
        width: 150,
        height: 50,
        borderRadius: 20,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
    },
});
