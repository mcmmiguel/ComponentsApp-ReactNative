import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Animation101Screen, Animation102Screen, HomeScreen, SwitchScreen } from '../screens';

export const Stack = createStackNavigator();

export const StackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="Animation101Screen" component={Animation101Screen} />
            <Stack.Screen name="Animation102Screen" component={Animation102Screen} />
            <Stack.Screen name="SwitchScreen" component={SwitchScreen} />
        </Stack.Navigator>
    );
};
