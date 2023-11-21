import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { appTheme } from '../theme/appTheme';
import { HeaderTitle } from '../components';
import { ThemeContext } from '../context';

export const ChangeThemeScreen = () => {

    const { setDarkTheme, setLightTheme, theme: { colors } } = useContext(ThemeContext);

    return (
        <View style={appTheme.appContainer}>
            <HeaderTitle title="Theme" />

            <View style={styles.buttonsContainer}>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={{ ...styles.button, backgroundColor: colors.primary }}
                    onPress={setLightTheme}
                >
                    <Text style={styles.buttonText}>Light</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    activeOpacity={0.8}
                    style={{ ...styles.button, backgroundColor: colors.primary }}
                    onPress={setDarkTheme}
                >
                    <Text style={styles.buttonText}>Dark</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
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
