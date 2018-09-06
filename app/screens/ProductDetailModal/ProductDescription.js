import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import oauthSignature from 'oauth-signature';
import axios from 'axios';
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
    this.state = {
      productdata:''
    }
  }

  componentDidMount() {
    let that = this;
    let productSlug = this.props.productSlug == undefined ? '' : this.props.productSlug;
    let url = this.signedUrl("products", "GET", { slug: productSlug });
    this.setState({ productUrl: url });
    axios.get(url)
      .then(function (response) {
        that.setState({ productdata: response.data });

        let dataObject = response.data
        var dataArray = new Array;
        dataArray.push(dataObject);
        console.log(dataArray[0][0]);
        that.setState({ productdata: dataArray[0][0] });

      })
      .catch(function (error) {
        console.log(error);
      });
  }

  toQueryString(obj) {
    var parts = [];
    for (var i in obj) {
      if (obj.hasOwnProperty(i)) {
        parts.push(encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]));
      }
    }
    return parts.join('&');
  }

  getTimeStamp() {
    return Math.round(+new Date() / 1000);
  }

  getNonce() {
    return Math.random() * 1.2483;
  }

  signedUrl(endPoint, method, filters = {}) {
    let oauth_data = {
      oauth_consumer_key: 'ck_56fe7dd9f541535e374b1b56a14da12140dc80f9',
      oauth_nonce: this.getNonce(),
      oauth_signature_method: 'HMAC-SHA1',
      oauth_timestamp: this.getTimeStamp(),
      oauth_version: '1.0',
      per_page: '10'
    };
    oauth_data = Object.assign({}, oauth_data, filters);

    let url = 'http://sunmax.ourgoogle.in/clients/wprestapi/wp-json/wc/v2/' + endPoint;
    const consumer_secret = 'cs_6a0ea4ebc36cd6bf38f359da43fd813b423605ef';
    oauth_data.oauth_signature = oauthSignature.generate(method, url, oauth_data, consumer_secret);
    let oauth_args = this.toQueryString(oauth_data);
    let final_request_uri_str = url + '?' + oauth_args;
    return final_request_uri_str;
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
      this.state.productdata == '' ? 
      <View></View>
      :
      <View style = {footerContainer}>
        <View style = {productOrderInfoContainer} >
          <View style = {styles.productNameWrapStyle}>
            <Text style = {styles.productNameStyle}>
              {this.state.productdata.name}
            </Text>
            <Text style = {styles.ProductDescStyle}>
                {this.state.productdata.short_description}
            </Text>
          </View>
          <View style = {productPriceContainer}>
              <Text style={productPriceDel}>{this.state.productdata.regular_price} </Text>
              <Text style={productPriceIns}>{this.state.productdata.price} </Text>
          </View>
        </View>
        <View style = {styles.productDescriptionWrapStyle}>
          <Text>
              {this.state.productdata.description} 
          </Text>
        </View>
        <Button buttonName = "ADD TO CART"
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
