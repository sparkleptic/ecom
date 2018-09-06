// Import libraries for making a component
import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import { SearchBar, Icon } from 'react-native-elements'
import {
Button
} from './'
import { Actions } from 'react-native-router-flux';
var {height, width} = Dimensions.get('window');
const NavBar = (props) => {
  const {containerStyle,logoContainer, logoImage, headerTextStyle} = styles;
  return (
    <View style = {containerStyle}>
      <View style={logoContainer}>
        <TouchableOpacity>
          <Image style = {logoImage} source = {require('../../resources/images/zappos.png')} />
        </TouchableOpacity>
      </View>
      <View style = {styles.searchBarContainer}>
        <Icon
              name='magnifier'
              type='simple-line-icon'
              color='#fff'
              underlayColor = '#3498DB'
              size = {20}
              containerStyle= {{marginRight: 15}}
              onPress={() => Actions.DepartmentsTabRootView()} />
      </View>
    </View>
  );
};

// Make the component available to other parts of the app

const styles = {
containerStyle: {
  marginTop: -20,
  paddingTop: 15,
  position: 'absolute',
  height: 74,
  width: width,
  flex: 1,
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: '#3498DB',
  justifyContent: 'space-between',
},
logoContainer: {
  width: (width + 20 ),
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
},
logoImage: {
  height: 60,
  resizeMode: 'contain',
},
searchBarContainer: {
  marginLeft: - (width)
}

}

export { NavBar };
