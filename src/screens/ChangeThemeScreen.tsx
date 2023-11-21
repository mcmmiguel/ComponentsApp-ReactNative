import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { appTheme } from '../theme/appTheme';
import { HeaderTitle } from '../components';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const ChangeThemeScreen = () => {
    return (
        <View style={appTheme.appContainer}>
            <HeaderTitle title="Theme" />

            <TouchableOpacity style={styles.button}>
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
