import React, { Component } from 'react';
import { View } from 'react-native';

import {
  SearchBox
} from './../../components/common'

export default class SearchModal extends Component  {
  constructor(props) {
    super(props);
  }
  render() {
    const {searchContainerStyle} = styles;
    return (
      <View style = {searchContainerStyle}>
        <SearchBox placeholder = "" buttonName = "Cancel" onPress = {() => console.log("Pressed")}/>
      </View>
    )
  }
}

const styles = {
  searchContainerStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    overflow: 'hidden',
  },
}
