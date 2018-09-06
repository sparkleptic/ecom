import React, { Component } from 'react';
import {
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView
} from 'react-native';

import {Actions} from 'react-native-router-flux';
import { List, ListItem } from 'react-native-elements';

var {height, width} = Dimensions.get('window');

const list = [
  {
    name: 'Front-End',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
  },
  {
    name: 'Web Design',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
  },
  {
    name: 'User Interface Design',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
  },
  {
    name: 'React',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
  },
  {
    name: 'React Native',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
  },
  {
    name: 'Wordpress',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
  },
  {
    name: 'Shopify',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
  },
  {
    name: 'UX',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
  }
]
class BookmarksView extends Component {
  render() {
    return (
      <List containerStyle ={{marginTop: 0}}>
      {
        list.map((l, i) => (
          <ListItem
            roundAvatar
            onPress={() => Actions.FeedView(passprops = {title: l.name})}
            avatar={l.avatar_url}
            key={i}
            title={l.name}
          />
        ))
      }
      </List>
    )
  }
}

const styles = {

}

export {BookmarksView}
