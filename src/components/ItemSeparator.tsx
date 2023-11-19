import React from 'react';
import { View, StyleSheet } from 'react-native';

export const ItemSeparator = () => {
    return (
        <View style={styles.itemSeparator} />
    );
};

const styles = StyleSheet.create({
    itemSeparator: {
        borderBottomWidth: 1,
        opacity: 0.5,
        marginVertical: 10,
    },
});
