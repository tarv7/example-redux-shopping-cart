import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from 'react-navigation';

import HomeScreen from './containers/HomeScreen';
import EletronicsScreen from './containers/EletronicsScreen';
import BooksScreen from './containers/BooksScreen';
import ShoppingCartIcon from './containers/ShoppingCartIcon';

class ShoppingCart extends Component {
    render() {
        return (
            <AppStackNavigator />
        );
    }
}

export default ShoppingCart;

const AppStackNavigator = createStackNavigator({
    Home: HomeScreen,
    Eletronics: EletronicsScreen,
    Books: BooksScreen,
},{
    navigationOptions: {
        headerTitle: 'Shopping App',
        headerRight: (
            <ShoppingCartIcon />
        )
    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
