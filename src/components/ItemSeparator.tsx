import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { ThemeContext } from '../context';

export const ItemSeparator = () => {

    const { theme: { dividerColor } } = useContext(ThemeContext);

    return (
        <View style={{ ...styles.itemSeparator, borderBottomColor: dividerColor }} />
    );
};

const styles = StyleSheet.create({
    itemSeparator: {
        borderBottomWidth: 1,
        opacity: 0.5,
        marginVertical: 10,
    },
});
