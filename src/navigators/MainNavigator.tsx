import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ChatListScreen} from '../screens/ChatListScreen';
import {ChatScreen} from '../screens/ChatScreen';

type MainNavigatorParamList = {
  ChatListScreen: undefined;
  ChatScreen: undefined;
};

const Root = createNativeStackNavigator<MainNavigatorParamList>();

const MainNavigator = () => {
  return (
    <Root.Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerTitleStyle: {
          color: '#000',
          fontSize: 20,
          fontWeight: '600',
        },
      }}>
      <Root.Screen
        name="ChatListScreen"
        options={{
          title: 'List of available chats',
        }}
        component={ChatListScreen}
      />
      <Root.Screen
        name="ChatScreen"
        options={{
          title: 'Conversation',
        }}
        component={ChatScreen}
      />
    </Root.Navigator>
  );
};

export default MainNavigator;
