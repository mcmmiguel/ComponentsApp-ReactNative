import 'react-native-gesture-handler';
import React from 'react';
import { StackNavigator } from './src/navigation';
import { ThemeProvider } from './src/context';

// const customTheme: Theme = {
//   dark: true,
//   colors: {
//     ...DefaultTheme.colors,
//     // primary: string;
//     // background: string,
//     // card: string;
//     // text: string;
//     // border: string;
//     // notification: string;
//   },
// };

const AppState = ({ children }: any) => {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  );
};

const App = () => {
  return (
    <AppState>
      <StackNavigator />
    </AppState>
  );
};

export default App;
