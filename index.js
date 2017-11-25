import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

const App = () => {
  return (
    <Header headerText={'Albums!'} />
  );
};
// for every react-native app we must register at least one component
/*
  first argument is a string which is name of the application
  second argument is the function which returns the first component to be
    rendered by our application
*/
AppRegistry.registerComponent('albums', () => App);
