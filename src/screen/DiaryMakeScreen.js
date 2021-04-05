import React from 'react';
import { useState, useEffect} from 'react';
import { StyleSheet, Alert, FlatList,Platform} from 'react-native';
import {
    Content,
    Form,
    Item,
    Input,
    Text,
    Textarea,
    Label,
    Button,
    View, Grid, Col, List, ListItem
} from 'native-base';
// import Realm from 'realm';

import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';
import AsyncStorage  from "@react-native-async-storage/async-storage";


// const getRealmApp = () => {
//     const appId = '<enter your Realm app ID here>'; // Set Realm app ID here.
//     const appConfig = {
//       id: appId,
//       timeout: 10000,
//     };
//    return new Realm.App(appConfig);
// }

const styles = StyleSheet.create({
    form: {
        margin: 8,
        borderColor: '#ff0000',
        borderWidth: 3,
    },
    buttonArea: {
        margin: 20,
        // flexDirection: 'row',
    },
    defaultInput: {
        marginLeft: 15,
        marginRight: 15,
        marginTop: 15,
        backgroundColor: 'white',
        borderRadius: 10,
    },
    formRow: {
        marginBottom : 10,
        flex :1,
        borderBottomWidth : 0
    }
});

const save = async (title, text,date) => {
    const key = 'time:' + Date.now();
    const value = JSON.stringify({
        title,
        text,
        date,
    });

    try {
        await AsyncStorage.setItem(key, value);
        alert("登録完了");
    } catch (e) {
        // saving error
        alert("登録ができませんでした");
        console.log(e);
    }
};
const clearAll = async () => {
    try {
        await AsyncStorage.clear();
    } catch (e) {
        // clear error
        alert("削除不可");
    }
    console.log('Done.')
};

const DiaryMakeScreen = ({navigation}) => {
    // const d = new Date();
    const [memo, setMemo] = useState('');
    const [title, settitle] = useState('');
    const [day, setDay] = useState('');

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false); //表示
    
    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        date = moment(date).format('Y/MM/DD');
        // console.warn("A date has been picked: ", date);
        setDay(date);
        setDatePickerVisibility(false);
    };

    const createDiary = () => {
        if (title !== ''&& memo !== ''
        ) {
            Alert.alert(
                '修正してよろしいでしょうか？',
                title + ':'+ memo,
                [
                    {
                        text: 'Cancel',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel',
                    },
                    { text: 'OK', onPress: () => {
                        setMemo('');
                        settitle('');
                        setDay('');
                        save(title, memo,day);
                        navigation.navigate('Home'); //home move
                    } },
                ],
                {cancelable: false},
            );
        }
    };

    return (
        <Content padder>
            <Form styles={styles.form}>

                <Item style={styles.formRow}>
                    <Label>日付</Label>    
                    <Input
                        placeholder="日付を入力"
                        style={styles.defaultInput}
                        onTouchStart={() => setDatePickerVisibility(true)}
                        value={day}
                    // disabled={Platform.OS === 'android' ? false : true}
                    />
                    <DateTimePickerModal
                        locale="ja"
                        isVisible={isDatePickerVisible}
                        mode="date"
                        onConfirm={handleConfirm}
                        onCancel={()=>{        
                            setDatePickerVisibility(false);
                        }}
                        date={day !== '' ? new Date(day) : new Date(new Date().setFullYear(new Date().getFullYear()))}
                        // maximumDate={new Date(new Date().setFullYear(new Date().getFullYear() - 20))}
                    />
                    
                    {/* 
                    <DateTimePickerModal
                        onConfirm={(e) => {
                        // setBirthday(moment(e).format('Y/MM/DD'));
                        // setDatePickerVisibility(false);
                        }}
                        maximumDate={new Date(new Date().setFullYear(new Date().getFullYear() - 20))}
                        date={day !== '' ? new Date(day) : new Date(new Date().setFullYear(new Date().getFullYear() - 20))}
                        display={'spinner'}
                    /> */}
                </Item>

                <Item style={styles.formRow}>
                    <Label>タイトル</Label>
                    <Input style={styles.defaultInput}
                        value={title}
                        onChangeText={(title) => settitle(title)}
                    />
                </Item>

                <Textarea
                    style={{...styles.defaultInput,marginBottom : 20}}
                    rowSpan={5}
                    bordered
                    placeholder="内容を入力してください"
                    value={memo}
                    onChangeText={(memo) => setMemo(memo)}
                />
                <Grid styles={styles.buttonArea}>
                    <Col >
                    <Button block
                        warning
                        onPress={() => navigation.navigate('Home')}>
                        <Text>戻る</Text>
                    </Button>
                    </Col >
                    <Col >
                    <Button block success onPress={() => createDiary()}>
                        <Text>登録する</Text>
                    </Button>
                        </Col >
                </Grid>
            </Form>

            <View>
                <Button 
                    warning
                    onPress={() => clearAll()}>
                    <Text>全データ削除</Text>
                </Button>
            </View>
        </Content>
    );
};

export default DiaryMakeScreen;
