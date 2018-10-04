// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow
//  */

// import React, {Component} from 'react';
// import {Platform, StyleSheet, Text, View} from 'react-native';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

// type Props = {};
// export default class App extends Component<Props> {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>Welcome to React Native!</Text>
//         <Text style={styles.instructions}>To get started, edit App.js</Text>
//         <Text style={styles.instructions}>{instructions}</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

import React, { Component } from "react";
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Platform,
    PermissionsAndroid
} from "react-native";
import MapView, { Marker, AnimatedRegion, Polyline } from "react-native-maps";
import haversine from "haversine";

const LATITUDE = 29.95539;
const LONGITUDE = 78.07513;
const LATITUDE_DELTA = 0.009;
const LONGITUDE_DELTA = 0.009;

class Livemap extends Component {
    constructor(props) {
        super(props);

        this.state = {
            latitude: LATITUDE,
            longitude: LONGITUDE,
            routeCoordinates: [],
            distanceTravelled: 0,
            prevLatLng: {},
            coordinate: new AnimatedRegion({
                latitude: LATITUDE,
                longitude: LONGITUDE
            })
        };
    }

    // componentWillMount() {
    //   console.log("componentWillMount");        
    //   navigator.geolocation.getCurrentPosition(
    //     position => { 
    //       console.log(position);        
    //     },
    //     error => {
    //       console.log(error);        
    //       alert(error.message)
    //     },
    //     {
    //       // enableHighAccuracy: true,
    //       // timeout: 20000,
    //       // maximumAge: 1000
    //     }
    //   );
    // }

    componentDidMount = () => {
        requestLocationPermission = async () => {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                    {
                        'title': 'App ACCESS_FINE_LOCATION Permission',
                        'message': 'App needs access to your ACCESS_FINE_LOCATION ' +
                            'so you can get correct position.'
                    }
                )
                console.log('granted', granted);
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    console.log("You can use the ACCESS_FINE_LOCATION")
                } else {
                    console.log("ACCESS_FINE_LOCATION permission denied")
                }
            } catch (err) {
                console.log('err', err);
            }
        }

        navigator.geolocation.getCurrentPosition(
            position => {
                console.log('position', position);
                let lat = position.coords.latitude;
                let lon = position.coords.longitude;
                this.setState({
                    latitude: lat,
                    longitude: lon
                })
            },
            error => {
                console.log('error', error);
            }
        );
    }

    // componentDidMount() {
    //   this.watchID = navigator.geolocation.watchPosition(
    //     position => {
    //       const { coordinate, routeCoordinates, distanceTravelled } = this.state;
    //       const { latitude, longitude } = position.coords;

    //       const newCoordinate = {
    //         latitude,
    //         longitude
    //       };

    //       if (Platform.OS === "android") {
    //         if (this.marker) {
    //           this.marker._component.animateMarkerToCoordinate(
    //             newCoordinate,
    //             500
    //           );
    //         }
    //       } else {
    //         coordinate.timing(newCoordinate).start();
    //       }

    //       this.setState({
    //         latitude,
    //         longitude,
    //         routeCoordinates: routeCoordinates.concat([newCoordinate]),
    //         distanceTravelled:
    //           distanceTravelled + this.calcDistance(newCoordinate),
    //         prevLatLng: newCoordinate
    //       });
    //     },
    //     error => console.log(error),
    //     { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    //   );
    // }

    calcDistance = newLatLng => {
        const { prevLatLng } = this.state;
        return haversine(prevLatLng, newLatLng) || 0;
    };

    getMapRegion = () => ({
        latitude: this.state.latitude,
        longitude: this.state.longitude,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
    });

    getMarkerPoint = () => ({
        latitude: this.state.latitude,
        longitude: this.state.longitude
    })

    render() {
        return (
            <View style={styles.container}>
                <MapView
                    style={styles.map}
                    showUserLocation
                    followUserLocation
                    loadingEnabled
                    region={this.getMapRegion()}
                >
                    {/* <Polyline coordinates={this.state.routeCoordinates} strokeWidth={5} /> */}
                    <Marker
                        coordinate={this.getMarkerPoint()} />
                </MapView>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={[styles.bubble, styles.button]}>
                        <Text style={styles.bottomBarContent}>
                            {parseFloat(this.state.distanceTravelled).toFixed(2)} km
            </Text>
                        <Text style={styles.bottomBarContent}>
                            Lat: {this.state.latitude.toFixed(2)}
                        </Text>
                        <Text style={styles.bottomBarContent}>
                            Lng: {this.state.longitude.toFixed(2)}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    map: {
        ...StyleSheet.absoluteFillObject
    },
    bubble: {
        flex: 1,
        backgroundColor: "rgba(255,255,255,0.7)",
        paddingHorizontal: 18,
        paddingVertical: 12,
        borderRadius: 20
    },
    latlng: {
        width: 200,
        alignItems: "stretch"
    },
    button: {
        width: 80,
        paddingHorizontal: 12,
        alignItems: "center",
        marginHorizontal: 10
    },
    buttonContainer: {
        flexDirection: "row",
        marginVertical: 20,
        backgroundColor: "transparent"
    }
});

export default Livemap;