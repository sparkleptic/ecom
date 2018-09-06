import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  Dimensions,
  View,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

var {height, width} = Dimensions.get('window');

import {
  Button
} from './../../components/common'


class RequestView extends Component {
  constructor(props) {
        super(props);
    }

  render() {
    return (
      <View style={styles.container}>
        <Icon style = {styles.IconStyle} name = "note" size={64}/>
        <Text style = {styles.TextStyle}>No Top Answer Requests</Text>
        <Button buttonName = "See Questions for You"
                buttonNameStyle = {{color: 'white'}}
                buttonStyle = {{backgroundColor: '#2196F3', height: 35, marginTop: 20, padding: 10, borderRadius: 5, borderWidth: 0}}
                onPress = {()=> Actions.FeedView(passProps = {title: "TOP QUESTIONS"})}
        />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    marginTop: -120,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
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

export {RequestView}
