import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { appTheme } from '../theme/appTheme';
import { FlatListMenuItem, HeaderTitle, ItemSeparator } from '../components';
import { menuItems } from '../data';

export const HomeScreen = () => {

    return (
        <View style={{ ...styles.mainContainer, ...appTheme.appContainer }}>
            <FlatList
                ListHeaderComponent={<HeaderTitle title="Opciones de Menú" />}
                data={menuItems}
                renderItem={({ item }) => <FlatListMenuItem menuItem={item} />}
                ItemSeparatorComponent={() => <ItemSeparator />}
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
