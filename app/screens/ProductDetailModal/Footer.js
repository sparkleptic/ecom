import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';

import {
  Button
} from './../../components/common'
import ResponsiveImage from 'react-native-responsive-image';

var {height, width} = Dimensions.get('window');

const footerContainerHeight = 150;
const productOrderInfoContainerHeight = 60;
const otherColoursContainerHeight = footerContainerHeight - productOrderInfoContainerHeight - 10;

//Calculate initWidth & initHeight of bannerImage
const initWidth = otherColoursContainerHeight * 0.8;
const initHeight = otherColoursContainerHeight;

export default class Footer extends Component  {
  constructor(props) {
    super(props);
  }
  render() {
    const {
            footerContainer,
            productOrderInfoContainer,
            otherColoursContainer,
            otherColoursImageStyle,
            productPriceContainer,
            productPriceIns,
            productPriceDel,
            CartButtonContainer,
            buttonStyle,
            buttonName
          } = styles;
    return (
      <View style = {footerContainer}>
        <View style = {productOrderInfoContainer} >
        <Button   buttonContainerStyle = {{flex: 1}}
                  buttonName = "ADD"
                  buttonStyle = {{width: 120, height: 40, left: 20, borderRadius: 3}}
                  buttonNameStyle = {{fontWeight: 'bold', fontSize: 16}}
        />

          <View style = {productPriceContainer}>
              <Text style = {productPriceDel}>138.6 USD </Text>
              <Text style = {productPriceIns}>120.6 USD </Text>
          </View>
        </View>
        <View style = {otherColoursContainer}>
          <TouchableOpacity onPress = {() => console.log('Pressed')}>
            <ResponsiveImage style = {otherColoursImageStyle} source = {{uri: "https://firebasestorage.googleapis.com/v0/b/gikfashion.appspot.com/o/ProductImages%2Fproduct_thumb_1.jpg?alt=media&token=b65e83ba-9fd1-485f-a6fc-e0a51668362e"}} initWidth={initWidth} initHeight={initHeight}/>
          </TouchableOpacity>
          <TouchableOpacity onPress = {() => console.log('Pressed')}>
            <ResponsiveImage style = {otherColoursImageStyle} source = {{uri: "https://firebasestorage.googleapis.com/v0/b/gikfashion.appspot.com/o/ProductImages%2Fproduct_thumb_2.jpg?alt=media&token=413b5139-b37d-4115-9880-9e0db0b03469"}} initWidth={initWidth} initHeight={initHeight}/>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = {
  footerContainer: {
    height:footerContainerHeight,
    position: 'relative',
    zIndex: 1,
    top: 10,
    paddingBottom: 10,
  },
  productOrderInfoContainer: {
    flexDirection: 'row',
    paddingBottom: 10,
    height: productOrderInfoContainerHeight
  },
  productPriceContainer: {
    flex: 1,
    right: 20,
    justifyContent: 'center'
  },
  productPriceDel: {
    textAlign: 'right',
    color: "red",
    lineHeight: 23,
    fontSize: 16,
  },
  productPriceIns: {
    textAlign: 'right',
    lineHeight: 23,
    fontSize: 16,
    fontWeight: 'bold',
    color: "#000"
  },
  otherColoursContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 10,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: otherColoursContainerHeight
  },
  otherColoursImageStyle: {
    margin: 2,
    borderWidth: 1,
    borderColor: "#eee"
  }
}
