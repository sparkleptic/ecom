import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class Button extends Component  {
  constructor(props) {
    super(props);
  }
  render() {
    const { buttonContainer, buttonStyle, buttonName, iconStyle } = styles;
    return (
      <View style = {[buttonContainer, this.props.buttonContainerStyle]}>
          <TouchableOpacity onPress={this.props.onPress}>
              <View style = {[buttonStyle,this.props.buttonStyle ]}>
                  <View style = {this.props.iconContainerStyle}>
                    {this.props.useIcon ? <Icon name = {this.props.iconName} style = {[iconStyle,this.props.iconStyle]}/> : <View />}
                  </View>
                  <View style = {this.props.buttonNameContainer}>
                    <Text style = {[buttonName, this.props.buttonNameStyle ]}>{this.props.buttonName}</Text>
                  </View>
              </View>
          </TouchableOpacity>
      </View>
    )
  }
}

const styles = {

  buttonNameContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  buttonStyle: {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    justifyContent: 'center',
    borderRadius: 2,
    borderWidth: 2,
    borderColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonNameStyle: {
    fontWeight: 'bold',
    color: "#000",
    textAlign: 'center'
  }
}

export { Button };
