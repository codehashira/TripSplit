import React from 'react';
import RootStackNavigator from './src/navigation/RootStackNavigator';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <RootStackNavigator />
    </SafeAreaProvider>
  );
};

export default App;
