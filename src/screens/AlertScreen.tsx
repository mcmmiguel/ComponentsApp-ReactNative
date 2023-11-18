import React from 'react';
import { Alert, Button, StyleSheet, View } from 'react-native';
import prompt from 'react-native-prompt-android';
import { HeaderTitle } from '../components';
import { appTheme } from '../theme/appTheme';

export const AlertScreen = () => {

    const showAlert = () => {
        Alert.alert('Alert', 'Probando alerta', [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'destructive',
            },
            { text: 'OK', onPress: () => console.log('OK Pressed') },
        ], {
            cancelable: true,
            onDismiss: () => console.log('ondismiss'),
        });
    };

    const showPrompt = () => {
        // ios
        // Alert.prompt('¿Está seguro?',
        //     'Esta acción es irreversible',
        //     (value: string) => console.log('info', value),
        //     'plain-text',
        //     'Hola',
        //     'number-pad'
        // );

        // Android
        prompt(
            'Enter password',
            'Enter your password to claim your $1.5B in lottery winnings',
            [
                { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                { text: 'OK', onPress: password => console.log('OK Pressed, password: ' + password) },
            ],
            {
                type: 'secure-text',
                cancelable: false,
                defaultValue: 'test',
                placeholder: 'placeholder',
            }
        );

    };

    return (
        <View style={appTheme.appContainer}>
            <HeaderTitle title="Alerts" />

            <Button
                title="Mostrar alerta"
                onPress={showAlert}
            />

            <View style={styles.separator} />

            {/* Solo funciona en iOS */}
            <Button
                title="Mostrar prompt"
                onPress={showPrompt}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    separator: {
        height: 10,
    },
});
