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

    return (
        <View style={appTheme.appContainer}>
            <HeaderTitle title="Alerts" />

            <Button
                title="Mostrar alerta"
                onPress={showAlert}
            />
        </View>
    );
};
