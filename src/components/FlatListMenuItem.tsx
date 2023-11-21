import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { ThemeContext } from '../context';
import { FlatListMenuItemProps } from '../interfaces';

export const FlatListMenuItem = ({ menuItem }: FlatListMenuItemProps) => {

    const navigation = useNavigation();
    const { theme: { colors } } = useContext(ThemeContext);

    return (
        <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate(menuItem.component as never)}>
            <View style={styles.mainContainer}>
                <View style={styles.itemContainer}>
                    <Icon name={menuItem.icon} size={25} color={colors.primary} />
                    <Text style={styles.itemText}>{menuItem.name}</Text>
                </View>
                <Icon name="chevron-forward-outline" size={25} color={colors.primary} />
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
