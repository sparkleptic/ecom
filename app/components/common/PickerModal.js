import React, { Component } from 'react';
import {
    View,
    Dimensions,
    LayoutAnimation,
    Platform,
    Picker
} from 'react-native';
import {
  Button
} from './../../components/common'
import {List, ListItem} from 'react-native-elements';
var {height, width} = Dimensions.get('window');
const list = [
  {
    name: 'Bookmark'
  },
  {
    name: 'Suggest Edits'
  },
  {
    name: 'Edit Question & Details'
  },
  {
    name: 'Thank'
  },
  {
    name: 'Downvote Answer'
  },
  {
    name: 'Downvote Question'
  },
  {
    name: 'Report'
  },
  {
    name: 'Log'
  }
]
class PickerModal extends Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
          <List containerStyle={{marginTop: 0, borderTopWidth: 0, borderBottomWidth: 0}}>
            {
              list.map((l, i) => (
                <ListItem
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
export {PickerModal}
