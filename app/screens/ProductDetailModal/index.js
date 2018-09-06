import React, { Component } from 'react';
import {
  ScrollView,
  TouchableOpacity,
  Dimensions,
  View,
  Image,
  Text
} from 'react-native';
import { Actions } from 'react-native-router-flux';
const loading = {uri: "https://simpletexting.com/wp-content/themes/new_simpletexting/images/gif/loading-ttcredesign.gif"}
import Swiper from 'react-native-swiper';

import Slider from './Slider'
import InfoModal from './InfoModal'
import ProductDescription from './ProductDescription'

export default class ProductDetailModal extends Component  {
  constructor(props) {
        super(props)
  }
  render() {
    // productSlug
    // console.log(this.props.productSlug);
    return (
      <ScrollView style = {{flex: 1}}>
        <InfoModal />
          <Slider />
        <ProductDescription productSlug={this.props.productSlug}/>
      </ScrollView>

    )
  }
}

const styles = {

}
