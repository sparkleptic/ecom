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
class ProfileView extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <View style = {styles.feedViewContainerStyle}>
                <View style={styles.container}>
                  <Icon style = {styles.IconStyle} name = "chart" size={128}/>
                  <Text style = {styles.TextStyle}>Start writing on Quora to see how many people view your content.</Text>
                  <Button
                        buttonName='Answer Questions'
                        buttonNameStyle = {{fontSize: 18,fontWeight: 'bold', color: '#aaa'}}
                        buttonStyle = {{flexDirection: 'row',borderWidth: 0, justifyContent: 'center', height: 40, backgroundColor: 'transparent'}}

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
export {ProfileView}
