import React from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, TextInput, View } from 'react-native';
import { CustomSwitch, HeaderTitle } from '../components';
import { appTheme } from '../theme/appTheme';
import { Text } from 'react-native';
import { useForm } from '../hooks';

export const TextInputScreen = () => {

    const { isSubscribed, form, onChange } = useForm({
        name: '',
        email: '',
        phone: '',
        isSubscribed: false,
    });

    return (
        <KeyboardAvoidingView
            enabled
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <ScrollView>
                <View style={appTheme.appContainer}>
                    <HeaderTitle title="Text Inputs" />

                    <TextInput
                        style={styles.textInput}
                        placeholder="Name"
                        autoCorrect={false}
                        autoCapitalize="words"
                        onChangeText={(value) => onChange(value, 'name')}
                    />

                    <TextInput
                        style={styles.textInput}
                        placeholder="Email"
                        autoCorrect={false}
                        autoCapitalize="none"
                        onChangeText={(value) => onChange(value, 'email')}
                        keyboardType="email-address"
                        keyboardAppearance="dark" //solo funciona en iOS
                    />

                    <View style={styles.switchContainer}>
                        <Text style={styles.switchText}>{isSubscribed ? 'Ya estás suscrito' : 'Suscribirse'}</Text>
                        <CustomSwitch isOn={isSubscribed} onChange={(value) => onChange(value, 'isSubscribed')} />
                    </View>

                    <HeaderTitle title={JSON.stringify(form, null, 3)} />
                    <HeaderTitle title={JSON.stringify(form, null, 3)} />

                    <TextInput
                        style={styles.textInput}
                        placeholder="Phone"
                        autoCorrect={false}
                        onChangeText={(value) => onChange(value, 'phone')}
                        keyboardType="phone-pad"
                    />
                </View>
                <View style={styles.separator} />
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    textInput: {
        borderWidth: 1,
        height: 50,
        paddingHorizontal: 10,
        borderRadius: 10,
        borderColor: 'rgba(0, 0, 0, 0.3)',
        marginVertical: 10,
    },
    switchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    switchText: {
        marginRight: 10,
    },
    separator: {
        height: 100,
    },
});
