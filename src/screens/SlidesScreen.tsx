import React, { useRef, useState } from 'react';
import { View, StyleSheet, Text, Dimensions, Image, TouchableOpacity, Animated } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { HeaderTitle } from '../components';
import { items } from '../data';
import { Slide } from '../interfaces';
import { useAnimation } from '../hooks';
import { useNavigation } from '@react-navigation/native';

const { width: screenWidth } = Dimensions.get('window');

export const SlidesScreen = () => {

    const navigation = useNavigation();

    const [activeIndex, setActiveIndex] = useState(0);
    // const [isVisible, setIsVisible] = useState(false);
    const isVisible = useRef(false);
    const { fadeIn, opacity } = useAnimation();

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
                    if (index === 2) {
                        isVisible.current = true;
                        fadeIn();
                    }
                }}
            />

            <View style={styles.paginationContainer}>
                <Pagination
                    dotsLength={items.length}
                    activeDotIndex={activeIndex}
                    dotStyle={styles.paginationDots}
                />

                <Animated.View style={{ opacity }}>
                    <TouchableOpacity
                        style={styles.paginationButton}
                        activeOpacity={0.8}
                        onPress={() => {
                            if (isVisible.current) {
                                navigation.goBack();
                            }
                        }}
                    >
                        <Text style={styles.paginationButtonText}>Entrar</Text>
                        <Icon name="chevron-forward-outline" color="white" size={35} />
                    </TouchableOpacity>
                </Animated.View>

            </View>
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
    paginationContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        alignItems: 'center',
    },
    paginationDots: {
        width: 10,
        height: 10,
        borderRadius: 10,
        backgroundColor: '#5856d6',
    },
    paginationButton: {
        flexDirection: 'row',
        backgroundColor: '#5856d6',
        width: 150,
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    paginationButtonText: {
        fontSize: 25,
        color: 'white',
    },
});
