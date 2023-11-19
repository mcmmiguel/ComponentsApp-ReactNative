import React, { useState } from 'react';
import { FlatList, Image, StyleSheet, View } from 'react-native';
import { HeaderTitle } from '../components';
import { ActivityIndicator } from 'react-native';

export const InfiniteScrollScreen = () => {

    const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]);

    const loadMore = () => {
        const newArray: number[] = [];
        for (let i = 0; i < 5; i++) {
            newArray[i] = numbers.length + 1;
        }

        setTimeout(() => {
            setNumbers([...numbers, ...newArray]);
        }, 1500);
    };

    const renderItem = (item: number) => {
        return (
            <Image
                style={styles.image}
                source={{ uri: `https://picsum.photos/id/${item}/500/400` }}
            />
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={numbers}
                keyExtractor={(item: any) => item.toString()}
                renderItem={({ item }) => renderItem(item)}
                ListHeaderComponent={<HeaderTitle title="Infinite Scroll" />}
                ListFooterComponent={() => (
                    <View style={styles.loaderContainer}>
                        <ActivityIndicator size={25} color="#5856d6" />
                    </View>
                )}
                onEndReached={loadMore}
                onEndReachedThreshold={0.5}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textItem: {
        backgroundColor: 'green',
        height: 150,
    },
    image: {
        width: '100%',
        height: 400,
        marginBottom: 10,
    },
    loaderContainer: {
        height: 150,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
