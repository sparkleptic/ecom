import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  View,
  ScrollView,
  ListView,
  TouchableHighlight,
  Dimensions
} from 'react-native';
import {Actions, Scene, Router} from 'react-native-router-flux';

import SignInScreen from './SignInScreen'
import RegisterScreen from './RegisterScreen'
import AccountDetail from './AccountDetail'

export default class Account extends Component {
  constructor(props) {
        super(props);
    }

  render() {
    return (
      <SignInScreen />
    );
  }
}

const styles = {
  container: {
  paddingBottom: 50
  }
}
