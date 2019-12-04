import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {books} from '../Data';
import Products from '../components/Products';

class BooksScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Products products={books} />
            </View>
        );
    }
}

export default BooksScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
