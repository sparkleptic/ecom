// Import libraries for making a component
import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import {
Button
} from './'
import { Actions } from 'react-native-router-flux';
import {Icon} from 'react-native-elements';
var {height, width} = Dimensions.get('window');
const SearchBtnIcon = (props) => {
  return (
    <View style = {styles.searchBarContainer}>
      <TouchableOpacity onPress = {()=>Actions.SearchPage()}>
      <Icon
            name='ios-search'
            type='ionicon'
            color='#fff'
            size = {28}
            containerStyle= {{marginRight: 15}} />
      </TouchableOpacity>
    </View>
  );
};

// Make the component available to other parts of the app

const styles = {

}

export { SearchBtnIcon };
