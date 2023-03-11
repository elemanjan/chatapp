import {makeAutoObservable, runInAction} from 'mobx';
import {generateResponse} from '../utils/randomText';

export interface IMessage {
  id: string;
  senderId: number;
  receiverId: number;
  text: string;
  video?: string | null;
  timestamp: Date;
}

export interface IChatStore {
  messages: IMessage[];
  addMessage: (userId: number) => void;
}

class ChatStore implements IChatStore {
  messages: IMessage[] = [];
  text: string = '';
  video: any = null;

  constructor() {
    makeAutoObservable(this);
  }

  setText(text: string) {
    this.text = text;
  }

  setVideo(videoUri: string | undefined | null) {
    this.video = videoUri;
  }

  addMessage(userId: number) {
    const message: IMessage = {
      id: `${Date.now()}`,
      senderId: 0,
      receiverId: userId,
      text: this.text,
      video: this.video,
      timestamp: new Date(),
    };
    this.messages.push(message);

    const fakeMessage: IMessage = {
      id: `${Date.now() + 1}`,
      senderId: userId,
      receiverId: 0,
      text: generateResponse(this.text),
      video: null,
      timestamp: new Date(Date.now() + 2000 * 1000),
    };
    setTimeout(() => {
      runInAction(() => {
        this.messages.push(fakeMessage);
      });
    }, 2000);
  }

  getMessages = (senderId: number, receiverId: number) => {
    return this.messages.filter(
      item =>
        (item.senderId === senderId && item.receiverId === receiverId) ||
        (item.senderId === receiverId && item.senderId === receiverId),
    );
  };
}

const chatStore = new ChatStore();

export default chatStore;
