import React, { useState, useEffect } from 'react';
import { StyleSheet,} from 'react-native';
import { 
    Content, Text, Body,
} from 'native-base';

const SideBar = () => {
    
    return (
        <Content style={styles.weatherContainer}>
            <Text style={styles.weatherTitle}>TEST</Text>               
            <Text style={styles.weatherTitle}>TEST</Text>               
            <Text style={styles.weatherTitle}>TEST</Text>               
            <Text style={styles.weatherTitle}>TEST</Text>               
        </Content>
    );
}

const styles = StyleSheet.create({
    weatherContainer: {
        backgroundColor: '#aafafa',
        marginBottom : 10,
    },
    weatherTitle: {
        fontSize: 20,
        textAlign: 'center',
    },
});

export default Weather;
