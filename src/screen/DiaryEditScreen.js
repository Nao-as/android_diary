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
    View, Grid, Col,
} from 'native-base';
// import Realm from 'realm';

import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';
import AsyncStorage  from "@react-native-async-storage/async-storage";

const styles = StyleSheet.create({
    form: {
        margin: 8,
        borderColor: '#ff0000',
        borderWidth: 3,
    },
    buttonArea: {
        margin: 20,
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


//https://stackoverflow.com/questions/54311322/how-to-update-saved-items-asyncstorage
const save = async (key,title, text,date,) => {
    const value = JSON.stringify({
        title,
        text,
        date,
    });

    console.log(value);

    try {
        let ans = await AsyncStorage.getItem(key); //該当のデータ取得可能
        console.log(ans);
        if (ans !== null) {
            await AsyncStorage.setItem(key, value);
            Alert.alert(
                '','変更完了しました。',
            )    
        }
    } catch (e) {
        // saving error
        console.log(e);
    }
};


const DiaryEditScreen = ({navigation,route}) => {

    const data = route.params;
    // console.log(item);
    // console.log(item.item[1].date);

    //遷移元からの初期値を設定 
    const [key, setKey] = useState(data.item[0]);
    const [memo, setMemo] = useState(data.item[1].text);
    const [title, settitle] = useState(data.item[1].title);
    const [day, setDay] = useState(data.item[1].date);
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false); //表示
    
    const handleConfirm = (date) => {
        date = moment(date).format('Y/MM/DD');
        setDay(date);
        setDatePickerVisibility(false);
    };

    const edit = () => {
        if (
            day !== '' &&
            title !== ''&& 
            memo !== '' 
        ) {
            Alert.alert(
                '変更してよろしいでしょうか？',
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
                        save(key,title, memo,day);
                        // navigation.navigate('Diary'); 
                        navigation.goBack();
                        //
                        // this.props.navigation.addListener(
                        //     'didFocus',
                        //     payload => {
                        //       this.forceUpdate();
                        //     }
                        //   );
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
                    />
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
                        onPress={() => navigation.navigate('Diary')}>
                        <Text>一覧に戻る</Text>
                    </Button>
                    </Col >
                    <Col >
                    <Button block success onPress={() => edit()}>
                        <Text>更新する</Text>
                    </Button>
                        </Col >
                </Grid>
            </Form>
        </Content>
    );
};

export default DiaryEditScreen;
