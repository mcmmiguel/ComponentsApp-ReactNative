import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FlatListMenuItemProps } from '../interfaces';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export const FlatListMenuItem = ({ menuItem }: FlatListMenuItemProps) => {

    const navigation = useNavigation();

    return (
        <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate(menuItem.component as never)}>
            <View style={styles.mainContainer}>
                <View style={styles.itemContainer}>
                    <Icon name={menuItem.icon} size={25} color="#5856d6" />
                    <Text style={styles.itemText}>{menuItem.name} - {menuItem.icon}</Text>
                </View>
                <Icon name="chevron-forward-outline" size={25} color="#5856d6" />
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
