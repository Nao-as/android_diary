import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View, Text} from 'react-native';
import BottomMenu from '../component/BottomMenu';

const styles = StyleSheet.create({
    box: {
        margin: 20,
        marginBottom: 0,
        borderWidth: 1,
        borderColor: '#D4035F',
        borderRadius: 8,
        padding: 8,
        backgroundColor: '#FFF',
    },
    boxText: {
        lineHeight: 24,
        fontSize: 16,
    },
});

const FriendsScreen = ({navigation}) => {
    return (
        <SafeAreaView style={{height: '100%'}}>
            <ScrollView>
                <View style={styles.box}>
                    <Text style={styles.boxText}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </Text>
                </View>

                <View style={styles.box}>
                    <Text style={styles.boxText}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </Text>
                </View>

                <View style={[styles.box, {marginBottom: 80}]}>
                    <Text style={styles.boxText}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </Text>
                </View>
            </ScrollView>
            <BottomMenu navigation={navigation} />
        </SafeAreaView>
    );
};

export default FriendsScreen;
