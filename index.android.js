/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Image,
  Dimensions,
  LayoutAnimation
} from 'react-native';
var {height, width} = Dimensions.get('window');
import RootRouter from './app/App.js'

export default class eFashion extends Component {
  constructor(props) {
      super(props);
      this.state = {
        loading: true
      };
  }
  closeActivityIndicator() {
      setTimeout(() => {
        LayoutAnimation.easeInEaseOut();
         this.setState({loading: false});
      }, 2500);
   }
   componentWillMount(){
    //  this.closeActivityIndicator();
   }
   componentDidMount() {
      this.closeActivityIndicator();
   }
  render() {
    return (
      <View style={{flex: 1}}>
          { this.state.loading ?
            <View style = {styles.loading}>
            <Image style={{ position: 'absolute', left: 0, top: 0, width: width, height: height }}
              source={require('./app/resources/images/splash.png') } />
            </View>
          : <RootRouter />
          }          
      </View>
    );
  }
}

const styles = {

}

AppRegistry.registerComponent('eFashion', () => eFashion);
