import React, { useState } from 'react';
import { View, StyleSheet, Text, Dimensions, Image } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { HeaderTitle } from '../components';
import { SafeAreaView } from 'react-native-safe-area-context';
import { items } from '../data';
import { Slide } from '../interfaces';

const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

export const SlidesScreen = () => {

    const [activeIndex, setActiveIndex] = useState(0);

    const renderItem = (item: Slide) => {

        return (
            <View style={styles.itemContainer}>
                <Image
                    source={item.img}
                    style={styles.itemImage}
                />
                <Text style={styles.itemTitle}>{item.title}</Text>
                <Text style={styles.itemDescription}>{item.desc}</Text>
            </View>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <HeaderTitle title="Slides Screen" />
            <Carousel
                // ref={(c) => { this._carousel = c; }}
                data={items}
                renderItem={({ item }: any) => renderItem(item)}
                sliderWidth={screenWidth}
                itemWidth={screenWidth}
                layout="default"
                onSnapToItem={(index) => {
                    setActiveIndex(index);
                }}
            />
            <Pagination
                dotsLength={items.length}
                activeDotIndex={activeIndex}
                dotStyle={styles.paginationDots}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
    },
    itemContainer: {
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 40,
        justifyContent: 'center',
    },
    itemImage: {
        width: 350,
        height: 400,
        resizeMode: 'center',
    },
    itemTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#5658d6',
    },
    itemDescription: {
        fontSize: 16,
    },
    paginationDots: {
        width: 10,
        height: 10,
        borderRadius: 10,
        backgroundColor: '#5856d6',
    },
});
