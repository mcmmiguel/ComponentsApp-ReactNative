import React, { useRef } from 'react';
import { View, StyleSheet, Animated } from 'react-native';

export const Animation101Screen = () => {

    const opacity = useRef(new Animated.Value(0.5)).current;

    return (
        <View style={styles.mainContainer}>
            <Animated.View style={{ ...styles.purpleBox, opacity }} />
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    purpleBox: {
        backgroundColor: '#5856D6',
        width: 150,
        height: 150,
    },
});
