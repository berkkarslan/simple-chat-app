import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Login from './screens/Login';
import Chat from './screens/Chat';

const AppNavigator = createStackNavigator(
  {
    Login: {
      screen: Login,
    },
    Chat: {
      screen: Chat,
    },
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
  },
);

export default createAppContainer(AppNavigator);
