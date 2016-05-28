/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class platformr extends Component {
  render() {
    return (
      <WebView
        style={{
          backgroundColor: 'rgba(255,255,255,0.8)',
          height: 400
        }}
        // source={{html: HTML}}
        source={{uri: 'http://threejs.org/examples/#webgl_loader_stl'}}
        scalesPageToFit={true}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});

AppRegistry.registerComponent('platformr', () => platformr);
