import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { HeaderTitle } from '../components';
import { appTheme } from '../theme/appTheme';

export const TextInputScreen = () => {

    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
    });

    const onChange = (value: string, field: string) => {
        setForm({
            ...form,
            [field]: value,
        });
    };

    return (
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

            <TextInput
                style={styles.textInput}
                placeholder="Phone"
                autoCorrect={false}
                onChangeText={(value) => onChange(value, 'phone')}
                keyboardType="phone-pad"
            />

            <HeaderTitle title={JSON.stringify(form, null, 3)} />
        </View>
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
});
