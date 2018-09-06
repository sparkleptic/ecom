import React, { Component } from 'react';
import {
    View,
    Image,
    Text,
    TouchableOpacity,
    ScrollView,
    Dimensions,
    TextInput,
    ListView,
    LayoutAnimation,
    Platform,
    Picker
} from 'react-native';

import {Actions} from 'react-native-router-flux';
import {Grid, Col} from 'react-native-elements';
import {ArticleDetail} from '../ArticleDetail'
import {PostCard} from './'

var {height, width} = Dimensions.get('window');
import {
  Input, Button, PickerModal
} from './../../components/common';
var _data = [
  {
  	title:"How many people at Facebook work on React?",
    authorImage: "https://sam-payne.co.uk/img/badges/quora.png",
    authorName: "Elke Weiss",
    authorCredit: "Written Feb 7 · Upvoted by Peter Wheeler, Pilot",
    content:"We have about 4 people (including me) who work primarily on React (the core pieces shared across platforms as well as the web implementation). For React Native, around 8 JS engineers plus 4 iOS and 4 Android engineers. We're also lucky to have a handful of people across the company help out occasionally.",
  	category: "U S POLITICS",
    recentInfo: "Popular on Quora"
  },
  {
  	title:"What’s the most unprofessional thing a medical doctor said to you?",
    authorImage: "https://sam-payne.co.uk/img/badges/quora.png",
    authorName: "QuynhRb",
    authorCredit: "Written Feb 7 · Upvoted by Peter Wheeler, Pilot",
    content: "A public library in a nearby town.My son taught himself to read. When he was 4 or 5 he wanted 20,000 leagues under the sea after  explained about captain Nemo and his adventures He put boo..",
  	category: "ENTERTAINMENT",
    recentInfo: " Richard Henry upvoted."
  }
]
class FeedView extends Component {

    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2,
        });
        this.state={
            dataSource:ds.cloneWithRows(_data),
            showPicker: false,
        }
    }
    changeStatePicker() {
      LayoutAnimation.easeInEaseOut();
      this.setState({ showPicker: !this.state.showPicker });
    }
    renderRow(dataItem) {
        return (
          <TouchableOpacity onPress = {() => Actions.ArticleDetail()}>
          <View style = {styles.postCardContainer}>
            <View style = {styles.labelGroupContainer}>
              <Text style={styles.lableInfoStyle}>
                {dataItem.recentInfo}
              </Text>
            </View>
            <View style = {styles.titleContainer}>
              <Text style = {styles.titleStyle}>
                  {dataItem.title}
              </Text>
            </View>
            <Grid style = {styles.authorContainer}>
              <Col size = {2}>
                <View style = {styles.authorAvatarContainer}>
                    <Image style = {{width: 48, height: 48}} source = {{uri: dataItem.authorImage}}/>
                </View>
              </Col>
              <Col size = {8}>
                <View style = {styles.authorInfoContainer}>
                  <Text style = {styles.authorName}>
                  {dataItem.authorName}
                  </Text>
                  <Text style = {styles.authorCredit}>
                    {dataItem.authorCredit}
                  </Text>
                </View>
              </Col>
            </Grid>
            <View style = {styles.postContentConatainer}>
              <Text style = {styles.postContentTextStyle}>
                {dataItem.content}
              </Text>
              <Button buttonName = "Read more"
                      buttonStyle = {styles.btnReadmore}
                      buttonNameStyle = {{color: '#2196F3', fontWeight: 'bold', fontSize: 16, lineHeight: 24}}
              />
            </View>
            <Grid style = {styles.postActionContainer}>
              <Col size = {3}>
                <Button buttonName = "Upvote | 12k"
                        buttonStyle = {{borderWidth: 0.5,borderColor: '#2b6dad', borderRadius: 5, backgroundColor: '#f1f8fb', height: 30}}
                        buttonNameStyle = {styles.postActionBtnNameStyle}
                />
              </Col>
              <Col size = {3}>
                <Button buttonName = "Downvote"
                        buttonStyle = {styles.postActionBtnStyle}
                        buttonNameStyle = {styles.postActionBtnNameStyle}
                />
              </Col>
              <Col size = {3}>
                <Button buttonName = "Comment"
                        buttonStyle = {styles.postActionBtnStyle}
                        buttonNameStyle = {styles.postActionBtnNameStyle}
                />
              </Col>
              <Col size = {1}>
                <Button buttonName = "..."
                        buttonStyle = {styles.postActionBtnStyle}
                        buttonNameStyle = {styles.postActionBtnNameStyle}
                        onPress = {() =>this.changeStatePicker()}
                />
              </Col>
            </Grid>
          </View>
          </TouchableOpacity>
        )
    }
    render() {
        return (
          <View style = {{flex: 1}}>
          {this.state.showPicker ? <View style = {styles.overlay} /> : <View /> }
          {this.state.showPicker ?
              <View style = {Platform.OS === 'android' ? styles.pickerModalContainerAndroid : styles.pickerModalContainerIOS}>
              <View style = {styles.buttonControlPickerContainer}>
                <Button buttonName = "Cancel"
                        onPress = {() =>this.changeStatePicker(0)}
                        buttonStyle = {{backgroundColor: "white", borderWidth: 0,borderWidth: 0, borderRadius: 0, padding: 10, alignItems: 'flex-end'}}
                        buttonNameStyle = {{fontWeight: 'bold', fontSize: 18, color: 'rgb(0,122,255)'}}
                />
                </View>
                <PickerModal />
                  </View>
             : <View />
            }
            <ScrollView style = {styles.feedViewContainerStyle}>
                <View style = {styles.inputQuestionContainer}>
                    <Input  image = {{uri: "https://sam-payne.co.uk/img/badges/quora.png"}}
                            label = "QuynhRb"
                            labelStyle = {{marginLeft: 5, fontWeight: 'normal'}}
                            placeholder = "What is your question?"
                            placeholderColor = '#777'
                            onFocus = {() => Actions.SearchPage()}
                            inputStyle = {{padding: 0, fontSize: 20, fontWeight: '400', borderWidth: 0}}
                            />
                </View>
                <ListView style={styles.listviewContainer}
                                      dataSource={this.state.dataSource}
                                      renderRow={this.renderRow.bind(this)}
                                    />
            </ScrollView>
            </View>
        )
    }
}
const styles = {
  feedViewContainerStyle: {

  },
  inputQuestionContainer: {
    backgroundColor: 'white',
    padding: 15
  },
  postCardContainer: {
    marginTop: 5,
    backgroundColor: 'white',
    padding: 15
  },
  labelGroupContainer: {
    flexDirection: 'row'
  },
  lableInfoStyle: {
    color: '#999'
  },
  titleContainer: {
    marginTop: 15
  },
  titleStyle: {
    fontSize: 20,
    fontWeight: '700'
  },
  authorContainer: {
    marginTop: 15
  },
  authorName: {
    fontSize: 16,
    lineHeight: 20,
  },
  authorCredit: {
    marginTop: 5,
    fontSize: 13,
    color: '#999'
  },
  postContentConatainer: {
    marginTop: 15,
    position: 'relative'
  },
  postContentTextStyle: {
    fontSize: 16,
    lineHeight: 24,
    height: 72,
    overflow: 'hidden'
  },
  btnReadmore: {
    position: 'absolute',
    top: 0,
    right: 0,
    marginTop: -24,
    backgroundColor: "#fff",
    paddingLeft: 10,
    borderWidth: 0
  },
  postActionContainer: {
    marginTop: 15
  },
  postActionBtnStyle: {
    borderWidth: 0,
    height: 30
  },
  postActionBtnNameStyle: {
    fontWeight: 'bold',
    color: '#777'
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
};
export {FeedView}
