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
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import MainNavigator from './navigators/MainNavigator';
import {Colors} from './styles/variables';
import {Provider} from 'mobx-react';
import chatStore from './stores/chatStore';

export const navigationRef = createNavigationContainerRef<any>();

function App(): JSX.Element {
  return (
    <Provider {...chatStore}>
      <SafeAreaProvider>
        <StatusBar
          barStyle={'dark-content'}
          backgroundColor={Colors.background}
        />
        <NavigationContainer ref={navigationRef}>
          <MainNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}

export default App;
