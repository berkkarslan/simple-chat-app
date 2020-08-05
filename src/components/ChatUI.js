import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import {TextInput, IconButton, Title} from 'react-native-paper';
import Bubble from './Bubble';
import firebase from 'react-native-firebase';
import DeviceInfo from 'react-native-device-info';

var config = {
  databaseURL: 'https://simple-chat-app-c855f.firebaseio.com/',
  projectId: '992710445218',
};
firebase.initializeApp(config);

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const screenWidth = Math.round(Dimensions.get('window').width);

class ChatUI extends React.Component {
  constructor() {
    super();
    this.state = {
      message: '',
      items: [],
      renderItems: [],
    };
  }

  componentDidMount() {
    firebase
      .database()
      .ref('/Messages')
      .on('value', (snapshot) => {
        this.setState({items: snapshot.val()});
        this.getMessages();
      });
  }

  getMessages() {
    const arr = [];
    if (this.state.items !== null && this.state.items !== undefined) {
      this.setState({renderItems: arr});
      for (const [key, value] of Object.entries(this.state.items)) {
        arr.push(value);
      }
      arr.sort((a, b) => (a.time > b.time ? 1 : -1));
      this.setState({renderItems: arr});
    }
  }

  sendMessage() {
    if (this.state.message !== '') {
      const message = this.state.message;
      const nickname = this.props.usernamex;
      const deviceID = DeviceInfo.getUniqueId();
      const date = new Date();
      const time = date.getTime();
      firebase
        .database()
        .ref('Messages/')
        .push({
          nickname,
          message,
          time,
          deviceID,
        })
        .then((data) => {
          //success callback
        })
        .catch((error) => {
          //error callback
          console.log('error ', error);
        });
      this.setState({message: ''});
    }
  }

  render() {
    return (
      <KeyboardAvoidingView
        style={styles.container}
        enabled
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <SafeAreaView style={{flex: 1}}>
          <Bubble messages={this.state.renderItems} />
        </SafeAreaView>
        <SafeAreaView style={styles.messageBox}>
          <TextInput
            style={styles.message}
            label=""
            theme={{colors: {primary: 'white', underlineColor: 'transparent'}}}
            value={this.state.message}
            onChangeText={(text) => {
              this.setState({message: text});
            }}
            onFocus={() => {}}
          />
          <IconButton
            onPress={() => {
              this.sendMessage();
            }}
            icon="send"
            color={'#fff'}
            size={20}
            style={styles.button}
          />
        </SafeAreaView>
      </KeyboardAvoidingView>
    );
  }
}

const offset = 24;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f3f3f3',
    flex: 1,
    justifyContent: 'space-between',
  },
  message: {
    width: screenWidth - offset * 4,
    height: offset * 1.5,
    borderRadius: 5,
    borderWidth: 0,
    backgroundColor: '#fff',
    marginTop: 10,
  },
  title: {
    fontWeight: '500',
    marginBottom: offset * 1.5,
    marginLeft: offset,
    fontSize: offset,
  },
  button: {
    backgroundColor: '#61dafb',
    justifyContent: 'center',
    alignItems: 'center',
  },
  messageBox: {
    width: screenWidth,
    paddingVertical: 10,
    marginTop: 10,
    marginBottom: 5,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'flex-end',
    backgroundColor: '#f0f0f0',
    borderTopColor: '#000',
    borderTopWidth: 0.2,
  },
});

export default ChatUI;
