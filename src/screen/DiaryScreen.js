import React from 'react';
import { useState, useEffect} from 'react';
import { StyleSheet, FlatList, Alert} from 'react-native';
import {
    Text,
    Button,
    View,Grid,Col
} from 'native-base';
// import Realm from 'realm';
import AsyncStorage from "@react-native-async-storage/async-storage";

const styles = StyleSheet.create({
    buttonArea: {
        margin: 10,
        flexDirection: 'row',
    },
    item: {
        margin : 8,
        backgroundColor : "#fafafa",
        borderLeftWidth : 4,
        borderLeftColor : "#ff2233",
        padding : 10
    },
    title : {
        fontSize : 18,
        marginBottom : 10
    }
});

const Diary = ({navigation}) => {
    const [data ,setData ] =useState([]);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
          loadAll(); 
        });
        return unsubscribe;
      }, [navigation]);

    const loadAll = async () => {
        try {
            const keys = await AsyncStorage.getAllKeys();
            keys.sort(); //
            const entryList = await AsyncStorage.multiGet(keys);
            // const diary = entryList.map(entry => JSON.parse(entry[1]));           
            // index 1　をJSON Perseして返す。
            const diary = entryList.map((entry) =>{
                let ser =[ entry[0], JSON.parse(entry[1]) ];
                return  ser;
            });
            // console.log(diary); //
            setData(diary);
        } catch (e) {
            console.log(error);
        }
    };
    const clearConf = (item)=>{
        Alert.alert(
            '','この日記を削除してよろしいでしょうか？',
            [
                {
                    text: 'キャンセル',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                {
                    text: '削除', 
                    onPress: () => {
                        clearDiary(item);
                    }
                },
            ],
            { cancelable: false },
        );
    };
    
    //対象のkey を取得し削除
    const clearDiary = async (key) =>{
        try {
            await AsyncStorage.removeItem(key);
        } catch (e) {
            console.log(e);
        }
        await loadAll();    
        console.log('Done.')
    };

    // ListItem
    const renderDiary = ({ item }) => {
        let memo = item[1];
        // console.log(item);
        return (
            <Grid style={styles.item} >
                <Col size={80}>
                    <Text style={styles.title}>{memo.date} : {memo.title}</Text>
                    <Text>{memo.text}</Text>
                </Col>
                <Col size={20}>
                    <Button info style={{ marginBottom: 10 }}
                        onPress={() => 
                            navigation.navigate('DiaryEdit',
                            { item}
                        )}
                    >
                        <Text>編集</Text>
                    </Button>
                    <Button danger 
                        onPress={() => { clearConf(item[0]) }}
                    >
                        <Text>削除</Text>
                    </Button>
                </Col>
            </Grid>
        )
    };

    return (
            <FlatList
                data={data}
                renderItem={renderDiary }
                keyExtractor={(item, index) => index.toString()}
            />
    );
};
export default Diary;

