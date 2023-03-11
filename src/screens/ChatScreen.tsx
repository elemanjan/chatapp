import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import ChatInput from './components/ChatInput';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Colors} from '../styles/variables';
import {Avatar} from './components/Avatar';
import chatStore, {IMessage} from '../stores/chatStore';
import {AppStackScreenProps} from '../navigators/types';
import {observer} from 'mobx-react';
import Video from 'react-native-video';

export const ChatScreen: React.FC<AppStackScreenProps<'ChatScreen'>> = observer(
  props => {
    const {user} = props.route?.params;
    const scrollViewRef = React.useRef<ScrollView>(null);

    return (
      <SafeAreaView edges={['bottom']} style={styles.safeAreaContainer}>
        <KeyboardAwareScrollView
          extraScrollHeight={-10}
          contentContainerStyle={styles.container}>
          <ScrollView
            contentContainerStyle={styles.contentContainer}
            ref={scrollViewRef}
            onContentSizeChange={() =>
              scrollViewRef.current?.scrollToEnd({animated: false})
            }>
            {chatStore.messages.length > 0 &&
              chatStore.getMessages(0, user.id).map((item: IMessage) => {
                return (
                  <View
                    style={[
                      styles.chatItem,
                      item.senderId === 0 && styles.chatItemReverse,
                    ]}
                    key={item.id}>
                    <Avatar
                      name={item.senderId === 0 ? 'Me' : user.name}
                      avatarImg={
                        item.senderId === 0 ? undefined : user.avatarImg
                      }
                      containerStyle={
                        item.senderId === 0
                          ? styles.avatarContainerReversed
                          : styles.avatarContainer
                      }
                    />
                    {item.text.length > 0 && (
                      <View style={styles.textContainer}>
                        <Text style={styles.text}>{item.text}</Text>
                      </View>
                    )}
                    {!!item.video && (
                      <Video
                        source={{uri: item.video}}
                        style={styles.backgroundVideo}
                      />
                    )}
                  </View>
                );
              })}
          </ScrollView>
          <ChatInput
            onSend={() => chatStore.addMessage(user.id)}
            containerStyle={styles.inputContainer}
          />
        </KeyboardAwareScrollView>
      </SafeAreaView>
    );
  },
);

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  container: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
    backgroundColor: Colors.background,
    paddingBottom: 140,
    paddingTop: 12,
    paddingHorizontal: 16,
  },
  inputContainer: {
    position: 'absolute',
    bottom: 0,
  },
  text: {
    color: Colors.text,
  },
  textContainer: {
    maxWidth: '80%',
    padding: 12,
    borderRadius: 20,
    backgroundColor: Colors.grayLight,
  },
  chatItem: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  chatItemReverse: {
    flexDirection: 'row-reverse',
  },
  avatarContainer: {
    marginRight: 12,
  },
  avatarContainerReversed: {
    marginLeft: 12,
  },
  backgroundVideo: {
    width: 200,
    height: 200,
    borderRadius: 6,
  },
});
