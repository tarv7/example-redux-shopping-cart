import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import Products from '../components/Products';
import {connect} from 'react-redux';

class CartScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                {this.props.cartItems.length > 0 ?
                    <Products products={this.props.cartItems}
                        onPress={this.props.removeItem} />
                    : <Text>No items in your cart</Text>
                }
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        cartItems: state,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        removeItem: product => dispatch({ type: 'REMOVE_FROM_CART', payload: product })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
