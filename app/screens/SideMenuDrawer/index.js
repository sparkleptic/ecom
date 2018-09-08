/**
* This is the Side Menu Drawer Component
**/

// React native and others libraries imports
import React, { Component } from 'react';
import { Keyboard, Text} from 'react-native';
import Drawer from 'react-native-drawer';


// Our custom files and classes import
import SideMenu from './SideMenu';

const drawerStyles = {
    drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3 },
    main: { paddingLeft: 3 },
}

export default class SideMenuDrawer extends Component {
  render() {
    return(
      <Drawer
        ref={(ref) => this._drawer = ref}
        // content={<SideMenu />}
        tapToClose={true}
        type="overlay"
        openDrawerOffset={0.3}
        onCloseStart={() => Keyboard.dismiss()}
        >
          {/* {this.props.children} */}
            <SideMenu />
      </Drawer>
        // <SideMenu />
        // <Drawer
        //     type="static"
        //     content={<SideMenu />}
        //     openDrawerOffset={0.2}
        //     styles={drawerStyles}
        //     tweenHandler={(ratio) => ({
        //         main: { opacity: (2 - ratio) / 2 }
        //     })}
        // >
            
        // </Drawer>
    );
  }

  close() {
    this._drawer.close();
  }

  open() {
    this._drawer.open();
  }

}