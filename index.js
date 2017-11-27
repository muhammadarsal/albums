import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

const App = () => {
  /*
    for every component we create, we have to return a single
    top-level JSX tag
  */
  return (
    <View>
      <Header headerText={'Albums!'} />
      <AlbumList />
    </View>
  );
};
// for every react-native app we must register at least one component
/*
  first argument is a string which is name of the application
  second argument is the function which returns the first component to be
    rendered by our application
*/
AppRegistry.registerComponent('albums', () => App);
