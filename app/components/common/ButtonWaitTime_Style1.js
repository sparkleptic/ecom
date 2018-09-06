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

class ButtonWaitTime_Style1 extends Component {
  render() {
    return (
      <View style = {styles.buttonContainer}>
        <TouchableOpacity onPress = {this.props.onPress}>
        <View style = {styles.buttonCircleWrapper}>
            <Text style = {styles.buttonTitleStyle}>{this.props.buttonName}</Text>
        </View>
          </TouchableOpacity>
        <Text style = {styles.buttonNumberStyle}>{this.props.buttonInfo}</Text>
      </View>
    )
  }
}

const widthButtonItem = width/3 - 30;

const styles = {
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonCircleWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 64,
    width: 64,
    height: 64,
    borderWidth: 1,
    borderColor: '#3498DB',
  },
  buttonTitleStyle: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#666'
  },
  buttonNumberStyle: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 5,
    color: "#777"
  },
}

export {ButtonWaitTime_Style1}
