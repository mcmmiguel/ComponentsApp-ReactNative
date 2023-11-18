import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

interface MenuItemProps {
    name: string;
    icon: string;
    component: string;
}

const menuItems = [
    {
        name: 'Animation 101',
        icon: 'cube-outline',
        component: 'Animation101Screen',
    },
];

export const HomeScreen = () => {

    const renderMenuItem = (menuItem: MenuItemProps) => {
        return (
            <View>
                <Text>{menuItem.name} - {menuItem.icon}</Text>
            </View>
        );
    };

    return (
        <View style={styles.mainContainer}>
            <FlatList
                data={menuItems}
                renderItem={({ item }) => renderMenuItem(item)}
                keyExtractor={(item) => item.name}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
});
