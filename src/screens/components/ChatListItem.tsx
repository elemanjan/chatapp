import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {Colors} from '../../styles/variables';
import {Avatar} from './Avatar';
import chatStore from '../../stores/chatStore';
import {observer} from 'mobx-react';

interface ChatListItemProps {
  user: {
    id: number;
    name: string;
    avatarImg: string | null;
  };
  onPress: () => void;
}

export const ChatListItem = observer((props: ChatListItemProps) => {
  const messages = chatStore.getMessages(0, props.user.id);
  const lastMessage = messages[messages.length - 1]?.text;
  const lastMessageDate =
    messages[messages.length - 1]?.timestamp.toLocaleDateString();
  return (
    <Pressable style={styles.container} onPress={props.onPress}>
      <View style={styles.leftContainer}>
        <Avatar name={props.user.name} avatarImg={props.user.avatarImg} />
      </View>
      <View style={styles.centerContainer}>
        <Text style={styles.title}>{props.user.name}</Text>
        <Text style={styles.text}>{lastMessage}</Text>
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.date}>{lastMessageDate}</Text>
      </View>
    </Pressable>
  );
});

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 8,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: Colors.grayLight,
  },
  leftContainer: {
    width: '17%',
    padding: 4,
    alignItems: 'center',
  },
  centerContainer: {
    width: '63%',
  },
  rightContainer: {
    width: '20%',
    alignSelf: 'flex-end',
  },
  title: {
    color: Colors.text,
    fontWeight: '600',
    fontSize: 16,
  },
  text: {
    marginTop: 4,
    color: Colors.grayText,
  },
  date: {
    color: Colors.grayText,
  },
});
