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
          'https://img.romwe.com/images/201610/1476848192985507743.jpg',
          'https://img.romwe.com/images/201610/1476848194613987006.jpg',
          'https://img.romwe.com/images/201610/1476848195450976517.jpg'
        ],
        loadQueue: [0, 0, 0, 0]
      }
      this.loadHandle = this.loadHandle.bind(this)
  }
  loadHandle (i) {
      let loadQueue = this.state.loadQueue
      loadQueue[i] = 1
      this.setState({
        loadQueue
      })
    }
  render() {
    return (
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
