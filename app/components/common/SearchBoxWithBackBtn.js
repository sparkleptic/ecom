// Import libraries for making a component
import React, { Component } from 'react';
import {
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Dimensions,
    Text,
    Platform
} from 'react-native';
import {SearchBar,Icon} from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
var {height, width} = Dimensions.get('window');
// Make a component
const SearchBoxWithBackBtn = ({buttonName, placeholder, onPress}) => {
    const {containerStyle, buttonNameContainerStyle, buttonNameStyle, inputContainerStyle,inputStyle} = styles;
    return (
      <View style = {styles.containerStyle}>
        <View style = {styles.backButtonContainer}>
          <Icon
                name='ios-arrow-back'
                type='ionicon'
                color='#fff'
                size = {28}
                containerStyle= {{marginRight: 15}}
                onPress = {()=>Actions.pop()}
                />
        </View>
        <View>
        <SearchBar  lightTheme
                    containerStyle = {styles.searchBarContainer}
                    inputStyle = {{backgroundColor: '#f5f5f5', borderColor: 'transparent', borderWidth: 0}}
                    placeholder='Ask Quora...'
                    placeholderTextColor = '#999'
                    autoFocus = {true}
                    />
        </View>
      </View>
    );
};

// Make the component available to other parts of the app

const styles = {
  containerStyle: {
    marginTop: -20,
    position: 'absolute',
    top: 0,
    height: 80,
    paddingTop: Platform.OS === 'android' ? 20 : 30,
    width: width,
    flex: 1,
    backgroundColor: '#E3868F',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  backButtonContainer: {
    paddingLeft: 10,
    justifyContent: 'center'
  },
  searchBarContainer: {
    width: width - 40,
    backgroundColor:'#E3868F'
  }
}

export { SearchBoxWithBackBtn };
