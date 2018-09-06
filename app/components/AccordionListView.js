import React, { Component } from 'react';
import oauthSignature from 'oauth-signature';
import axios from 'axios';
import signedUrl from '../resources/SignedUrl';
import {
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Text,
  Image,
  View,
  ListView,
  TouchableHighlight,
} from 'react-native';
import {Actions, Scene, Router} from 'react-native-router-flux';

import * as Animatable from 'react-native-animatable';
import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';

import CollectionListView from './CollectionListView'

import ResponsiveImage from 'react-native-responsive-image';

var {height, width} = Dimensions.get('window');

var _data = require('../database/gikFashionDatabase.json');
var _subCollection = "100";

//Calculate initWidth & initHeight of collectionImage
const initWidth = 960;
console.log(initWidth);
const initHeight = 286;

export default class AccordionView extends Component {
  constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
          dataSource: ''
        };
    }

    
  state = {
    activeSection: false,
    collapsed: true
  };

  componentDidMount() {
    let url = this.signedUrl("products/categories", "GET", {});
    this.setState({ productUrl: url });
    console.log(url);
    let that =  this;
    axios.get(url)
      .then(function (response) {
        console.log("********************************");
        console.log(response.data);
        console.log("********************************");
        that.setState({ dataSource: response.data});
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

  _toggleExpanded = () => {
    this.setState({ collapsed: !this.state.collapsed });
  }

  _setSection(section) {
    this.setState({ activeSection: section });
  }

  _renderHeader(section, i, isActive) {
      return (
        <View>
          {section.name !== 'Uncategorized' ? 
          <TouchableOpacity onPress = {() => Actions.Category(passProps = { title: section.name , categoryId : section.id }) }>
            <View style = {styles.headerView}>
            </View>
            <View>
              {/* <Text>{section.name}</Text> */}
              <ResponsiveImage style={styles.collectionImage} source={{ uri: 'https://img.romwe.com/images/romwe.com/1487302743105300623.jpg'}} initWidth={initWidth} initHeight={initHeight}/>
            </View>
          </TouchableOpacity>
            : <Text></Text>}
        </View>
      );
  }
  _renderContent(section, i, isActive) {
      _subCollection = "";
      console.log("None subCollection");
      return <View />
  }

  render() {
    console.log(this.state.dataSource);
    return (
      <View style={styles.container}>
        <Accordion
          activeSection={this.state.activeSection}
          sections={this.state.dataSource !== '' ? this.state.dataSource :_data}
          renderHeader={this._renderHeader}
          renderContent={this._renderContent}
          duration={400}
          onChange={this._setSection.bind(this)}
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  collectionImage: {
    width,
    height: width * (286/960),
    padding: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '300',
    marginBottom: 20,
  },
  headerView: {
    backgroundColor: '#fff',
    height: 4,
    flex: 1,
    justifyContent: 'center'
  },
  headerText: {
    padding: 10,
    fontSize: 22,
    fontWeight: '600',
  },
  content: {
    padding: 20,
    backgroundColor: '#fff',
  },
  active: {
  },
  inactive: {
    backgroundColor: '#fff',
  },
  selectors: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  selector: {
    padding: 10,
  },
  activeSelector: {
    fontWeight: 'bold',
  },
  selectTitle: {
    fontSize: 14,
    fontWeight: '500',
    padding: 10,
  },
});
