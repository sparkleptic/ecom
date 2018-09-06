import React, { Component } from 'react';
import { View } from 'react-native';

import {
  SearchBox
} from './../../components/common'

export default class TopSearch extends Component  {
  constructor(props) {
    super(props);
  }
  render() {
    const {searchContainerStyle} = styles;
    return (
      <View style = {searchContainerStyle}>
        <SearchBox placeholder = "" buttonName = "SEARCH" onPress = {() => console.log("Pressed")}/>
      </View>
    )
  }
}

const styles = {
  searchContainerStyle: {
    zIndex: 99,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    overflow: 'hidden',
  },
}
