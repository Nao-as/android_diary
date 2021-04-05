import React from 'react';
import { useState, useEffect} from 'react';
import { StyleSheet, Alert, FlatList,Platform} from 'react-native';
import {
    Content,
    Form,
    Item,
    Input,
    Text,
    Button,
    View, Grid, Col, List, ListItem
} from 'native-base';
import { Calendar,LocaleConfig } from 'react-native-calendars';

import moment from 'moment';
import AsyncStorage  from "@react-native-async-storage/async-storage";

//https://github.com/wix/react-native-calendars

const styles = StyleSheet.create({ 
    list : {
        marginTop : 10,
        marginHorizontal : 10,
        marginVertical : 10,
        borderWidth : 1,
    },
    dayList: {

    }
});

LocaleConfig.locales.jp = {
    monthNames: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    monthNamesShort: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    dayNames: ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日'],
    dayNamesShort: ['日', '月', '火', '水', '木', '金', '土'],
  };
LocaleConfig.defaultLocale = 'jp';

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

const CalendarScreen = ({navigation}) => {
    // const d = new Date();
    const [memo, setMemo] = useState('');
    const [title, settitle] = useState('');
    const [day, setDay] = useState('');

    // const [isDatePickerVisible, setDatePickerVisibility] = useState(false); //表示
    
    return (
        <Content padder>
            <Calendar monthFormat={'yyyy年 MM月'} 
            onDayPress={day => {
                console.log('selected day', day);
            }}
            // 年月の表示フォーマット。
            monthFormat={'yyyy年 MM月'}
            // 年月を変更したときの挙動。
            onMonthChange={month => {
                console.log('month changed', month);
            }}
            // 初めの曜日設定。例えば、月曜日なら１、日曜日なら７
            firstDay={2}
            // スワイプでの年月変更の可否。 デフォルト値 = false
            enableSwipeMonths={true}

            // onDayPress={(day) => {this.setState({select:day})}}

            // markedDates={{
            //     '2021-03-25': {dots: 'red' },
            //   }}
            />

            <View style={styles.list}>
                <Text>○月○日</Text>
                <FlatList style={styles.dayList} />
            </View>
            
        </Content>
    );
};

export default CalendarScreen;
