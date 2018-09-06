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
import {SearchBar,Icon} from 'react-native-elements';
var {height, width} = Dimensions.get('window');
const SearchPage = (props) => {
  return (
    <View style = {styles.containerStyle}>
      
    </View>
  );
};
// Make the component available to other parts of the app

const styles = {

}

export { SearchPage };
