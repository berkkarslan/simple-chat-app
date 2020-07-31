import React from 'react';
import {SafeAreaView, StyleSheet, View, Dimensions} from 'react-native';
import {TextInput, Button, Title} from 'react-native-paper';

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
        <Title style={styles.title}>Welcome to Simple Chat App</Title>
        <TextInput
          style={styles.nameInput}
          label="Nickname"
          type="outlined"
          value={this.state.name}
          onChangeText={(text) => {
            this.setState({name: text});
          }}
        />
        <Button
          onPress={() => {
            this.props.navigation.navigate('Chat');
          }}
          mode="contained"
          style={styles.button}>
          Continue
        </Button>
      </View>
    );
  }
}
const offset = 24;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f3f3f3',
    flex: 1,
    justifyContent: 'center',
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
    marginTop: 10,
    height: offset * 2,
    justifyContent: 'center',
    borderRadius: 10,
    width: screenWidth / 2,
  },
});

export default App;