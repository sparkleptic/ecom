import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Dimensions,
  ListView,
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card } from 'react-native-elements'
var {height, width} = Dimensions.get('window');
console.log(width,height)
//Calculate initWidth & initHeight of bannerImage
const initWidth = width / 2 - 10;
const initHeight = 1.3 * initWidth;

class ProductCard_Style3 extends Component  {
  constructor(props) {
      super(props);
  }
  render() {
    // console.log(this.props.productImages);
    // console.log('*******************************');
    
    return (
      <TouchableOpacity onPress = {this.props.onPress}>
      <View style = {styles.productItem}>
        <View style = {styles.productImages}>
          <Image source ={{uri: this.props.productImages}} style = {{width: initWidth, height: initWidth * (293/219)}}/>
        </View>
        <View style = {styles.productDesc}>
          <Text style={{marginBottom: 5, marginTop: 10, color: '#444', fontSize: 14, textAlign:'center'}}>
            {this.props.productName}
          </Text>
          <View style = {styles.productPriceWraperStyle}>
            <Text style = {styles.productPriceIns}>{this.props.productPriceIns}</Text>
            <Text style = {styles.productPriceDel}>{this.props.productPriceDel}</Text>
          </View>
        </View>
        </View>
        </TouchableOpacity>
    )
  }
}

const styles = {
  productItem: {
    paddingLeft: 5,
    paddingRight: 5,
    width: width / 2 - 10,
    marginBottom: 30
  },
  productPriceWraperStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  productPriceIns: {
    color: '#FF2D55',
    fontWeight: 'bold',
    marginRight: 15
  },
  productPriceDel: {
    fontSize: 13,
    textDecorationLine: 'line-through',
    color: '#aaa'
  }
}
export {ProductCard_Style3}
