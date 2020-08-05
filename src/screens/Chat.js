import React from 'react';
import {SafeAreaView, StyleSheet, View, Dimensions} from 'react-native';
import {TextInput, Button, Title} from 'react-native-paper';
import ChatUI from '../components/ChatUI';

const screenWidth = Math.round(Dimensions.get('window').width);

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <ChatUI usernamex={this.props.navigation.state.params.usernamex} />
      </View>
    );
  }
}
const offset = 24;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f3f3f3',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nameInput: {
    width: screenWidth - 60,
    marginBottom: offset,
  },
  title: {
    fontWeight: '500',
    marginBottom: offset * 1.5,
    marginLeft: offset,
    fontSize: offset,
  },
  button: {
    height: offset * 2,
    justifyContent: 'center',
    borderRadius: 10,
    width: screenWidth / 2,
  },
});

export default App;
