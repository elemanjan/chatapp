import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';

const avatarImg =
  'https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png';

interface ChatListItemProps {
  item: any;
  onPress: () => void;
}

export const ChatListItem = (props: ChatListItemProps) => {
  return (
    <Pressable style={styles.container} onPress={props.onPress}>
      <View style={styles.leftContainer}>
        <Image source={{uri: avatarImg}} style={styles.avatar} />
      </View>
      <View style={styles.centerContainer}>
        <Text style={styles.title}>{props.item.name}</Text>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing.
        </Text>
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.date}>14/03/2023</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 8,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f1f1',
  },
  leftContainer: {
    width: '15%',
    padding: 4,
    alignItems: 'center',
  },
  centerContainer: {
    width: '65%',
  },
  rightContainer: {
    width: '20%',
    alignSelf: 'flex-end',
  },
  avatar: {
    width: 20,
    height: 20,
  },
  title: {
    color: '#000',
    fontWeight: '600',
    fontSize: 16,
  },
  text: {
    marginTop: 4,
    color: '#6c6c6c',
  },
  date: {
    color: '#6c6c6c',
  },
});
