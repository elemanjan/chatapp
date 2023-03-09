import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StyleSheet, View} from 'react-native';

export const ChatScreen = () => {
  return (
    <SafeAreaView edges={['bottom']} style={styles.safeAreaContainer}>
      <View style={styles.container}></View>
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
