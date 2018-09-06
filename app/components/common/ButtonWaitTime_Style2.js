import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
  Image,
  View,
  Dimensions,
  TouchableHighlight,
} from 'react-native';

import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { Card, Button, SocialIcon } from 'react-native-elements'
var {height, width} = Dimensions.get('window');

class ButtonWaitTime_Style2 extends Component {
  render() {
    return (
      <View style = {styles.buttonWaitTimeItemContainer}>
        <TouchableOpacity>
          <Text style = {styles.buttonTitleStyle}>Phone</Text>
          <Text style = {styles.buttonNumberStyle}>0</Text>
          <Text style = {styles.buttonInfoStyle}>seconds</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const widthButtonItem = width/3 - 30;

const styles = {
  buttonWaitTimeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonWaitTimeItemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: widthButtonItem,
    width: widthButtonItem,
    maxWidth: 120,
    maxHeight: 120,
    height: widthButtonItem,
    borderWidth: 2,
    borderColor: '#3498DB'
  },
  buttonTitleStyle: {
    fontWeight: 'bold',
    textAlign: 'center'
  },
  buttonNumberStyle: {
    fontWeight: 'bold',
    fontSize: 24,
    lineHeight: 40,
    textAlign: 'center'
  },
  buttonInfoStyle: {
    textAlign: 'center',
    color: '#aaa'
  }
}

export {ButtonWaitTime_Style2}
