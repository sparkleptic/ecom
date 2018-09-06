// Import libraries for making a component
import React, { Component } from 'react';
import {
  View,
  Text,
  Dimensions
} from 'react-native';
import { SearchBar, Icon } from 'react-native-elements'
import {

} from './'
import {Actions} from 'react-native-router-flux';
var {height, width} = Dimensions.get('window');

const NavBarModal = (props) => {
  const {containerStyle} = styles;
  return (
    <View style = {containerStyle}>
        <View style = {styles.closeButtonStyle}>
          <Icon

                name='ios-close-outline'
                type='ionicon'
                color='#fff'
                size = {48}
                iconStyle = {{backgroundColor: 'transparent'}}
                onPress = {() => Actions.pop() }
              />
        </View>
        <View style = {styles.backButtonStyle}>
          <Icon
                name='ios-close-outline'
                type='ionicon'
                color='#fff'
                size = {48}
                iconStyle = {{backgroundColor: 'transparent'}}
                onPress = {() => Actions.pop() }
              />
        </View>
    </View>
  );
};

// Make the component available to other parts of the app

const styles = {
  containerStyle: {
    position: 'absolute',
    left:0,
    bottom: 20,
    height: 70,
    width: width,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#000',
    justifyContent: 'center'
  },
  closeButtonStyle: {

  },
  backButtonStyle: {
    position: 'absolute',
    left:10,
    height: 70
  }
}

export { NavBarModal };
