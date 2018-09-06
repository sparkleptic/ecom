import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
// import { Actions } from 'react-native-router-flux';

import {
  Header,
  SearchBox
} from './../../components/common'
import ProductCard from './ProductCard';
import { Actions, Reducer } from 'react-native-router-flux';
var _data = require('./../../database/gikFashionDatabase.json');

const reducerCreate = params => {
const defaultReducer = Reducer(params);
return (state, action) => {
  alert("ABCD :" + action);
  return defaultReducer(state, action);
}
};
export default class Category extends Component  {
  constructor(props) {
    super(props);
  }
  render() {
    // console.log(this.props.categoryId);
    const {searchContainerStyle} = styles;
    return (
      <ScrollView>
        <ProductCard categoryId={this.props.categoryId}/>
      </ScrollView>
    )
  }
}

const styles = {

}
