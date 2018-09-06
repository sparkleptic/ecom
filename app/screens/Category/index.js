import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

import {
  Header,
  SearchBox
} from './../../components/common'
import ProductCard from './ProductCard';

var _data = require('./../../database/gikFashionDatabase.json');

export default class Category extends Component  {
  constructor(props) {
    super(props);
  }
  render() {
    const {searchContainerStyle} = styles;
    return (
      <ScrollView>
        <ProductCard />
      </ScrollView>
    )
  }
}

const styles = {

}
