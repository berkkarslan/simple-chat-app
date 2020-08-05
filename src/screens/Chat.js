import React from 'react';
import {StyleSheet, View} from 'react-native';
import ChatUI from '../components/ChatUI';

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
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f3f3f3',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default App;
