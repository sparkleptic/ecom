import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Dimensions, ListView } from 'react-native';

import {
  Button
} from './../../components/common'
import Collapsible from 'react-native-collapsible';

var {height, width} = Dimensions.get('window');
var _productInfo = require('./../../database/ProductInfo.json');
const productInfo = _productInfo[0];

export default class InfoModal extends Component  {
  constructor(props) {
    super(props);
  }
  state = {
   collapsed: true,
   collapsedButtonName: "+ Info"
  };

  _toggleExpanded = () => {
    this.setState({ collapsed: !this.state.collapsed });
    this.setState({ collapsedButtonName: this.state.collapsed ? "- Info" : "+ Info"})
  }

  render() {
    const {
            infoContainer,
          } = styles;
    console.log(productInfo);
    return (
      <View style = {infoContainer}>
       <Button  buttonName = {this.state.collapsedButtonName}
                onPress={this._toggleExpanded}
                buttonStyle = {{width: 80, height: 35, left: 20, borderColor: '#E3868F'}}
                buttonNameStyle = {{fontWeight: 'bold', fontSize: 16, color: '#E3868F'}}
       />
         <Collapsible collapsed={this.state.collapsed}>
           <View style={styles.contentCollapse}>
              <View style = {styles.productDecsContainer}>
                <Text style = {styles.productName}>{productInfo.productName}</Text>
                <Text style = {styles.productRef}>{productInfo.productRef}</Text>
                <Text style = {styles.productColor}>{productInfo.productColor}</Text>
                <Text style = {styles.productDescription}>{productInfo.productDescription}</Text>
              </View>
              <View style = {styles.productMoreInfoContainer}>
                <View style = {styles.productMoreInfoRow}>
                  <TouchableOpacity>
                      <View>
                          <Text style = {styles.productMoreInfoRowText}>Share</Text>
                      </View>
                  </TouchableOpacity>
                </View>
                <View style = {styles.productMoreInfoRow}>
                  <TouchableOpacity>
                      <View>
                          <Text style = {styles.productMoreInfoRowText}>In-store availability</Text>
                      </View>
                  </TouchableOpacity>
                </View>
                <View style = {styles.productMoreInfoRow}>
                  <TouchableOpacity>
                      <View>
                          <Text style = {styles.productMoreInfoRowText}>Composition and Care</Text>
                      </View>
                  </TouchableOpacity>
                </View>
                <View style = {styles.productMoreInfoRow}>
                  <TouchableOpacity>
                      <View>
                          <Text style = {styles.productMoreInfoRowText}>Size Guide</Text>
                      </View>
                  </TouchableOpacity>
                </View>
              </View>
           </View>
         </Collapsible>
      </View>
    )
  }
}

const styles = {
  infoContainer: {
    top: 30,
    position: 'absolute',
    zIndex: 99,
    overflow: 'hidden',
  },
  contentCollapse: {
    width,
    marginTop: 10,
    backgroundColor: "rgba(255, 255, 255, 0.85)"
  },
  productDecsContainer: {
    padding: 15,
  },
  productName: {
    fontWeight: "bold",
    paddingBottom: 5,
  },
  productRef: {
    fontSize: 13,
    paddingBottom: 5,
    color: "#777"
  },
  productColor: {
    fontWeight: "bold",
    fontSize: 13,
    paddingBottom: 5
  },
  productDescription: {
    fontSize: 13,
    color: "#777"
  },
  productMoreInfoContainer: {
    backgroundColor:"#fff",
    width
  },
  productMoreInfoRow: {
    justifyContent: 'center',
    height: 45,
    padding: 16,
    borderWidth: 0.5,
    borderColor: "#f2f2f2"
  },
  productMoreInfoRowText: {
    fontSize: 15
  }
}
