import React, { useContext } from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ThemeContext } from '../context';
import { AlertScreen, Animation101Screen, Animation102Screen, ChangeThemeScreen, HomeScreen, InfiniteScrollScreen, ModalScreen, PullToRefresh, SectionListScreen, SlidesScreen, SwitchScreen, TextInputScreen } from '../screens';

export const Stack = createStackNavigator();

export const StackNavigator = () => {

    const { theme } = useContext(ThemeContext);

    return (
        <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
            <NavigationContainer theme={theme}>
                <Stack.Navigator screenOptions={{
                    headerShown: false,
                    cardStyle: {
                        //     backgroundColor: 'white',
                    },
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
        </View>
    );
};
