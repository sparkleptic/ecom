import React, { Component } from 'react';
import oauthSignature from 'oauth-signature';
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
import { Actions, Reducer } from 'react-native-router-flux';
import { ProductCard_Style3 } from './../../components/common';
import axios from 'axios';


var { height, width } = Dimensions.get('window');

//Calculate initWidth & initHeight of bannerImage
const initWidth = width / 2 - 10;
const initHeight = 1.3 * initWidth;

var _data = require('./../../database/ProductDatabase.json');

export default class ProductCard extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(_data),
      loading: true,
      productUrl: '',
      dataSource_real: ''
    };
  }

  componentDidMount() {
    let that = this;
    let dsa = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    let homepageId = this.props.categoryId == undefined ? 23 : this.props.categoryId;
    let url = this.signedUrl("products", "GET", { category: homepageId });
    this.setState({ productUrl: url });
    axios.get(url)
      .then(function (response) {
        that.setState({ dataSource_real: dsa.cloneWithRows(response.data) });
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


  renderRow(dataItem) {
    let img = dataItem.images;
    let item;
    if (img == undefined) {
      item = 'http://sunmax.ourgoogle.in/clients/wprestapi/wp-content/plugins/woocommerce/assets/images/placeholder.png';
    } else {
      let img_final = Object.values(img[0]);
      item = img_final[5];
    }

    return (
      <ProductCard_Style3 onPress={() => console.log("Pressed")}
        productName={dataItem.name}
        productImages={item}
        productPriceDel={dataItem.regular_price}
        productPriceIns={dataItem.price}
        onPress={() => Actions.ProductDetailModal(passProps = { title: dataItem.name, productSlug: dataItem.slug })}
      />

    )
  }
  render() {
    return (
      <ListView contentContainerStyle={styles.gridContainer}
        style={styles.itemListViewWrap}
        dataSource={this.state.dataSource_real !== '' ? this.state.dataSource_real : this.state.dataSource}
        renderRow={this.renderRow}
        scrollEnabled={false}
      />
    )
  }
}

const styles = {
  gridContainer: {
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
}
