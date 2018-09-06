import React, { Component } from 'react';
import {
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  View,
  Image,
  Text,
  ListView
} from 'react-native';

import {Actions} from 'react-native-router-flux';
import {Grid, Col} from 'react-native-elements';

var _data = [
  {
  	title:"Which tech company has the highest coding bar for their software engineers?",
    authorImage: "https://sam-payne.co.uk/img/badges/quora.png",
    authorName: "Elke Weiss",
    content: "I am in so much pain that I wish I was dead. I cannot eat, I cannot sleep and I need help,” I told my dentist. One side of my face was broiling in pain.“The problem is in your mind ...",
  	category: "U S POLITICS"
  },
  {
  	title:"What’s the most unprofessional thing a medical doctor said to you?",
    authorImage: "https://sam-payne.co.uk/img/badges/quora.png",
    authorName: "QuynhRb",
    content: "A public library in a nearby town.My son taught himself to read. When he was 4 or 5 he wanted 20,000 leagues under the sea after  explained about captain Nemo and his adventures He put boo..",
  	category: "ENTERTAINMENT"
  }
]
var {height, width} = Dimensions.get('window');
import {TrendingCard} from './'
class TrendingView extends Component {
  constructor(props) {
        super(props);
        var ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2,
            sectionHeaderHasChanged: (s1, s2) => s1 !== s2
        });
        this.state={
            dataSource:ds.cloneWithRowsAndSections(this.convertArrayDataToMap())
        }
    }
    convertArrayDataToMap() {
      var dataCategoryMap = {}; // Create the blank map
      _data.forEach(function(dataItem) {
        if (!dataCategoryMap[dataItem.category]) {
          // Create an entry in the map for the category if it hasn't yet been created
          dataCategoryMap[dataItem.category] = [];
        }

        dataCategoryMap[dataItem.category].push(dataItem);

      });

      return dataCategoryMap;

    }
    renderRow(dataItem) {
        return (
          <TouchableOpacity onPress = {() => Actions.FeedView(passprops = {title: dataItem.title })}>
            <View style = {styles.postCardContainer}>
              <Grid style = {styles.authorContainer}>
                <Col size = {2}>
                  <View style = {styles.authorAvatarContainer}>
                      <Image style = {{width: 48, height: 48}} source = {{uri: "https://sam-payne.co.uk/img/badges/quora.png"}}/>
                  </View>
                </Col>
                <Col size = {8}>
                <View style = {styles.titleContainer}>
                  <Text style = {styles.titleStyle}>
                      {dataItem.title}
                  </Text>
                </View>
                  <View style = {styles.authorInfoContainer}>
                    <Text style = {styles.authorDesc}>
                      "Sue Jackman, was with my husband when he died on a long haul flight. Upvoted by Peter Wheeler, Pilot"
                    </Text>
                  </View>
                </Col>
              </Grid>
            </View>
          </TouchableOpacity>
        )
    }
    renderSectionHeader(sectionData, category) {
          return (
            <View style = {styles.sectionListViewStyle}><Text style={styles.sectionListTextStyle}>{category}</Text></View>
          )
    }

  render() {
    return (
      <ListView style={styles.listviewContainer}
                            dataSource={this.state.dataSource}
                            renderRow={this.renderRow}
                            renderSectionHeader={this.renderSectionHeader}
                          />
    )
  }
}

const styles = {
    sectionListViewStyle: {
      backgroundColor: 'white',
      borderTopWidth: 1,
      borderTopColor: '#eee',
      borderBottomWidth: 1,
      borderBottomColor: '#eee',
      paddingLeft: 15,
      height: 40,
      justifyContent: 'center'
    },
    postCardContainer: {
      backgroundColor: 'white',
      padding: 15
    },
    labelGroupContainer: {
      flexDirection: 'row'
    },
    lableInfoStyle: {
      marginLeft: 5,
      color: '#999'
    },
    titleContainer: {
      marginBottom: 10
    },
    titleStyle: {
      fontSize: 18,
      fontWeight: '700'
    },
    authorContainer: {
      marginTop: 15
    },
    authorDesc: {
      fontSize: 16,
      lineHeight: 20,
    }
  };
export {TrendingView}
