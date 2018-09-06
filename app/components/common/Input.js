// Import libraries for making a component
import React, { Component } from 'react';
import {
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Text
} from 'react-native';

// Make a component
const Input = ({label, onFocus, labelStyle, inputStyle, placeholder,placeholderColor, note, value, secureTextEntry, image}) => {
    const {containerStyle, labelTextStyle, noteStyle} = styles;
    return (
      <View style={containerStyle}>
          <View style = {styles.labelGroupContainer}>
          {image ? <Image style = {{width: 24, height: 24}} source = {image} /> : <View />}
          <Text style={[labelTextStyle, labelStyle]}>
              {label}
          </Text>
          </View>
          <TextInput  style={[styles.inputStyle, inputStyle]}
                      placeholder ={placeholder}
                      placeholderTextColor = {placeholderColor}
                      secureTextEntry = {secureTextEntry}
                      underlineColorAndroid='transparent'
                      onFocus = {onFocus}
          />
          { note ? <Text style={noteStyle}> {note} </Text> : <View/> }
      </View>
    );
};

// Make the component available to other parts of the app

const styles = {
  containerStyle: {
    flex: 1
  },
  labelGroupContainer: {
    flexDirection: 'row'
  },
  labelTextStyle: {
      color:'#999',
      fontWeight:'bold',
      fontSize:14,
      marginBottom: 10
  },
  noteStyle: {
      marginTop: 5,
      fontSize: 15,
      color:'#999'
  },
  inputStyle: {
      flex: 1,
      height: 40,
      fontSize: 16,
      fontWeight:'500',
      borderWidth: 1,
      borderColor:'#ccc'
  }
}

export { Input };
