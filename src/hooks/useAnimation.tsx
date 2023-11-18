import { useRef } from 'react';
import { Animated /*Easing*/ } from 'react-native';

export const useAnimation = () => {
    const opacity = useRef(new Animated.Value(0)).current;
    const position = useRef(new Animated.Value(0)).current;

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

    const startMovingPosition = (initialPosition: number, duration: number = 300) => {

        position.setValue(initialPosition);

        Animated.timing(
            position,
            {
                toValue: 0,
                duration,
                useNativeDriver: true,
                // easing: Easing.bounce,
            }
        ).start();
    };

    return {
        position,
        opacity,

        fadeIn,
        fadeOut,
        startMovingPosition,
    };
};