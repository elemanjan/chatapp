import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView, StyleSheet, Text} from 'react-native';
import ChatInput from './components/ChatInput';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export const ChatScreen = () => {
  return (
    <SafeAreaView edges={['bottom']} style={styles.safeAreaContainer}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab amet
          distinctio, eaque eum eveniet facere hic impedit inventore nam natus
          quis reiciendis reprehenderit sed soluta sunt velit. Aliquam aperiam
          culpa cumque, debitis doloribus eligendi minima natus nemo nihil nobis
          odio placeat repellendus repudiandae saepe temporibus! At optio
          ratione voluptatibus?
        </Text>
      </ScrollView>
      <KeyboardAwareScrollView
        extraScrollHeight={-10}
        contentContainerStyle={styles.inputContainer}>
        <ChatInput onSend={() => null} />
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    paddingBottom: 40,
    paddingTop: 12,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
});
