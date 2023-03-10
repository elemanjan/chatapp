import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FlatList, StyleSheet, View} from 'react-native';
import {ChatListItem} from './components/ChatListItem';

const data = [
  {
    id: 0,
    name: 'Eleman',
  },
  {
    id: 1,
    name: 'Nurlan',
  },
  {
    id: 2,
    name: 'Lama',
  },
  {
    id: 3,
    name: 'Ron',
  },
  {
    id: 4,
    name: 'Modric',
  },
  {
    id: 5,
    name: 'Kama',
  },
  {
    id: 6,
    name: 'Artur',
  },
  {
    id: 7,
    name: 'Almaz',
  },
];
export const ChatListScreen = ({navigation}: any) => {
  const onSelectItem = () => {
    navigation.navigate('ChatScreen');
  };
  const renderItem = ({item}: any) => (
    <ChatListItem item={item} onPress={onSelectItem} />
  );
  return (
    <SafeAreaView edges={['bottom']} style={styles.safeAreaContainer}>
      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    paddingTop: 12,
    flex: 1,
    backgroundColor: '#fff',
  },
});
