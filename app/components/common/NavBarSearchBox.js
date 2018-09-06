// Import libraries for making a component
import React, { Component } from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  LayoutAnimation,
  Platform
} from 'react-native';
import { SearchBar, Icon } from 'react-native-elements'
import { Actions } from 'react-native-router-flux';
import {
  SearchBox
} from './'
var {height, width} = Dimensions.get('window');

class NavBarSearchBox extends Component {
  constructor(props) {
        super(props);
        this.state={
        }
    }
  render() {
    const {containerStyle} = styles;
    return (
      <View style = {styles.containerStyle}>
      <SearchBar  lightTheme
                  containerStyle = {styles.searchBarContainer}
                  inputStyle = {{backgroundColor: '#f5f5f5', borderColor: 'transparent', borderWidth: 0}}
                  placeholder='Product Name...'
                  placeholderTextColor = '#999'
                  onFocus = {() => Actions.SearchPage()}
                  />
      </View>
    );
  }
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
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#E3868F',
  },
  searchBarContainer: {
    width: width,
    backgroundColor:'#E3868F'
  }
}

export { NavBarSearchBox };
