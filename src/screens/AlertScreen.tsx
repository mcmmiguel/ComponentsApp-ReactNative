import React from 'react';
import { Alert, Button, View } from 'react-native';
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
        Alert.prompt('¿Está seguro?',
            'Esta acción es irreversible',
            (value: string) => console.log('info', value),
            'plain-text',
            'Hola',
            'number-pad'
        );
    };

    return (
        <View style={appTheme.appContainer}>
            <HeaderTitle title="Alerts" />

            <Button
                title="Mostrar alerta"
                onPress={showAlert}
            />

            {/* Solo funciona en iOS */}
            <Button
                title="Mostrar prompt (solo iOS)"
                onPress={showPrompt}
            />
        </View>
    );
};
