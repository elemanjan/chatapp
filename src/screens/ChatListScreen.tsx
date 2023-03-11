import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FlatList, StyleSheet, View} from 'react-native';
import {ChatListItem} from './components/ChatListItem';
import {Colors} from '../styles/variables';
import {AppStackScreenProps} from '../navigators/types';
import {data} from '../stores/ChatListData';

export interface IUser {
  id: number;
  name: string;
  avatarImg: string | null;
}
export const ChatListScreen: React.FC<
  AppStackScreenProps<'ChatListScreen'>
> = props => {
  const onSelectItem = (user: IUser) => {
    props.navigation.navigate('ChatScreen', {user});
  };

  const renderItem = (user: IUser) => (
    <ChatListItem user={user} onPress={() => onSelectItem(user)} />
  );
  return (
    <SafeAreaView edges={['bottom']} style={styles.safeAreaContainer}>
      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={({item}) => renderItem(item)}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.contentContainer}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  container: {
    paddingTop: 12,
    flex: 1,
    backgroundColor: Colors.background,
  },
  contentContainer: {
    paddingBottom: 100,
  },
});
