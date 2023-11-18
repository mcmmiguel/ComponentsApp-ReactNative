import React, { useRef } from 'react';
import { View, StyleSheet, Animated, Button } from 'react-native';

export const Animation101Screen = () => {

    const opacity = useRef(new Animated.Value(0)).current;

    const fadeIn = () => {
        Animated.timing(
            opacity,
            {
                toValue: 1,
                duration: 300,
                useNativeDriver: true,
            }
        ).start(() => console.log('La animación terminó'));
    };

    const fadeOut = () => {
        Animated.timing(
            opacity,
            {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            }
        ).start();
    };

    return (
        <View style={styles.mainContainer}>
            <Animated.View style={{ ...styles.purpleBox, opacity }} />
            <Button title="Fade In" onPress={fadeIn} />
            <Button title="Fade Out" onPress={fadeOut} />
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
