import React, {Component} from 'react';
import {
  View,
  Text
} from 'react-native';

import Icon from 'react-native-vector-icons/SimpleLineIcons';

const TabIcon = ({selected, iconName, title}) => {
    const { container, iconStyle, iconSelectedStyle, titleStyle, titleSelectedStyle } = styles;
    return (
        <View style={container}>
          <Icon name = {iconName} size={20} style = {[iconStyle, {color: selected ? iconSelectedStyle.color : iconStyle.color }]}/>
          <Text style={[titleStyle, {color: selected ? titleSelectedStyle.color : titleStyle.color }]}>{title}</Text>
        </View>
      )
}

const styles = {
  container: {
    flex:1,
    flexDirection:'column',
    alignItems:'center',
    alignSelf:'center',
    justifyContent: 'center',
  },
  iconStyle: {
    marginBottom: 5,
    color: '#999'
  },
  iconSelectedStyle: {
    color: '#E3868F'
  },
  titleStyle: {
    fontSize: 12,
    fontWeight: '500',
    color: '#999'
  },
  titleSelectedStyle: {
    color: '#E3868F'
  }
}

export { TabIcon };
