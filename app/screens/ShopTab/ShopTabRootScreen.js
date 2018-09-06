import React, { Component } from 'react';
import {
    View,
    LayoutAnimation,
    Picker,
    Text,
    TouchableOpacity,
    StyleSheet,
    Alert,
    ScrollView,
    Dimensions,
    Platform
} from 'react-native';

import ScrollableTabView, { DefaultTabBar, } from 'react-native-scrollable-tab-view';
import {Actions} from 'react-native-router-flux';
import {
  FeedView,
  BookmarksView,
  TrendingView
} from './'

var {height, width} = Dimensions.get('window');
import {
  TabIcon,
  FacebookTabBar,
  Slider,
  Promotionbar,
} from './../../components/common';
import Icon from 'react-native-vector-icons/Ionicons';
import { SearchBar } from 'react-native-elements'
import Category from '../Category'
import ScrollableTabViewCustom from './ScrollableTabViewCustom'
class ShopTabRootScreen extends Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
          <ScrollView>
            <Promotionbar />
            <Slider />
            <ScrollableTabViewCustom />
          </ScrollView>
        )
    }
}
const styles = {
  tabView: {
    flex: 1,
    backgroundColor: '#eee',
  },
  card: {
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: 'rgba(0,0,0,0.1)',
    margin: 5,
    height: 150,
    padding: 15,
    shadowColor: '#ccc',
    shadowOffset: { width: 2, height: 2, },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
};
export {ShopTabRootScreen}
