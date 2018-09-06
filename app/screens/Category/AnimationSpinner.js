import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Dimensions,
  ListView,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { ProductCard_Style3, ActivityIndicatorLoading } from './../../components/common'
import ResponsiveImage from 'react-native-responsive-image';

var {height, width} = Dimensions.get('window');
console.log(width,height)
//Calculate initWidth & initHeight of bannerImage
const initWidth = width / 2 - 10;
const initHeight = 1.3 * initWidth;

import Spinner from 'react-native-spinkit';
var _data = require('./../../database/ProductDatabase.json');

export default class ProductCard extends React.Component  {
    constructor(props) {
      super(props);
      this.state = {
        index: 0,
        types: ['CircleFlip', 'Bounce', 'Wave', 'WanderingCubes', 'Pulse', 'ChasingDots', 'ThreeBounce', 'Circle', '9CubeGrid', 'WordPress', 'FadingCircle', 'FadingCircleAlt', 'Arc', 'ArcAlt'],
        size: 100,
        color: "#000",
        isVisible: true
      };
  }
  next() {
    if (this.state.index++ >= this.state.types.length)
      this.setState({index: 0})
    else
      this.setState({index: this.state.index++})
  }

  increaseSize() {
    this.setState({size: this.state.size + 10});
  }

  changeColor() {
    this.setState({color: '#'+Math.floor(Math.random()*16777215).toString(16)});
  }

  changeVisibility() {
    this.setState({isVisible: !this.state.isVisible});
  }
  render() {
    var type = this.state.types[this.state.index];
    return (
      <View style={styles.container}>
        <Spinner style={styles.spinner} isVisible={this.state.isVisible} size={this.state.size} type={type} color={this.state.color}/>

        <Text style={styles.text}>Type: {type}</Text>

        <TouchableOpacity style={styles.btn} onPress={this.next.bind(this)}>
          <Text style={styles.text}>Next</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={this.increaseSize.bind(this)}>
          <Text style={styles.text}>Increase size</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={this.changeColor.bind(this)}>
          <Text style={styles.text}>Change color</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={this.changeVisibility.bind(this)}>
          <Text style={styles.text}>Change visibility</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = {
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d35400',
  },

  spinner: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  btn: {
    marginTop: 20
  },

  text: {
    color: "white"
  }

}
