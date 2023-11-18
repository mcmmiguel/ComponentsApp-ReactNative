import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FlatListMenuItemProps } from '../interfaces';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const FlatListMenuItem = ({ menuItem }: FlatListMenuItemProps) => {
    return (
        <TouchableOpacity activeOpacity={0.8}>
            <View style={styles.mainContainer}>
                <View style={styles.itemContainer}>
                    <Icon name={menuItem.icon} size={25} color="black" />
                    <Text style={styles.itemText}>{menuItem.name} - {menuItem.icon}</Text>
                </View>
                <Icon name="chevron-forward-outline" size={25} color="black" />
            </View >
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    itemContainer: {
        flexDirection: 'row',
    },
    itemText: {
        marginLeft: 10,
        fontSize: 15,
    },
});
