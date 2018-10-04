import React, { Component } from 'react';
import {
View,
ScrollView,
Text,
TouchableOpacity,
StyleSheet,
Platform,
Image,
TextInput,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {
  Button,
  Input
} from './../../components/common'
import { LoginButton, AccessToken, LoginManager } from 'react-native-fbsdk';


export default class SignInScreen extends Component {

constructor(props) {
    super(props);
}
componentDidMount(){
    // LoginManager.logInWithReadPermissions(['public_profile']).then(
    //     function (result) {
    //         if (result.isCancelled) {
    //             console.log('Login cancelled');
    //         } else {
    //             console.log('Login success with permissions: '
    //                 + result.grantedPermissions.toString());
    //         }
    //     },
    //     function (error) {
    //         console.log('Login fail with error: ' + error);
    //     }
    // );
}
componentWillMount() {
    // LoginManager.logInWithReadPermissions(['public_profile']).then(
    //     function (result) {
    //         if (result.isCancelled) {
    //             console.log('Login cancelled');
    //         } else {
    //             console.log('Login success with permissions: '
    //                 + result.grantedPermissions.toString());
    //         }
    //     },
    //     function (error) {
    //         console.log('Login fail with error: ' + error);
    //     }
    // );
}

render() {
    return (
        <ScrollView style={styles.container}>
             <View style = {styles.contentWrap}>
                <Text style={styles.title}>
                    Sign in with your social account
                </Text>
                <View style={styles.buttonLoginWrap}>
                    {/* <TouchableOpacity>
                       <Image style={styles.buttonLoginIcon} source={require('../../resources/images/facebook.png')} />
                    </TouchableOpacity> */}
                    <LoginButton
                        onLoginFinished={
                            (error, result) => {
                                if (error) {
                                    console.log("login has error: " + result.error);
                                } else if (result.isCancelled) {
                                    console.log("login is cancelled.");
                                } else {
                                    AccessToken.getCurrentAccessToken().then(
                                        (data) => {
                                            console.log(result);
                                            
                                            console.log(data.accessToken.toString())
                                        }
                                    )
                                }
                            }
                        }
                        onLogoutFinished={() => console.log("logout.")} />

                    <TouchableOpacity>
                       <Image  style={styles.buttonLoginIcon} source={require('../../resources/images/google-plus.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image  style={styles.buttonLoginIcon} source={require('../../resources/images/twitter.png')} />
                    </TouchableOpacity>
                </View>
                <View style={styles.emailSignUpWrap}>
                    <Text style={styles.title}>
                    or
                    </Text>
                    <Input  label = "EMAIL ADDRESS:"
                            placeholder = "user@gmail.com"
                            inputStyle = {{padding: 5}}
                    />
                    <Input  label = "PASSWORD:"
                            secureTextEntry
                            labelStyle = {{marginTop: 20}}
                    />
                    <Button buttonName = "SIGN IN"
                            buttonNameStyle = {styles.buttonNameStyle}
                            buttonNameContainer =  {styles.buttonNameContainer}
                            buttonStyle =   {[styles.buttonStyle, styles.buttonLoginNomal]}
                            onPress = {()=>Actions.AccountDetail(type = 'replace')}
                    />
                    <TouchableOpacity>
                            <Text style={[styles.subtitle,{color:"#999", marginTop: 15}]}> Forgotten password?</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.line} />
                <View style={{flex: 1}}>
                    <TouchableOpacity onPress = {() => Actions.RegisterScreen()}>
                            <Text style={styles.subtitle}> Dont have an account? {"\n"}Sign up to day.</Text>
                    </TouchableOpacity>
                </View>
             </View>
        </ScrollView>
    )
}
}

const styles = StyleSheet.create({
container: {
    flex: 1,
},
contentWrap: {
    flex: 1,
    padding: 15,
    backgroundColor:'#fff'
},
buttonStyle: {
  borderWidth: 0,
  borderRadius: 0,
  marginTop: 15,
  flexDirection: 'row',
  justifyContent: 'center',
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
buttonLoginNomal: {
  backgroundColor: "#E3868F",
  height: 46
},
buttonLoginWrap: {
    flex: 1,
    flexDirection: 'row',
    alignItems: "center",
    justifyContent:'center'
},
buttonLoginIcon: {
    marginLeft: 12,
    marginRight: 12,
    width: 64,
    resizeMode: "contain"
},
buttonLogin: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    lineHeight: 50,
    backgroundColor: '#222222',
    color: '#ffffff'
},
title: {
    marginTop: 10,
    color: "#000000",
    fontSize: 20,
    textAlign: 'center',
},
line: {
    borderWidth:0.6,
    borderColor:"#ccc",
    flex: 1,
    marginTop: 20,
    marginBottom: 20
},
subtitle: {
    color: "#000000",
    fontSize: 15,
    textAlign: 'center',
    textDecorationLine: "underline",
},
emailSignUpWrap: {
    flex: 1
}
});
