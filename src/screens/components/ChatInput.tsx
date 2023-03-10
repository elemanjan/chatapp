import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ViewStyle,
} from 'react-native';
const sendIcon = require('../../assets/icons/send.png');
const cameraIcon = require('../../assets/icons/camera.png');

interface ChatInputProps {
  onSend: (msg: string) => void;
  containerStyle?: ViewStyle;
}

const ChatInput = (props: ChatInputProps) => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    props.onSend(message);
    setMessage('');
  };

  const handleCamera = () => {};

  return (
    <View style={[styles.container, props.containerStyle]}>
      <TextInput
        style={styles.input}
        placeholder="Type a message..."
        placeholderTextColor={'#a2a2a2'}
        value={message}
        onChangeText={setMessage}
      />
      <TouchableOpacity
        style={styles.rightButton}
        onPress={message ? handleSend : handleCamera}>
        <Image
          source={message.length > 0 ? sendIcon : cameraIcon}
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginHorizontal: 12,
    marginBottom: 12,
  },
  input: {
    flex: 1,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  rightButton: {
    backgroundColor: '#61a9ff',
    borderRadius: 20,
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftButton: {
    backgroundColor: '#fff',
    borderRadius: 20,
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: '#fff',
  },
});

export default ChatInput;
