import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Dimensions,
  Image,
  ListView,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import {
  Button
} from './../../components/common';

import ResponsiveImage from 'react-native-responsive-image';

var {height, width} = Dimensions.get('window');
console.log(width,height)
//Calculate initWidth & initHeight of bannerImage
const initWidth = width / 2 - 10;
const initHeight = 1.3 * initWidth;

class ProductCard_Style1 extends Component  {
  constructor(props) {
      super(props);
      this.state = {

      }
  }
  render() {
    return (
      <View style = {styles.itemListViewStyle}>
        <View style = {styles.productImageContainerStyle}>
          <Image style = {styles.itemListImage}
                              source = {{uri: this.props.productImages}}
                              resizeMode = "cover"
            />
        </View>
        <View style = {styles.itemListViewDescWrap}>
          <Text style={styles.itemListViewTitle}>{this.props.productName}</Text>
          <Text style={styles.itemListViewDesc}>{this.props.productRef}</Text>
          <Text style={styles.itemListViewDesc}>{this.props.productColor}</Text>
          <Text style={styles.itemListViewPriceIns}>{this.props.productPriceIns}</Text>
          { this.props.productPriceDel ? <Text style={styles.itemListViewPriceDel}>{this.props.productPriceDel}</Text> : <View />}
        
          { this.props.qty ? <Button  buttonContainerStyle = {{flex: 1}}
                                      buttonStyle = {{width: 150,borderWidth: 0, alignItems: 'flex-start'}}
                                      buttonName = {"QTY: " + this.props.qty}
                                      buttonNameStyle = {[styles.itemListViewQTY, {textAlign: "left"}]}
                                      onPress = {this.props.onPress}
                                      />
                           : <View />}
        </View>
      </View>
    )
  }
}

const styles = {
  itemListViewStyle: {
    flexDirection: 'row',
    borderTopWidth: 0.5,
    borderTopColor: '#ddd',
    borderBottomWidth: 0.5,
    borderBottomColor: '#ddd',
    paddingTop: 10,
    paddingBottom: 10,
  },
  itemListImage: {
    alignItems: 'center',
    width: initWidth,
    height: initWidth,
    marginRight: 20
  },
  itemListViewDescWrap: {
    padding: 5,
  },
  itemListViewDesc: {
      color: '#777'
  },
  itemListViewTitle: {
    color: "#444",
    fontSize: 16,
    fontWeight: 'bold',
    paddingBottom: 10
  },
  itemListViewPriceIns: {
    color: "#000",
    fontSize: 14,
    textAlign: 'left',
    marginTop: 15
  },
  itemListViewQTY: {
    marginTop: 20,
    fontWeight: 'bold',

  }
}
export {ProductCard_Style1}
