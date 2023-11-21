import 'react-native-gesture-handler';
import React from 'react';
import { DefaultTheme, NavigationContainer, Theme, DarkTheme } from '@react-navigation/native';
import { StackNavigator } from './src/navigation';

const customTheme: Theme = {
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    // primary: string;
    // background: string,
    // card: string;
    // text: string;
    // border: string;
    // notification: string;
  },
};

const App = () => {
  return (
    <NavigationContainer theme={customTheme}>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default App;
