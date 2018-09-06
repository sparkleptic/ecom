import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView
} from 'react-native'
import HTMLView from 'react-native-htmlview';

var htmlContent = '<div><h3>FREE Shipping:</h3><p>Unlike many other web sites that have special rules and lots of fine print, Zappos.com offers free shipping on all domestic orders placed on our website, with no minimum order sizes or special exceptions.</p><p>Just because shipping is free doesnt mean it should take a long time. Zappos.com understands that getting your items quickly is important to you, so we make every effort to process your order quickly.</p><h3>FREE Returns:</h3><p>If you are not 100% satisfied with your purchase, you can return your order to the warehouse for a full refund (Returns must be unworn, in the state you received them, and in the original packaging). We believe that in order to have the best possible online shopping experience, our customers should not have to pay for domestic return shipping. So if for whatever reason you are not happy with your purchase, just go through our easy self-service  your domestic shipping costs are prepaid.</p></div>'

class ShippingInfoModal extends Component  {
  render() {
    return (
      <ScrollView style = {styles.container}>
      <HTMLView
        value={htmlContent}
        stylesheet={styles}
      />
      </ScrollView>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10
  },
  h3: {
    fontWeight: 'bold',
    fontSize: 15
  },
  p: {
    fontWeight: '300',
    color: '#444', // pink links
  },
})
export {ShippingInfoModal}
