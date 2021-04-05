import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Header extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header_title}>天気アプリ</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#05dfd1',
        padding : 10,
    },
    header_title: {
        fontSize: 24,
        color: '#fafafa',
        fontWeight : 'bold'
    }
});
