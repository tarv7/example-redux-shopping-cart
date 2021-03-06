import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {electronics} from '../Data';
import Products from '../components/Products';
import {connect} from 'react-redux';

class EletronicsScreen extends Component {
    static navigationOptions = {
        headerTitle: 'Eletronics',
    }

    render() {
        return (
            <View style={styles.container}>
                <Products products={electronics} onPress={this.props.addItemToCart} />
            </View>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addItemToCart: product => dispatch({ type: 'ADD_TO_CART', payload: product })
    }
}

export default connect(null, mapDispatchToProps)(EletronicsScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
