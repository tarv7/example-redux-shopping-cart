import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {electronics} from '../Data';
import Products from '../components/Products';

class EletronicsScreen extends Component {
    static navigationOptions = {
        headerTitle: 'Eletronics',
    }

    render() {
        return (
            <View style={styles.container}>
                <Products products={electronics} />
            </View>
        );
    }
}

export default EletronicsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
