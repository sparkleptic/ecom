import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Dimensions, ListView, Share } from 'react-native';
import oauthSignature from 'oauth-signature';
import axios from 'axios';
import {
  Button
} from './../../components/common'
import Collapsible from 'react-native-collapsible';
import HTMLView from 'react-native-htmlview';



var { height, width } = Dimensions.get('window');
var _productInfo = require('./../../database/ProductInfo.json');
const productInfo = _productInfo[0];

export default class InfoModal extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    collapsed: true,
    collapsedButtonName: "+ Info",
    productdata: '',
    dataDimension: ''
  };

  _toggleExpanded = () => {
    this.setState({ collapsed: !this.state.collapsed });
    this.setState({ collapsedButtonName: this.state.collapsed ? "- Info" : "+ Info" })
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

        var dataDimension = new Array;
        dataDimension.push(dataArray[0][0]['dimensions']);
        that.setState({ dataDimension: dataDimension[0] });

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

  shareProduct(data){

		Share.share(
			{
        message: "Name:" + data + "\n" + "Type:" + data ,
        url: Share
			}).then(result => console.log(result)).catch(errorMsg => console.log(errorMsg));

  }
  render() {
    // console.log(this.state.productdata);


    const {
      infoContainer,
    } = styles;
    return (
      this.state.productdata == '' ?
        <View></View>
        :
        <View style={infoContainer}>
          <Button buttonName={this.state.collapsedButtonName}
            onPress={this._toggleExpanded}
            buttonStyle={{ width: 80, height: 35, left: 20, borderColor: '#E3868F' }}
            buttonNameStyle={{ fontWeight: 'bold', fontSize: 16, color: '#E3868F' }}
          />
          <Collapsible collapsed={this.state.collapsed}>
            <View style={styles.contentCollapse}>
              <View style={styles.productDecsContainer}>
                <Text style={styles.productName}>{this.state.productdata.name}</Text>
                <Text style={styles.productRef}>{this.state.productdata.sku}</Text>
                <Text style={styles.productColor}>{productInfo.productColor}</Text>
                {/* <Text style={styles.productDescription}>{this.state.productdata.description}</Text> */}
                <HTMLView
                  value={this.state.productdata.description}
                  stylesheet={styles}
                />
              </View>
              <View style={styles.productMoreInfoContainer}>
                <View style={styles.productMoreInfoRowShare}>
                  <TouchableOpacity onPress={() => this.shareProduct('Ecom Fashion')}>
                    <View>
                      <Text style={styles.productMoreInfoRowText}>Share</Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={styles.productMoreInfoRow}>
                  <TouchableOpacity>
                    <View>
                      <Text style={styles.productMoreInfoRowText}>{this.state.productdata.in_stock ? 'In-store availability' : 'Out of Stock'}</Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={styles.productMoreInfoRow}>
                  <TouchableOpacity>
                    <View>
                      <Text style={styles.productMoreInfoRowText}>Composition and Care</Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={styles.productMoreInfoRow}>
                  <TouchableOpacity>
                    <View>
                      <Text style={styles.productMoreInfoRowText}>Size Guide:[Height: {this.state.dataDimension.height}, Width: {this.state.dataDimension.width}, Length: {this.state.dataDimension.length}]</Text>
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
    backgroundColor: "#fff",
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
  },
  productMoreInfoRowShare:{
    justifyContent: 'center',
    height: 45,
    padding: 16,
    borderWidth: 0.5,
    borderColor: "#f2f2f2",
    backgroundColor:'#E3A0A3'
  }
}
