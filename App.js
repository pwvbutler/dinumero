import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Provider } from 'react-redux'
import store from './redux/store.js'

import AppContainer from './AppNavigator.js'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store} >
        <AppContainer />
      </Provider>
    );
  }
}

