import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';

import {
  Button
} from './../../components/common'
import { Actions } from 'react-native-router-flux';
import { List, ListItem } from 'react-native-elements'

var {height, width} = Dimensions.get('window');

const footerContainerHeight = 150;
const productOrderInfoContainerHeight = 60;
const otherColoursContainerHeight = footerContainerHeight - productOrderInfoContainerHeight - 10;

//Calculate initWidth & initHeight of bannerImage
const initWidth = otherColoursContainerHeight * 0.8;
const initHeight = otherColoursContainerHeight;

const list = [
  {
    name: 'Description'
  },
  {
    name: 'Size Charts'
  },
  {
    name: '0 Reviews'
  },
  {
    name: 'About Brands'
  }
]



export default class ProductDescription extends Component  {
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
          <View style = {styles.productNameWrapStyle}>
            <Text style = {styles.productNameStyle}>
              Nike Kids
            </Text>
            <Text style = {styles.ProductDescStyle}>
              Flex Fury 2 (Little Kid)
            </Text>
          </View>
          <View style = {productPriceContainer}>
              <Text style = {productPriceDel}>138.6 USD </Text>
              <Text style = {productPriceIns}>120.6 USD </Text>
          </View>
        </View>
        <View style = {styles.productDescriptionWrapStyle}>
          <Text>
            Flywire cables integrate  the laces  a secure fit
          </Text>
        </View>
        <Button buttonName = "ADD TO CARD"
                buttonNameStyle = {{color: '#27AE60', fontWeight: 'bold'}}
                buttonStyle = {{height: 40, borderColor: '#27AE60', borderWidth: 1}}
                buttonContainerStyle = {{padding: 10}}
         />
         <Button  buttonName = "CHOOSE COLOR"
                  buttonNameStyle = {{color: '#bbb', fontWeight: 'bold'}}
                  buttonStyle = {{height: 40, borderColor: '#ccc', borderWidth: 1}}
                  buttonContainerStyle = {{padding: 10}}
         />
         <Button  buttonName = "CHOOSE SIZE"
                  buttonNameStyle = {{color: '#bbb', fontWeight: 'bold'}}
                  buttonStyle = {{height: 40, borderColor: '#ccc', borderWidth: 1}}
                  buttonContainerStyle = {{padding: 10}}
         />
         <List containerStyle={{marginLeft: 10,marginRight: 10,padding: 0, borderTopWidth: 1,borderColor: '#eee', borderBottomWidth: 0}}>
          {
            list.map((l, i) => (
              <ListItem
                key={i}
                title={l.name}
                titleStyle = {{fontSize: 16}}
                onPress = {()=> console.log('Pressed')}
              />
            ))
          }
        </List>
      </View>
    )
  }
}

const styles = {
  footerContainer: {
    position: 'relative',
    zIndex: 1,
    top: 10,
    padding: 10,
  },
  productOrderInfoContainer: {
    flexDirection: 'row',
    paddingBottom: 10,
    height: productOrderInfoContainerHeight
  },
  productNameWrapStyle: {
    flex: 2,
    paddingLeft: 10
  },
  productNameStyle: {
    fontSize: 20,
    color: '#999'
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
  productDescriptionWrapStyle: {
    padding: 10
  }
}
