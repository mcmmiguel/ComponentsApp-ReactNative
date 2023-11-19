import React, { useState } from 'react';
import { ActivityIndicator, Animated, StyleSheet, View } from 'react-native';
import { useAnimation } from '../hooks';
import { FadeInImageProps } from '../interfaces';

export const FadeInImage = ({ uri, style = {} }: FadeInImageProps) => {

    const { opacity, fadeIn } = useAnimation();
    const [isLoading, setIsLoading] = useState(true);

    const finishLoading = () => {
        setIsLoading(false);
        fadeIn();
    };

    return (
        <View style={styles.container}>
            {
                isLoading && <ActivityIndicator style={styles.loader} color="#5856d6" size={30} />
            }
            <Animated.Image
                source={{ uri }}
                onLoadEnd={finishLoading}
                style={{
                    ...style as any,
                    opacity,
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    loader: {
        position: 'absolute',
    },
    image: {
        width: '100%',
        height: 400,
    },
});
