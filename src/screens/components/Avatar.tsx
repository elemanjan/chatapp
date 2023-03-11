import React from 'react';
import {Image, StyleSheet, Text, View, ViewStyle} from 'react-native';
import {Colors} from '../../styles/variables';

interface AvatarProps {
  name: string;
  avatarImg?: string | null;
  containerStyle?: ViewStyle;
}

export const Avatar = ({name, avatarImg, containerStyle}: AvatarProps) => {
  const getLetterFromName = (userName: string) => userName.charAt(0);

  return (
    <View style={[styles.avatarContainer, containerStyle]}>
      {avatarImg ? (
        <Image source={{uri: avatarImg}} style={styles.avatar} />
      ) : (
        <Text style={styles.avatarPlaceholder}>
          {name && getLetterFromName(name)}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  avatar: {
    width: 45,
    height: 45,
  },
  avatarContainer: {
    width: 45,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.grayBackground,
    borderRadius: 50,
    padding: 12,
    overflow: 'hidden',
  },
  avatarPlaceholder: {
    color: Colors.text,
    fontWeight: '600',
  },
});
