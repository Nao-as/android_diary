/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import * as React from 'react';
import {SafeAreaView, ScrollView, View, StyleSheet} from 'react-native';
import {Text, Button, Icon} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from './src/screen/HomeScreen';
import WeatherScreen from './src/screen/WeatherScreen';
import DiaryScreen from './src/screen/DiaryScreen';
import DiaryMakeScreen from './src/screen/DiaryMakeScreen';
import DiaryEditScreen from './src/screen/DiaryEditScreen';
import CalendarScreen from './src/screen/CalendarScreen';

import HelpScreen from './src/screen/HelpScreen';
import FriendsScreen from './src/screen/FriendsScreen';
import BottomMenu from './src/component/BottomMenu';

import Intro from './src/screen/Intro';


// https://weather.tsukumijima.net/api/forecast
// https://qiita.com/keneo/items/d3a36d973c0b89829aa9

const DetailsScreen = ({navigation, route}) => {
    const {itemId, otherParam} = route.params;

    return (
        <SafeAreaView style={{height: '100%'}}>
            <ScrollView>
                <View
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                    <Text>Details Screen</Text>
                    <Text>Id: {JSON.stringify(itemId)}</Text>
                    <Text>本文: {JSON.stringify(otherParam)}</Text>

                    <Button onPress={() => navigation.goBack()}>
                        <Text>Go back</Text>
                    </Button>
                </View>
            </ScrollView>
            <BottomMenu navigation={navigation} />
        </SafeAreaView>
    );
};

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const BottomTab = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home" //初期ルート
            screenOptions={({route}) => ({
                tabBarIcon: ({focused}) => {
                    let iconName = 'home';
                    if (route.name === 'Home') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'Weather') {
                        iconName = focused ? 'calendar' : 'calendar-outline';
                    } else if (route.name === 'Weather1') {
                        iconName = focused
                            ? 'information-circle'
                            : 'information-circle-outline';
                    }
                    return <Icon name={iconName} />;
                },
            })}
            sceneContainerStyle={
                {
                    // backgroundColor : '#ffaaff' //画面全体の設定
                }
            }
            tabBarOptions={{
                activeTintColor: '#ff0000',
                activeBackgroundColor: '#fff',
                inactiveTintColor: '#fafafa',
                tabStyle: {backgroundColor: '#FFA8A8'}, //背景色変更
            }}>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    title: 'Home',
                    // tabBarLabel: 'Home',
                }}
            />
            <Tab.Screen
                name="Weather"
                component={WeatherScreen}
                options={{title: '天気予報'}}
            />
            <Tab.Screen
                name="Weather1"
                component={WeatherScreen}
                options={{title: '天気予報'}}
            />
        </Tab.Navigator>
    );
};


const HeaderRightButton = ({handlePress, iconColor}) => {
  const {data, application} = useSelector((state) => state);
  const headerRightStyles = StyleSheet.create({
    drawerButton: {
      backgroundColor: 'transparent',
      elevation: 0,
      marginRight: 20,
      marginLeft: 20,
      paddingVertical: 0,
      padding: 5,
      flex: 1,
      justifyContent: 'center',
    },
  });

  return !application.intro ? (
    <Button
      onPress={handlePress}
      title="Info"
      style={headerRightStyles.drawerButton}>
      <Text>
        <Icon name={"home"} />
      </Text>
    </Button>
  ) : (
    <></>
  );
};

const App = () => {
    const HeaderRightButton = ({navigation}) => {
        const headerRightStyles = StyleSheet.create({
            helpBtn: {
                backgroundColor: '#FFA8A8',
                paddingVertical: 0,
                padding: 0,
                flex: 1,
                justifyContent: 'center',
            },
        });

        return (
            <Button
                onPress={() => navigation.navigate('Help')}
                title="Info"
                style={headerRightStyles.helpBtn}>
                <Text>
                    <Icon
                        name={'help'}
                        style={{fontSize: 24, color: '#fafafa'}}
                    />
                </Text>
            </Button>
        );
    };

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#FFA8A8',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    headerRight: () => (
                        <HeaderRightButton handlePress={navigation} />
                      ),
                }}>
                {/* <Tab.Navigator>
            <Tab.Screen name="Home" 
                component={HomeScreen} 
                options={({navigation}) => ({ 
                    title: 'HOME' ,
                    headerTitleAlign: 'center',
                    headerRight: () => (
                        <HeaderRightButton navigation={navigation} />
                    ),
                })}
            />
            <Tab.Screen name="CreatePost"
                component={CreatePostScreen}
                options={({navigation}) => ({ 
                    title: 'post',
                    headerTitleAlign: 'center',
                    headerRight: () => (
                        <HeaderRightButton navigation={navigation} />
                    ),
                })}
            />
        </Tab.Navigator> */}

                <Stack.Screen
                    name="Menu"
                    component={BottomTab}
                    options={({navigation}) => ({
                        title: '自作アプリ',
                        headerTitleAlign: 'center',
                        headerRight: () => (
                            <HeaderRightButton navigation={navigation} />
                        ),
                    })}
                />
                <Stack.Screen
                    name="Details"
                    component={DetailsScreen}
                    options={({navigation}) => ({
                        title: '詳細',
                        headerTitleAlign: 'center',
                        headerRight: () => (
                            <HeaderRightButton navigation={navigation} />
                        ),
                    })}
                />
                <Stack.Screen
                    name="Diary"
                    component={DiaryScreen}
                    options={({navigation}) => ({
                        title: '日記一覧',
                        headerTitleAlign: 'center',
                        headerRight: () => (
                            <HeaderRightButton navigation={navigation} />
                        ),
                    })}
                />
                <Stack.Screen
                    name="DiaryMake"
                    component={DiaryMakeScreen}
                    options={({navigation}) => ({
                        title: '日記作成',
                        headerTitleAlign: 'center',
                        headerRight: () => (
                            <HeaderRightButton navigation={navigation} />
                        ),
                    })}
                />
                <Stack.Screen
                    name="DiaryEdit"
                    component={DiaryEditScreen}
                    options={({navigation}) => ({
                        title: '日記編集',
                        headerTitleAlign: 'center',
                        headerRight: () => (
                            <HeaderRightButton navigation={navigation} />
                        ),
                    })}
                />
                <Stack.Screen
                    name="Calendar"
                    component={CalendarScreen}
                    options={({navigation}) => ({
                        title: 'カレンダー一覧',
                        headerTitleAlign: 'center',
                        headerRight: () => (
                            <HeaderRightButton navigation={navigation} />
                        ),
                    })}
                />


                <Stack.Screen
                    name="Friend"
                    component={FriendsScreen}
                    options={({navigation}) => ({
                        title: 'ボトムバー表示',
                        headerTitleAlign: 'center',
                        headerRight: () => (
                            <HeaderRightButton navigation={navigation} />
                        ),
                    })}
                />
                <Stack.Screen
                    name="Help"
                    component={HelpScreen}
                    options={{
                        title: 'よくある質問',
                        headerTitleAlign: 'center',
                    }}
                />
                <Stack.Screen
                    name="Intro"
                    component={Intro}
                    options={{
                        title: 'Intro',
                        headerTitleAlign: 'center',
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
