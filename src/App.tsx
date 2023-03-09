/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {
  createNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import MainNavigator from './navigators/MainNavigator';

export const navigationRef = createNavigationContainerRef<any>();

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
      <NavigationContainer ref={navigationRef}>
        <MainNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
