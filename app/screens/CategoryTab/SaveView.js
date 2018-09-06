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
class SaveView extends Component {

    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2,
        });
        this.state={
            dataSource:ds.cloneWithRows(_data),
        }
    }

    render() {
        return (
            <View style = {styles.feedViewContainerStyle}>
                <View style = {styles.headerContainerStyle}>
                  <Button
                        buttonName='DRAFTS'
                        buttonNameStyle = {{fontSize: 18, color: '#aaa', textAlign:'left'}}
                        buttonStyle = {{flexDirection: 'row',borderWidth: 0, justifyContent: 'flex-start'}}

                         />
                </View>
                <View style={styles.container}>
                  <Icon style = {styles.IconStyle} name = "note" size={64}/>
                  <Text style = {styles.TextStyle}>No Questions Saved in Answer Later</Text>
                  <Button buttonName = "See Questions for You"
                          buttonNameStyle = {{color: 'white'}}
                          buttonStyle = {{backgroundColor: '#2196F3', height: 35, marginTop: 20, padding: 10, borderRadius: 5, borderWidth: 0}}
                          onPress = {()=> Actions.FeedView(passProps = {title: "TOP QUESTIONS"})}
                  />
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
    padding: 10,
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
export {SaveView}
