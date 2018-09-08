import React, { Component } from 'react';
import {
  Platform,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  View,
  Image,
  Text
} from 'react-native';
import oauthSignature from 'oauth-signature';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';
const loading = {uri: "https://simpletexting.com/wp-content/themes/new_simpletexting/images/gif/loading-ttcredesign.gif"}
import Swiper from 'react-native-swiper';

var {height, width} = Dimensions.get('window');
const Slide = props => {
return (<View style={styles.slide}>
  <Image onLoad={props.loadHandle.bind(null, props.i)} style={styles.image} source={{uri: props.uri}} />
  {
    !props.loaded && <View style={styles.loadingView}>
      <Image style={styles.loadingImage} source={loading} />
    </View>
  }
</View>)
}

const heightImageSlide = (Platform.OS === 'ios'? height - 150 - 70 : height - 150); //heightImageSlide = View.height - Footer.height - Navigator.height
export default class Slider extends Component  {
  constructor(props) {
        super(props)
        this.state = {
        imgList: [
          // 'https://img.romwe.com/images/201610/1476848192985507743.jpg',
          // 'https://img.romwe.com/images/201610/1476848194613987006.jpg',
          // 'https://img.romwe.com/images/201610/1476848195450976517.jpg'
        ],
        loadQueue: [0, 0, 0, 0]
      }
      this.loadHandle = this.loadHandle.bind(this)
  }
  loadHandle (i) {
      let loadQueue = this.state.loadQueue
      loadQueue[i] = 1
      this.setState({
        loadQueue,
        productdata:'',
        productUrl:''
      })
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
        console.log(dataArray[0][0]['images']);
        
        let imgArray =  new Array;
        dataArray[0][0]['images'].map((y) => {
          // return (<Text>{y.prnt_usernamez}</Text>);
          imgArray.push(y.src);
          // console.log(y.src);
        })
        that.setState({ imgList: imgArray });
        // console.log(imgArray);
        
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
    return (
      // this.state.productdata == '' ?

        <View>
          <Swiper loadMinimal loadMinimalSize={3}
                  style={styles.wrapper}
                  height={heightImageSlide} loop={true}
                  horizontal={true}
                  paginationStyle = {{right: null, left: 15}}
          >
            {
              this.state.imgList.map((item, i) => <Slide
                loadHandle={this.loadHandle}
                loaded={!!this.state.loadQueue[i]}
                uri={item}
                i={i}
                key={i} />)
            }
          </Swiper>
        </View>
        // :
        // <View></View>
    )
  }
}

const styles = {
  wrapper: {
    backgroundColor: "#fff"
  },
 slide: {
   flex: 1,
   justifyContent: 'center',
   backgroundColor: '#fff'
 },
 image: {
   width,
   flex: 1,
   backgroundColor: '#fff'
 },
 loadingView: {
   position: 'absolute',
   justifyContent: 'center',
   alignItems: 'center',
   left: 0,
   right: 0,
   top: 0,
   bottom: 0,
   backgroundColor: '#fff'
 },
 loadingImage: {
   width: 60,
   height: 60
 },
}
