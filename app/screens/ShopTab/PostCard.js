import React, { Component } from 'react';
import {
    View,
    Image,
    Text
} from 'react-native';

import {Actions} from 'react-native-router-flux';
import {Grid, Col} from 'react-native-elements';

import {
  Input, Button
} from './../../components/common';

class PostCard extends Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
          <View style = {styles.postCardContainer}>
            <View style = {styles.labelGroupContainer}>
              <Image style = {{width: 24, height: 24}} source = {{uri: "https://sam-payne.co.uk/img/badges/quora.png"}}/>
              <Text style={styles.lableInfoStyle}>
                  Richard Henry upvoted.
              </Text>
            </View>
            <View style = {styles.titleContainer}>
              <Text style = {styles.titleStyle}>
                  "What is the most surprising secret someone has revealed to you?"
              </Text>
            </View>
            <Grid style = {styles.authorContainer}>
              <Col size = {2}>
                <View style = {styles.authorAvatarContainer}>
                    <Image style = {{width: 48, height: 48}} source = {{uri: "https://sam-payne.co.uk/img/badges/quora.png"}}/>
                </View>
              </Col>
              <Col size = {8}>
                <View style = {styles.authorInfoContainer}>
                  <Text style = {styles.authorName}>
                    "Sue Jackman, was with my husband when he died on a long haul flight"
                  </Text>
                  <Text style = {styles.authorCredit}>
                    "Written Feb 7 · Upvoted by Peter Wheeler, Pilot"
                  </Text>
                </View>
              </Col>
            </Grid>
            <View style = {styles.postContentConatainer}>
              <Text style = {styles.postContentTextStyle}>
                "My husband passed away during a long haul Air NZ flight between Los Angeles and Auckland NZ. We were in business class and he went to sleep in a lie flat sleeper seat and did not wake up."
              </Text>
              <Button buttonName = "Read more"
                      buttonStyle = {styles.btnReadmore}
                      buttonNameStyle = {{color: '#2196F3', fontWeight: 'bold', fontSize: 16, lineHeight: 24}}
              />
            </View>
            <Grid style = {styles.postActionContainer}>
              <Col size = {3}>
                <Button buttonName = "Upvote | 12k"
                        buttonStyle = {{borderWidth: 0.5,borderColor: '#2b6dad', borderRadius: 5, backgroundColor: '#f1f8fb'}}
                        buttonNameStyle = {styles.postActionBtnNameStyle}
                />
              </Col>
              <Col  size = {3}>
                <Button buttonName = "Downvote"
                        buttonStyle = {styles.postActionBtnStyle}
                        buttonNameStyle = {styles.postActionBtnNameStyle}
                />
              </Col>
              <Col  size = {3}>
                <Button buttonName = "Comment"
                        buttonStyle = {styles.postActionBtnStyle}
                        buttonNameStyle = {styles.postActionBtnNameStyle}
                />
              </Col>
              <Col  size = {1}>
                <Button buttonName = "..."
                        buttonStyle = {styles.postActionBtnStyle}
                        buttonNameStyle = {styles.postActionBtnNameStyle}
                />
              </Col>
            </Grid>
          </View>
        )
    }
}
const styles = {
  postCardContainer: {
    marginTop: 5,
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
    borderWidth: 0
  },
  postActionBtnNameStyle: {
    lineHeight: 30,
    fontWeight: 'bold',
    color: '#777'
  }
};
export {PostCard}
