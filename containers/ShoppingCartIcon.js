import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

class ShoppingCartIcon extends Component {
    render() {
        return (
            <View style={{ padding: 5 }}>
                <View style={{
                    position: 'absolute', height: 30, width: 30,
                    borderRadius: 15, backgroundColor: 'rgba(95, 197, 123, 0.8)',
                    right: 15, bottom: 15, alignItems: 'center',
                    justifyContent: 'center', zIndex: 2000,
                }}>
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>0</Text>
                </View>
                <Icon name="ios-cart" size={30} />
            </View>
        );
    }
}

export default ShoppingCartIcon;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
