import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { appTheme } from '../theme/appTheme';
import { HeaderTitleProps } from '../interfaces';
import { ThemeContext } from '../context';

export const HeaderTitle = ({ title }: HeaderTitleProps) => {

    const { theme: { colors } } = useContext(ThemeContext);
    const { top } = useSafeAreaInsets();

    return (
        <View style={{ ...styles.headerContainer, marginTop: top + 20 }}>
            <Text style={{ ...appTheme.title, color: colors.text }}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        marginBottom: 20,
    },
});
