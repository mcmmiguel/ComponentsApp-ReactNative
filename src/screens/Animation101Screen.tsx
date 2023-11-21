import React, { useContext } from 'react';
import { View, StyleSheet, Animated, Button } from 'react-native';
import { useAnimation } from '../hooks';
import { ThemeContext } from '../context';

export const Animation101Screen = () => {

    const { position, opacity, fadeIn, fadeOut, startMovingPosition } = useAnimation();
    const { theme: { colors } } = useContext(ThemeContext);

    return (
        <View style={styles.mainContainer}>
            <Animated.View style={{
                ...styles.purpleBox,
                backgroundColor: colors.primary,
                opacity,
                transform: [{
                    translateY: position,
                }],
            }} />
            <Button color={colors.primary} title="Fade In" onPress={() => {
                fadeIn();
                startMovingPosition(-100);
            }} />
            <Button color={colors.primary} title="Fade Out" onPress={fadeOut} />
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
        width: 150,
        height: 150,
    },
});
