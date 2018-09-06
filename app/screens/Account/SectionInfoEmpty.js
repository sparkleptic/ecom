import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  View,
  ListView,
  TouchableHighlight,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import {
  Button
} from './../../components/common'


export default class SectionInfoEmpty extends Component {
  constructor(props) {
        super(props);
    }

  render() {
    return (
      <View style={styles.container}>
        <Icon style = {styles.IconStyle} name = {this.props.iconName} size={64}/>
        <Text style = {styles.TextStyle}>{this.props.descInfoEmpty}</Text>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -80,
    paddingLeft: 15,
    paddingRight: 15
  },
  IconStyle: {
    color: "#bbb"
  },
  TextStyle: {
    color: "#bbb",
    fontSize: 18
  }
}
