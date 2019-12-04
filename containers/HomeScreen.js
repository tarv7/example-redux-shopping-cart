import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Button
                    title="Eletronics"
                    onPress={() => this.props.navigation.navigate('Eletronics')}
                />
                <Button
                    title="Books"
                    onPress={() => this.props.navigation.navigate('Books')}
                />
            </View>
        );
    }
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
