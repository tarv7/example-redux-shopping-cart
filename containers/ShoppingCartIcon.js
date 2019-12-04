import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';

import { withNavigation } from 'react-navigation'

const ShoppingCartIcon = props => (
    <View style={{ padding: 5 }} on>
        <View style={{
            position: 'absolute', height: 30, width: 30,
            borderRadius: 15, backgroundColor: 'rgba(95, 197, 123, 0.8)',
            right: 15, bottom: 15, alignItems: 'center',
            justifyContent: 'center', zIndex: 2000,
        }}>
            <Text style={{ color: 'white', fontWeight: 'bold' }}>{props.cartItems.length}</Text>
        </View>
        <Icon name="ios-cart" size={30} onPress={() => props.navigation.navigate('Cart')} />
    </View>
);

const mapStateToProps = state => {
  return {
      cartItems: state,
  }
};

export default connect(mapStateToProps)(withNavigation(ShoppingCartIcon));

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
