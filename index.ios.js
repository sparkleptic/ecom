/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
 import React, { Component } from 'react';
 import {
   AppRegistry,
   View,
   Dimensions,
   Image,
   LayoutAnimation
 } from 'react-native';
 import RootRouter from './app/App.js'
 var {height, width} = Dimensions.get('window');

 export default class eFashion extends Component {
   constructor(props) {
       super(props);
       this.state = {
         loading: true
       };
   }
   render() {
     return (
             <RootRouter />
         );
   }
 }

 const styles = {
   loading: {
     position: 'absolute',
     top: 0,
     width: width,
     height: height,
     overflow: "hidden",
     zIndex: 99,
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: '#fff',
     marginTop: -15
     }
 }

AppRegistry.registerComponent('eFashion', () => eFashion);
