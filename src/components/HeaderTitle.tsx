import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { appTheme } from '../theme/appTheme';
import { HeaderTitleProps } from '../interfaces';

export const HeaderTitle = ({ title }: HeaderTitleProps) => {

    const { top } = useSafeAreaInsets();

    return (
        <View style={{ ...styles.headerContainer, marginTop: top + 20 }}>
            <Text style={appTheme.title}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        marginBottom: 20,
    },
});
