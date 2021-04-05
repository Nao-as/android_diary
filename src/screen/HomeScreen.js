import React, {useState, useCallback} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {Button, Text, Fab, Icon} from 'native-base';
import {useFocusEffect} from '@react-navigation/native';
import Loading from '../component/loading';

// import Intro from '../Intro';

const styles = StyleSheet.create({
    container: {
        margin: 10,
        flex: 1,
    },
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
    },
    btn: {
        position: 'absolute',
        bottom: 0,
        right: 0,
    },
});

const HomeScreen = ({navigation, route}) => {
    const [load, setLoad] = useState(true);

    useFocusEffect(
        useCallback(() => {
            setLoad(true);

            //処理終了後に 非表示
            setTimeout(() => {
                setLoad(false);
            }, 1500);
        }, []),
    );

    return (
        <SafeAreaView style={{height: '100%'}}>
            <ScrollView>
                {/* <Intro /> */}
                <View style={styles.container}>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                        }}>
                        <Button
                            info
                            onPress={() =>
                                navigation.navigate('Details', {
                                    itemId: 86,
                                    otherParam: 'anything you want here',
                                })
                            }>
                            <Text>Go to Details </Text>
                        </Button>

                        <Button
                            info
                            onPress={() => navigation.navigate('Diary')}>
                            <Text>日記一覧</Text>
                        </Button>

                        <Button
                            info
                            onPress={() => navigation.navigate('Friend')}>
                            <Text>botom</Text>
                        </Button>                                           
                    </View>

                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                        }}>
                        <Button
                            info
                            onPress={() => navigation.navigate('Intro')}>
                            <Text>Intro</Text>
                        </Button>  

                        <Button
                            info
                            onPress={() => navigation.navigate('Calendar')}>
                            <Text>Calendar</Text>
                        </Button>  
                    </View>

                    <View style={styles.box}>
                        <Text style={styles.boxText}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                        </Text>

                        <Icon name="add-sharp" style={styles.btn} />
                    </View>

                    <View style={styles.box}>
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                        </Text>
                    </View>

                    <View style={styles.box}>
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                        </Text>
                    </View>
                </View>
            </ScrollView>
            <Fab
                style={{backgroundColor: '#D4035F'}}
                position="bottomRight"
                onPress={() => {
                    navigation.navigate('DiaryMake');
                }}>
                <Icon name="add-sharp" style={{fontSize: 35}} />
            </Fab>
            <Loading loading={load} />
        </SafeAreaView>
    );
};

export default HomeScreen;
