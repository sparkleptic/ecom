import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  View,
  ScrollView,
  ListView,
  TouchableHighlight,
  Dimensions
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import {
  Button
} from './../../components/common'

var {height, width} = Dimensions.get('window');
var _data = [
  {
    "title": "Orders placed",
    "iconName": "layers",
    "descInfo": "View of all your orders",
    "descInfoEmpty": "You have not added any Orders placed"
  },
  {
    "title": "Shipping Address",
    "iconName": "location-pin",
    "descInfo": "Manage your stored addresses",
    "descInfoEmpty": "You have not added any shipping addressed"
  },
  {
    "title": "Payment Data",
    "iconName": "credit-card",
    "descInfo": "Manage your stored payment info",
    "descInfoEmpty": "You have not added any Payment Data"
  },
  {
    "title": "Gift Cards",
    "iconName": "present",
    "descInfo": "Manage your Gift Cards",
    "descInfoEmpty": "You have not added any Gift Cards"
  },
  {
    "title": "Personal Details",
    "iconName": "list",
    "descInfo": "Manage your Info",
    "descInfoEmpty": "You have not added any Personal Details"
  },
  {
    "title": "Access Details",
    "iconName": "lock-open",
    "descInfo": "Manage your Access Details ",
    "descInfoEmpty": "You have not added any Access Details"
  },
  {
    "title": "Contact Us",
    "iconName": "phone",
    "descInfo": "Manage your Contact Info",
    "descInfoEmpty": "You have not added any Contact"
  }
]

export default class AccountDetail extends Component {
  constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
          dataSource: ds.cloneWithRows(_data),
        };

    }

  renderRow(dataItem) {
        return (
          <TouchableOpacity>
            <View style = {styles.itemListViewStyle}>
              <View style = {styles.iconNameStyle}>
                <Icon name = { dataItem.iconName} size={32}/>
              </View>
              <View style = {styles.titleStyle}>
                <Text style = {styles.itemListViewTitle}>{dataItem.title}</Text>
                <Text style = {styles.itemListViewDesc}>{dataItem.descInfo}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )
    }
  render() {
    return (
      <ScrollView style={styles.container}>
        <ListView
                  style={styles.itemListViewWrap}
                  dataSource={this.state.dataSource}
                  renderRow={this.renderRow}
                  />
        <Button buttonName = "LOG OUT"
                buttonNameStyle = {styles.buttonNameStyle}
                buttonNameContainer =  {styles.buttonNameContainer}
                buttonStyle =   {[styles.buttonStyle, styles.buttonLoginNomal]}
                onPress = {()=>Actions.SignInScreen(type = 'replace')}
        />
      </ScrollView>
    );
  }
}

const styles = {
  container: {
    flex: 1
  },
  itemListViewWrap: {
    margin: 15
  },
  itemListViewStyle: {
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    paddingBottom: 10,
    paddingTop: 10
  },
  iconNameStyle: {
    marginRight: 30,
    justifyContent: 'center'
  },
  titleStyle: {
    justifyContent: 'center'
  },
  itemListViewTitle: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  itemListViewDesc: {
    fontSize: 13,
    color: "#444",
    paddingTop: 5
  },
  buttonStyle: {
    borderWidth: 0,
    borderRadius: 0,
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonNameStyle:{
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  },
  buttonNameContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },

  buttonLoginNomal: {
    backgroundColor: "#E3868F",
    height: 46
  },
}
