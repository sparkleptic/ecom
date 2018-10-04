import React, { Component } from 'react';
import { WebView } from 'react-native';

export default class Checkout extends Component {
    render() {
        return (
            <WebView
                source={{ uri: 'https://shopify.wpfruits.com/staging/ronda-rochell/' }}
                style={{ marginTop: 20 }}
            />
        );
    }
}