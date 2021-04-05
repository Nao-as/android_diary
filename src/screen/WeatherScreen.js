import React, {useState, useEffect} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    FlatList,
} from 'react-native';
import {Content, Card, CardItem, Button, Text, Body} from 'native-base';
import axios from 'axios';
import DayWeather from '../component/DayWeather';
import Loading from '../component/loading';

const URL = 'https://weather.tsukumijima.net/api/forecast/city/';

// const dayWeather = [
//     {
//         dateLabel: "今日",
//         telop: "曇り",
//         date: "2018-12-04",
//         temperature: {
//             min: null,
//             max: {
//                 celsius: "21",
//                 fahrenheit: "69.8"
//             },
//         },
//         image: {
//             width: 50,
//             url: "http://flat-icon-design.com/f/f_traffic_4/s256_f_traffic_4_0bg.png",
//             title: "曇り",
//             height: 31
//         }
//     },
//     {
//         dateLabel: "明日",
//         telop: "晴れ",
//         date: "2018-12-05",
//         temperature: {
//             min: null,
//             max: {
//                 celsius: "15",
//                 fahrenheit: "59.0"
//             },
//         },
//         image: {
//             width: 50,
//             url: "http://flat-icon-design.com/f/f_traffic_4/s256_f_traffic_4_0bg.png",
//             title: "曇り",
//             height: 31
//         }
//     },
// ];

const WeatherScreen = ({navigation}) => {
    const [wether, setPosts] = useState([]);
    const [btnDisable, setBtnDisable] = useState([]);
    const [load, setLoad] = useState(true);

    useEffect(() => {
        setLoad(true);
        fetchWeather();
    }, []);

    const fetchWeather = (base = '270000') => {
        axios
            .get(URL + base)
            .then((res) => {
                setPosts(res.data);
                setBtnDisable(base);
            })
            .catch((error) => console.log(error))
            .finally(() => {
                setTimeout(() => {
                    setLoad(false);
                }, 500);
                console.log('state set');
            });
    };
    // console.log(wether.forecasts);

    return (
        <SafeAreaView style={{height: '100%'}}>
            <ScrollView>
                <Content style={styles.weather}>
                    <View style={styles.btnArea}>
                        <Button
                            info
                            onPress={() => fetchWeather('270000')}
                            disabled={btnDisable == '270000'}
                            style={styles.button}>
                            <Text>大阪</Text>
                        </Button>
                        <Button
                            info
                            onPress={() => fetchWeather('280010')}
                            disabled={btnDisable == '280010'}
                            style={styles.button}>
                            <Text>兵庫</Text>
                        </Button>
                        <Button
                            info
                            onPress={() => fetchWeather('260010')}
                            disabled={btnDisable == '260010'}
                            style={styles.button}>
                            <Text>京都</Text>
                        </Button>
                        <Button
                            info
                            onPress={() => fetchWeather('290010')}
                            disabled={btnDisable == '290010'}
                            style={styles.button}>
                            <Text>奈良</Text>
                        </Button>
                    </View>

                    <Card>
                        <CardItem header style={styles.weatherContainer}>
                            <Text style={styles.weatherTitle}>
                                {wether.title}
                            </Text>
                        </CardItem>
                        <CardItem>
                            <Body>
                                {wether.description && (
                                    <Text>{wether.description.text} </Text>
                                )}
                            </Body>
                        </CardItem>
                    </Card>

                    <FlatList
                        data={wether.forecasts}
                        renderItem={({item}) => <DayWeather weather={item} />}
                        keyExtractor={(item) => item.date.toString()}
                    />
                </Content>
            </ScrollView>
            <Loading loading={load} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    button: {
        padding: 8,
        borderRadius: 8,
    },
    weather: {
        paddingTop: 4,
        borderRadius: 10,
        margin: 10,
    },
    weatherContainer: {
        backgroundColor: '#aafafa',
        marginBottom: 10,
        justifyContent: 'center',
    },
    weatherTitle: {
        fontSize: 20,
    },
    dayWeather: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    btnArea: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: 8,
    },
});

export default WeatherScreen;
