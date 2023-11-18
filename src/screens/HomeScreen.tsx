import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { appTheme } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FlatListMenuItem } from '../components';

const menuItems = [
    {
        name: 'Animation 101',
        icon: 'cube-outline',
        component: 'Animation101Screen',
    },
    {
        name: 'Animation 102',
        icon: 'albums-outline',
        component: 'Animation102Screen',
    },
];

export const HomeScreen = () => {

    const { top } = useSafeAreaInsets();

    const renderListHeader = () => {
        return (
            <View style={styles.headerContainer}>
                <Text style={appTheme.title}>Opciones de Menu</Text>
            </View>
        );
    };

    const itemSeparator = () => {
        return (
            <View style={styles.itemSeparator} />
        );
    };

    return (
        <View style={{ ...styles.mainContainer, ...appTheme.appContainer, marginTop: top + 20 }}>
            <FlatList
                ListHeaderComponent={renderListHeader}
                data={menuItems}
                renderItem={({ item }) => <FlatListMenuItem menuItem={item} />}
                ItemSeparatorComponent={itemSeparator}
                keyExtractor={(item) => item.name}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    headerContainer: {
        marginBottom: 20,
    },
    itemSeparator: {
        borderBottomWidth: 1,
        opacity: 0.5,
        marginVertical: 10,
    },
});
