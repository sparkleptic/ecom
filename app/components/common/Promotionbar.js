// Import libraries for making a component
import React, { Component } from 'react';
import {
    View,
    Text,
    Dimensions,
    Image
} from 'react-native';
import {
    Button
} from './'
var { height, width } = Dimensions.get('window');
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import { Actions } from 'react-native-router-flux';

class Promotionbar extends Component {

    render() {
        return (
            <View style={styles.containerStyleWrapper}>
                <View style={styles.containerStyle}>
                    <Text style={styles.innerText}>SALE IS ON</Text>
                </View>
                <View style={styles.containerStyle2}>
                    <View style={styles.equalWidth}>
                    <Text style={styles.appText}>RONDA{"\n"}ROCHELL</Text>
                    </View>
                    <View style={styles.equalWidth}>
                    <Image
                        style={styles.stretch}
                        source={require('../../resources/images/app-logo.png')}
                    />
                    </View>
                    <View style={styles.equalWidth2}>
                        <Icon name="basket-loaded" className="icon-basket-loaded" size={20} color='#fff' onPress={() => Actions.CartTabRootScreen(passProps = { title: 'Drawer' })} />
                    </View>
                </View>
                <View style={styles.containerStyle3}>
                    <Icon name="menu" className="icon-menu" size={14} color='#fff' onPress={() => Actions.SideMenuDrawer(passProps = { })}/>
                    <Text style={styles.innerText2}>Shop</Text>
                    <Text> </Text>
                </View>
            </View>
        )
    }
}
// Make the component available to other parts of the app

const styles = {
    equalWidth:{
        width:'33.33%'
    },
    stretch:{
        width:25,
        justifyContent:'center',
        padding:4,
        marginRight:5
    },
    appText:{
        textAlign:'left',
        color:'#ffffff'
    },
    containerStyle:{
        flex: 1,
        backgroundColor: '#000000',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    containerStyle2: {
        flex: 1,
        backgroundColor: '#232121',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 5,
        paddingLeft:15,
        paddingRight:15,
        borderBottomColor: '#000000',
        borderBottomWidth: 1,
    },
    containerStyle3:{
        flex: 1,
        backgroundColor: '#403939',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        padding:3,
        paddingLeft: 15,
        paddingRight: 15
    },
    innerText:{
        color:'#ffffff',
        fontSize:10,
        fontWeight:'600',
        padding:6
    },
    innerText2:{
        color:'#ffffff',
        fontSize:12,
        fontWeight:'600',
        padding:4
    }
}

export { Promotionbar };


