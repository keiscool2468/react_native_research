/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import FBSDK, { LoginManager } from 'react-native-fbsdk';

export default class nativeFunction extends Component {

  _fbAuth() {
    LoginManager.logInWithReadPermissions(['public_profile']).then(function(result) {
      if (result.isCancelled) {
        console.log('Login was cancelled');
      } else {
        console.log('success'+ result.grantedPermissions.toString());
      }
    }, function(error) {
      console.log(error);
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this._fbAuth}>
          <Text>sadsada
            </Text>
          </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('nativeFunction', () => nativeFunction);
