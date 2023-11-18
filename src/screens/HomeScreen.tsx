import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { appTheme } from '../theme/appTheme';
import { FlatListMenuItem, HeaderTitle } from '../components';
import { menuItems } from '../data';

export const HomeScreen = () => {

    const itemSeparator = () => {
        return (
            <View style={styles.itemSeparator} />
        );
    };

    return (
        <View style={{ ...styles.mainContainer, ...appTheme.appContainer }}>
            <FlatList
                ListHeaderComponent={<HeaderTitle title="Opciones de Menú" />}
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
    itemSeparator: {
        borderBottomWidth: 1,
        opacity: 0.5,
        marginVertical: 10,
    },
});
