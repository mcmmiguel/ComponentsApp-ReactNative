import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AlertScreen, Animation101Screen, Animation102Screen, ChangeThemeScreen, HomeScreen, InfiniteScrollScreen, ModalScreen, PullToRefresh, SectionListScreen, SlidesScreen, SwitchScreen, TextInputScreen } from '../screens';
import { NavigationContainer } from '@react-navigation/native';

export const Stack = createStackNavigator();

export const StackNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false,
                // cardStyle: {
                //     backgroundColor: 'white',
                // },
            }}>
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="Animation101Screen" component={Animation101Screen} />
                <Stack.Screen name="Animation102Screen" component={Animation102Screen} />
                <Stack.Screen name="SwitchScreen" component={SwitchScreen} />
                <Stack.Screen name="AlertScreen" component={AlertScreen} />
                <Stack.Screen name="TextInputScreen" component={TextInputScreen} />
                <Stack.Screen name="PullToRefreshScreen" component={PullToRefresh} />
                <Stack.Screen name="SectionListScreen" component={SectionListScreen} />
                <Stack.Screen name="ModalScreen" component={ModalScreen} />
                <Stack.Screen name="InfiniteScrollScreen" component={InfiniteScrollScreen} />
                <Stack.Screen name="SlidesScreen" component={SlidesScreen} />
                <Stack.Screen name="ChangeThemeScreen" component={ChangeThemeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
