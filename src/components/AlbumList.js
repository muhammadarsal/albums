import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  state = { albums: [] };

  /*
    executed when a component is about
    to be rendered
  */
  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }));
  }

  renderAlbums() {
    return this.state.albums.map(album =>
      /*
        whenever we're rendering an array of components,
        each component in that array must have a key property
        that uniquely identifies that component.
        That way react-native will know which item in the list
        is it updating.
        This optimizes performance.
      */
      <AlbumDetail
        key={album.title}
        album={album}
      />
    );
  }

  render() {
    return (
      <View>
        {this.renderAlbums()}
      </View>
    );
  }
}

export default AlbumList;
