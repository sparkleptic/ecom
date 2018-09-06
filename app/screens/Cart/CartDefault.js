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

import {Actions} from 'react-native-router-flux';
import ResponsiveImage from 'react-native-responsive-image';

const rightButtons=[
        <TouchableOpacity style={{backgroundColor: 'lightseagreen', height: 10}}>
          <Text>wishlist</Text>
        </TouchableOpacity>,
        <TouchableOpacity style={{backgroundColor: 'orchid'}}>
          <Text>remove</Text>
        </TouchableOpacity>
      ]

var {height, width} = Dimensions.get('window');
import {
  Button,
  ProductCard_Style1
} from './../../components/common';

class CartDefault extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showPicker: false,
            qtyCurrent: 1,
            _qty: 1
        };
    }

    componentWillMount() {
      LayoutAnimation.easeInEaseOut();
    }
    changeStatePicker(value) {
      LayoutAnimation.easeInEaseOut();
      this.setState({ showPicker: !this.state.showPicker });
      if (value) {
          this.setState({qtyCurrent: this.state._qty})
      }

    }
    onValueChangePicker(qty) {
      this.setState({_qty: qty})
    }
    render() {
        return (
            <View style={styles.container}>
                {this.state.showPicker ? <View style = {styles.overlay} /> : <View /> }
                <Button buttonName = "Free Next Business Day Shipping & Free 365 .."
                        buttonStyle = {{height: 40, borderRadius: 4, borderWidth: 1}}
                        buttonContainerStyle = {{paddingLeft: 5, paddingRight: 5, marginTop: 10}}
                        buttonNameStyle = {{textAlign: "left", fontWeight: 'bold', fontSize: 13}}
                        onPress = {() => Actions.ShippingInfoModal(title = "Shipping ")}
                />

                {this.state.showPicker ?
                  <View style = {Platform.OS === 'android' ? styles.pickerModalContainerAndroid : styles.pickerModalContainerIOS}>
                  <View style = {styles.buttonControlPickerContainer}>
                    <Button buttonName = "Cancel"
                            onPress = {() =>this.changeStatePicker(0)}
                            buttonStyle = {{backgroundColor: "white", borderWidth: 0,borderWidth: 0, borderRadius: 0, padding: 10, alignItems: 'flex-end'}}
                            buttonNameStyle = {{fontWeight: 'bold', fontSize: 18, color: 'rgb(0,122,255)'}}
                    />
                    <Button buttonName = "Done"
                            onPress = {() =>this.changeStatePicker(1)}
                            buttonStyle = {{backgroundColor: "white", borderWidth: 0,borderWidth: 0, borderRadius: 0, padding: 10, alignItems: 'flex-end'}}
                            buttonNameStyle = {{fontWeight: 'bold', fontSize: 18, color: 'rgb(0,122,255)'}}
                    />
                    </View>
                    <Picker style = {styles.pickerModal} mode = 'dropdown'
                            selectedValue={this.state._qty}
                            onValueChange={(qty) => this.onValueChangePicker(qty)}>
                            <Picker.Item label="1" value="1" />
                            <Picker.Item label="2" value="2"/>
                            <Picker.Item label="3" value="3" />
                            <Picker.Item label="4" value="4"/>
                            <Picker.Item label="5" value="5" />
                            <Picker.Item label="6" value="6"/>
                      </Picker>
                      </View>
                 : <View />
                }

                <ScrollView style = {styles.productCardScrollViewStyle}>

                  <ProductCard_Style1 productName = "The North"
                                      productRef = "7799543"
                                      productColor = "Black / Cha"
                                      productPriceIns = "$28.00"
                                      qty = {this.state.qtyCurrent}
                                      productImages = "https://vn-live-03.slatic.net/p/7/giay-the-thao-nam-nike-833411-001-xam-6675-0037313-d5ef3dd1ce006424811b49b7b534ace4-catalog_233.jpg"
                                      onPress = {() => this.changeStatePicker()}
                  />
                

                  <ProductCard_Style1 productName = "The Adidas"
                                      productRef = "7799543"
                                      productColor = "Black / Cha"
                                      productPriceIns = "$28.00"
                                      qty = "2"
                                      productImages = "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcThPl0aN5VTPJHkc2vXQvJlTdRFmEr0BvLnIgFV4KdGUFWhJwHnVQ"

                  />
                

                  <ProductCard_Style1 productName = "The North"
                                      productRef = "7799543"
                                      productColor = "Black / Cha"
                                      productPriceIns = "$28.00"
                                      qty = "2"
                                      productImages = "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcReqSM0BaKXtNrY_XPLLbs92Sjykt0pvzREiApN_Qz4Wa9RSzWEmQ"

                  />
                
                  <View style = {styles.giftCartInfoContainer}>
                      <Text style = {styles.giftCartInfoTitle}>
                          Have a Gift Card, e-Gift Card or Coupon Code? {"\n"}
                          Proceed to checkout to redeen it.
                      </Text>
                  </View>
                </ScrollView>
                <View style = {styles.subTotalContainerStyle}>
                  <View style = {styles.subTotalStyle}>
                    <Text style = {styles.subTotalTitleStyle}>
                      Subtotal (2 items):
                    </Text>
                    <Text style = {styles.subTotalPriceStyle}>
                      $56
                    </Text>
                  </View>
                  <Button buttonName = "PROCEED TO CHECKOUT"
                          buttonStyle = {{ height: 35, width: 160, borderRadius: 4,borderWidth: 0, backgroundColor: '#4CAF50', marginTop: 20, marginBottom: 20}}
                          buttonNameStyle = {{fontSize: 11, color: '#fff'}}
                          onPress = {()=> Actions.SignInScreen()}
                  />
                </View>
            </View>
        )
    }
}
const scrollViewHeight = Platform.OS === 'android' ? height - (235) : height - (225);
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#eee'
    },
    productCardScrollViewStyle: {
      height: scrollViewHeight,
      marginTop: 10,
      backgroundColor: "#fff"
    },
    subTotalContainerStyle: {
      alignItems: 'flex-end',
      height: 100,
      paddingRight: 20,
      paddingTop: 10,
      borderTopWidth: 1,
      borderTopColor: '#ccc',
      borderBottomWidth: 1,
      borderBottomColor: '#ddd'
    },
    subTotalStyle: {
      flexDirection: 'row',
    },
    subTotalTitleStyle: {
      fontSize: 18,
      fontWeight: 'bold'
    },
    subTotalPriceStyle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginLeft: 20
    },
    giftCartInfoContainer: {
      backgroundColor: "#f5f5f5",
      padding: 10
    },
    giftCartInfoTitle: {
      textAlign: 'center',
      color: '#999'
    },
    overlay: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      top: 0,
      zIndex: 10,
      backgroundColor: 'rgba(0,0,0,0.3)'
    },
    pickerModalContainerIOS: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 90,
      backgroundColor: "white"
    },
    buttonControlPickerContainer: {
      justifyContent: 'space-between',
      flexDirection: 'row',
      borderWidth: 1,
      borderColor: '#eee'
    },
    pickerModalContainerAndroid: {
      position: 'absolute',
      left: 0,
      right: 0,
      zIndex: 90,
      backgroundColor: "white"
    }
});
export {CartDefault}
