import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Dimensions,
} from 'react-native'
import {
  NavBarModal
} from './../../components/common'

import HTMLView from 'react-native-htmlview';
import {Button, Card} from 'react-native-elements';
var htmlContent = '<h3>How many people at Facebook work on React?</h3><span class="rendered_qtext"><p class="qtext_para">We have about 4 people (including me) who work primarily on React (the core pieces shared across platforms as well as the web implementation). </p><p class="qtext_para">For React Native, around 8 JS engineers plus 4 iOS and 4 Android engineers. We are also lucky to have a handful of people across the company help out occasionally</p>'
var {height, width} = Dimensions.get('window');
class ArticleDetail extends Component  {
  render() {
    return (
      <ScrollView style = {styles.container}><View style = {styles.htmlViewStyle}>
          <HTMLView
            value={htmlContent}
            stylesheet={styles}
          />
          </View>
          <Button
                  small
                  title='View All Answers'
                  buttonStyle = {{marginLeft: 0, marginRight: 0, marginTop: 5, backgroundColor: '#fff'}}
                  textStyle = {{fontWeight: 'bold', color: '#999'}}
          />
          <View style = {styles.aboutTheAuthorContainer}>

          </View>
      </ScrollView>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    marginTop: 20,
  },
  htmlViewStyle: {
    backgroundColor: 'white',
    padding: 15
  },
  h3: {
    fontWeight: 'bold',
    fontSize: 24
  },
  p: {
    fontSize: 15,
    color: '#444', // pink links
  },
})
export {ArticleDetail}
