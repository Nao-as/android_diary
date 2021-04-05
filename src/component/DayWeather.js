import React from 'react';
import { View, StyleSheet,Image, Dimensions } from 'react-native';
import {
    Content, Card, CardItem, Text, Body,
} from 'native-base';
const dimensions = Dimensions.get('window');
const imageHeight = Math.round((dimensions.width * 2) / 3);
const imageWidth = dimensions.width;

import {SvgUri} from 'react-native-svg';


const styles = StyleSheet.create({
    dayComonent: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom : 8,
        borderRadius: 4
    },
    date: {
        fontSize: 18,
        paddingBottom: 5,
    },
    day_weather: {
        fontWeight: '600',
        paddingTop: 5,
        fontSize: 18,
    }, cardBody:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: imageWidth * 0.3,
        height: imageHeight * 0.3,
    },
    dayTemperature: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 5,
    },
    dayTemperatureHigh: {
        fontSize: 16,
        color: '#eb4d4b',
        marginRight: 10,
    },
    dayTemperatureLow: {
        fontSize: 16,
        color: '#3498db'
    },
    chanceOfRainList :{
        flexDirection: 'row',
        margin: 4,
    },
    chanceOfRain: {
        paddingRight: 2,
        marginRight: 2,
        fontSize : 14
        // padding: 2,
    },
});

const ChangeRain = ({time, tes}) =>{
    return(
        <Text style={styles.chanceOfRain}>{time}/{tes}</Text>
    );
}

const DayWeather = (props) => {

    const data = props.weather;
    // console.log(data.image.url);
    return (
        <Content>
            <Card style={styles.dayComonent}>
                <CardItem header>
                        <Text style={styles.date}>{data.dateLabel} {data.date}</Text>
                </CardItem>
                <CardItem >
                    <Body style={styles.cardBody}>
                        <SvgUri style={styles.image} uri={data.image.url} />
                        <Text style={styles.day_weather}>{data.telop}</Text>
                        <View style={styles.dayTemperature}>
                            <Text style={styles.dayTemperatureHigh}>
                                {data.temperature.max ? `${data.temperature.max.celsius}℃` : `16℃`}
                            </Text>
                            <Text style={styles.dayTemperatureLow}>
                                {data.temperature.min ? `${data.temperature.max.celsius}℃` : `16℃`}
                            </Text>
                        </View>
                    </Body>
                </CardItem>
                <CardItem footer style={styles.chanceOfRainList}>
                    <ChangeRain tes={data.chanceOfRain["00-06"]} time={"00-06時"}></ChangeRain>
                    <ChangeRain tes={data.chanceOfRain["06-12"]} time={"06-12時"}></ChangeRain>
                    <ChangeRain tes={data.chanceOfRain["12-18"]} time={"12-18時"}></ChangeRain>
                    <ChangeRain tes={data.chanceOfRain["18-24"]} time={"18-24時"}></ChangeRain>
                </CardItem>
            </Card>
        </Content>
    );
}

export default DayWeather;

