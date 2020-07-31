import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {TextInput, IconButton, Title} from 'react-native-paper';
import Bubble from './Bubble';

const screenWidth = Math.round(Dimensions.get('window').width);

class ChatUI extends React.Component {
  constructor() {
    super();
    this.state = {
      message: '',
    };
  }

  render() {
    return (
      <KeyboardAvoidingView
        style={styles.container}
        enabled
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <SafeAreaView>
          <Bubble />
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
          />
          <IconButton
            onPress={() => {}}
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
