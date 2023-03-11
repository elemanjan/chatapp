import {observer} from 'mobx-react';
import React from 'react';
import {
  Alert,
  Image,
  PermissionsAndroid,
  Platform,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {Colors} from '../../styles/variables';
import chatStore from '../../stores/chatStore';
import {launchCamera} from 'react-native-image-picker';

const sendIcon = require('../../assets/icons/send.png');
const cameraIcon = require('../../assets/icons/camera.png');

interface ChatInputProps {
  onSend: () => void;
  containerStyle?: ViewStyle;
}

const ChatInput = observer((props: ChatInputProps) => {
  const handleSend = () => {
    props.onSend();
    chatStore.setText('');
    chatStore.setVideo(null);
  };

  const handleCamera = async () => {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Camera Permission',
          message: 'App needs camera permission',
          buttonPositive: 'Ok',
        },
      );

      if (!granted) {
        Alert.alert('Camera permission denied');
        return;
      }
    }

    await launchCamera(
      {
        mediaType: 'video',
        videoQuality: 'high',
        durationLimit: 60,
        saveToPhotos: true,
      },
      async response => {
        if (response.didCancel) {
          return;
        } else if (response.errorCode) {
          Alert.alert('Error', response.errorCode);
        } else {
          try {
            console.log('response', response);
            const uri = response.assets && response.assets[0].uri;
            const path = Platform.OS === 'android' ? 'file://' + uri : uri;
            chatStore.setVideo(path);
            props.onSend();
            chatStore.setVideo(null);
          } catch (error: any) {
            Alert.alert('Error', error);
          }
        }
      },
    );
  };

  return (
    <View style={[styles.container, props.containerStyle]}>
      <TextInput
        style={styles.input}
        placeholder="Type a message..."
        placeholderTextColor={Colors.grayText}
        value={chatStore.text}
        onChangeText={(text: string) => chatStore.setText(text)}
      />
      <TouchableOpacity
        style={styles.rightButton}
        onPress={chatStore.text.length > 0 ? handleSend : handleCamera}>
        <Image
          source={chatStore.text.length > 0 ? sendIcon : cameraIcon}
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.grayLight,
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
    color: Colors.text,
  },
  rightButton: {
    backgroundColor: Colors.blue,
    borderRadius: 20,
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftButton: {
    backgroundColor: Colors.background,
    borderRadius: 20,
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: Colors.background,
  },
});

export default ChatInput;
