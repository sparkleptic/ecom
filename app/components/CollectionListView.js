import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  View,
  ListView,
  TouchableHighlight,
} from 'react-native';
import {Actions, Scene, Router} from 'react-native-router-flux';
var _data = require('../database/gikFashionDatabase.json');

export default class CollectionListView extends Component {
  constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
          dataSource: ds.cloneWithRows(props._data),
        };

    }

  renderRow(dataItem) {
        return (
          <View>
            <TouchableOpacity onPress = {() =>
                      Actions.Category(passProps = { title: dataItem.subCollectionName }) }>
              <View style = {styles.itemListViewStyle}>
                  <Text style={styles.itemListViewTitle}>{dataItem.subCollectionName}</Text>
              </View>
            </TouchableOpacity>
          </View>
        )
    }
  render() {
    return (
      <View style={styles.container}>
      <ListView
                  style={styles.itemListViewWrap}
                  dataSource={this.state.dataSource}
                  renderRow={this.renderRow}
                  />
      </View>
    );
  }
}

const styles = {
  itemListViewStyle: {
    paddingBottom: 30
  },
  itemListViewTitle: {
    fontSize: 22
  }
}
