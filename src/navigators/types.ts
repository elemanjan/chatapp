/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {IUser} from '../screens/ChatListScreen';

export type MainNavigatorParamList = {
  ChatListScreen: undefined;
  ChatScreen: {
    user: IUser;
  };
};

/** Navigator screens props */

export type AppStackScreenProps<T extends keyof MainNavigatorParamList> =
  NativeStackScreenProps<MainNavigatorParamList, T>;
