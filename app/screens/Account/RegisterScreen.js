import React, { Component } from 'react';
import {
    View,
    ListView,
    ScrollView,
    Text,
    TouchableOpacity,
    StyleSheet,
    Alert,
    Platform,
    Image,
    TextInput,
    Dimensions
} from 'react-native';
import {Actions} from 'react-native-router-flux';
var {height, width} = Dimensions.get('window');

import Icon from 'react-native-vector-icons/Ionicons';

import {
  Button,
  Input
} from './../../components/common'


export default class RegisterScreen extends Component {

    constructor(props) {
        super(props);

    }

    componentWillMount() {

    }

    render() {
        return (
            <ScrollView style={styles.container}>
                 <View style = {styles.contentWrap}>
                    <Text style={styles.title}>
                        SIGN UP WITH...
                    </Text>
                    <View style={styles.buttonLoginWrap}>
                        <Button buttonName = "FACEBBOK"
                                useIcon = {true}
                                iconName = "logo-facebook"
                                iconContainerStyle =  {styles.iconContainerStyle}
                                iconStyle = {styles.iconStyle}
                                buttonNameStyle = {styles.buttonNameStyle}
                                buttonNameContainer =  {[styles.buttonNameContainer, styles.buttonNameContainerWithIcon]}
                                buttonStyle =   {[styles.buttonStyle, styles.buttonFacebook]}
                        />
                        <Button buttonName = "GOOGLE"
                                useIcon = {true}
                                iconName = "logo-googleplus"
                                iconContainerStyle =  {styles.iconContainerStyle}
                                iconStyle = {styles.iconStyle}
                                buttonNameStyle = {styles.buttonNameStyle}
                                buttonNameContainer =  {[styles.buttonNameContainer, styles.buttonNameContainerWithIcon]}
                                buttonStyle =   {[styles.buttonStyle, styles.buttonGoogle]}
                        />
                        <Button buttonName = "TWITTER"
                                useIcon = {true}
                                iconName = "logo-twitter"
                                iconContainerStyle =  {styles.iconContainerStyle}
                                iconStyle = {styles.iconStyle}
                                buttonNameStyle = {styles.buttonNameStyle}
                                buttonNameContainer =  {[styles.buttonNameContainer, styles.buttonNameContainerWithIcon]}
                                buttonStyle =   {[styles.buttonStyle, styles.buttonTwitter]}
                        />
                        <Text style={styles.description}>
                        Sign up with soical is super quick. No extra passwords to remember - no brain fail. Don't worry, we'd never share any of your data or post anything on your befalf #notevil
                    </Text>
                    </View>
                    <View style={styles.emailSignUpWrap}>
                        <Text style={styles.title}>
                        OR SIGN UP USING YOUR EMAIL ADDRESS
                        </Text>
                        <Input  label = "EMAIL ADDRESS:"
                                placeholder = "user@gmail.com"
                                note = "We'll send your order confirmation here"
                                inputStyle = {{padding: 5}}
                                labelStyle = {{marginTop: 20}}
                        />
                        <Input  label = "FIRST NAME:"
                                inputStyle = {{padding: 5}}
                                labelStyle = {{marginTop: 20}}
                        />
                                <Input  label = "LAST NAME:"
                                inputStyle = {{padding: 5}}
                                labelStyle = {{marginTop: 20}}
                        />
                        <Input  label = "PASSWORD:"
                                secureTextEntry
                                note = "Must be 6 or more characters and contain at least 1 number"
                                inputStyle = {{padding: 5}}
                                labelStyle = {{marginTop: 20}}
                        />
                    </View>
                 </View>
                 <View style={styles.preferencesWrap}>
                        <Text style={styles.preferencesTitle}>
                           CONTACT PREFERENCES
                        </Text>
                        <Button buttonName = "JOIN"
                                buttonNameStyle = {styles.buttonNameStyle}
                                buttonNameContainer =  {styles.buttonNameContainer}
                                buttonStyle =   {[styles.buttonStyle, styles.buttonLoginNomal]}
                                onPress = {()=>Actions.AccountDetail(type = 'replace')}
                        />
                        <Text style={styles.buttonNote}>
                                By creating your account, you agree to our Terms and Conditions
                        </Text>
                    </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    buttonFacebook: {
      backgroundColor: "#3b5998",
    },
    buttonGoogle: {
      backgroundColor: "#db4e47",
    },
    buttonTwitter: {
      backgroundColor: "#21c3f3"
    },
    buttonLoginNomal: {
      backgroundColor: "#E3868F",
      height: 40
    },
    iconContainerStyle:{
      justifyContent: 'center',
      marginLeft: 10,
      width: 46,
      height: 46,
    },
    iconStyle:{
      fontSize: 32,
      fontWeight: 'bold',
      color: 'white'
    },
    buttonNameStyle:{
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold'

    },
    buttonNameContainer: {
      alignItems: 'center',
      flex: 1,
      justifyContent: 'center'
    },
    buttonNameContainerWithIcon: {
        marginLeft: -40
    },
    buttonStyle: {
      borderWidth: 0,
      borderRadius: 0,
      marginTop: 15,
      flexDirection: 'row',
      justifyContent: 'center',
    },
    container: {
        flex: 1,
        backgroundColor:'#f5f5f5',
    },
    contentWrap: {
        flex: 1,
        padding: 15,
        backgroundColor:'#fff'
    },
    title: {
        marginTop: 10,
        color: "#000000",
        fontSize: 18,
        fontWeight: '700',
        textAlign: 'center',
    },
    description: {
        marginTop: 20,
        color: "#000000",
        fontSize: 16,
        lineHeight: 22,
        textAlign: 'center',
    },
    emailSignUpWrap: {
        flex: 1,
        marginTop: 30
    },
    inputGroup: {
        flex: 1,
        marginTop: 30
    },
    label: {
        color:'#999',
        fontWeight:'bold',
        fontSize:14,
        marginBottom: 10
    },
    note: {
        marginTop: 5,
        fontSize: 15,
        color:'#999'
    },
    textInput: {
        flex: 1,
        height: 40,
        paddingLeft: 20,
        paddingRight: 20,
        fontSize: 16,
        fontWeight:'500',
        borderWidth: 1,
        borderColor:'#ccc'
    },

    preferencesWrap: {
        paddingTop: 10,
        paddingBottom: 70,
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: '#fff'
    },
    preferencesTitle: {
        color:'#777',
        fontWeight:'700',
        fontSize:16,
    },
    buttonNote: {
      marginTop: 5
    }
});
