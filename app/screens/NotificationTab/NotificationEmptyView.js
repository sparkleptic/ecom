import React, { Component } from 'react';
import {
    View,
    Image,
    Text,
    TouchableOpacity,
    ScrollView,
    Dimensions,
    TextInput,
    ListView
} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import {Actions} from 'react-native-router-flux';
import {Grid, Col} from 'react-native-elements';
import {ArticleDetail} from '../ArticleDetail'
import {PostCard} from './'

var {height, width} = Dimensions.get('window');
import {
  Input, Button
} from './../../components/common';
var _data = [
  {
  	title:"How can I render React-Bootstrap in React?",
    authorImage: "https://sam-payne.co.uk/img/badges/quora.png",
    authorName: "Theinlwin Htun",
    authorCredit: "Written Feb 7 · Upvoted by Peter Wheeler, Pilot",
    content:"We have about 4 people (including me) who work primarily on React (the core pieces shared across platforms as well as the web implementation). For React Native, around 8 JS engineers plus 4 iOS and 4 Android engineers. We're also lucky to have a handful of people across the company help out occasionally.",
  	category: "U S POLITICS",
    recentInfo: "Popular on Quora"
  },
  {
  	title:"How do I find out React Native project bug?",
    authorImage: "https://sam-payne.co.uk/img/badges/quora.png",
    authorName: "QuynhRb",
    authorCredit: "Written Feb 7 · Upvoted by Peter Wheeler, Pilot",
    content: "A public library in a nearby town.My son taught himself to read. When he was 4 or 5 he wanted 20,000 leagues under the sea after  explained about captain Nemo and his adventures He put boo..",
  	category: "ENTERTAINMENT",
    recentInfo: " Richard Henry upvoted."
  }
]
class NotificationEmptyView extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <View style = {styles.feedViewContainerStyle}>
                <View style = {styles.headerContainerStyle}>
                  <Button
                        buttonName='All Notifications Read'
                        buttonNameStyle = {{fontSize: 18,fontWeight: 'bold', color: '#aaa'}}
                        buttonStyle = {{flexDirection: 'row',borderWidth: 0, justifyContent: 'center', height: 40, backgroundColor: '#eee'}}

                         />
                </View>
                <View style={styles.container}>
                  <Icon style = {styles.IconStyle} name = "note" size={64}/>
                  <Text style = {styles.TextStyle}>No Notifications Yet</Text>

                </View>
            </View>
        )
    }
}
const styles = {
  feedViewContainerStyle: {
    height: height
  },
  headerContainerStyle: {
    backgroundColor: 'white',
    width: width,
    padding: 20,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: '#eee',
    borderBottomColor: '#eee'
  },
  container: {
    flex: 1,
    marginTop: -160,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15
  },
  IconStyle: {
    color: "#bbb"
  },
  TextStyle: {
    color: "#bbb",
    fontSize: 18
  }
};
export {NotificationEmptyView}
