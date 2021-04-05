import React from 'react';
import { useState, useEffect} from 'react';
import {SafeAreaView, ScrollView, StyleSheet,Image,ImageBackground} from 'react-native';
import {
    Text,
    Button,
    View, 
} from 'native-base';
import AppIntroSlider from 'react-native-app-intro-slider';

const slides = [
{
    key: '1',
    title: 'Title 1',
    text: 'Description.\nSay something cool',
    image: require('../assets/intro/test1.jpg'),
},
{
    key: '2',
    title: 'Title 2',
    text: 'Other cool stuff',
    image: require('../assets/intro/test2.jpg'),
},
{
    key: '3',
    title: 'Rocket guy',
    text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
    image: require('../assets/intro/test3.jpg'),
},
{
  key: '4',
  title: 'Rocket ',
  text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
  image: require('../assets/intro/test2.jpg'),
},{
  key: '5',
  title: 'Rocket Start !!',
  text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
  image: require('../assets/intro/test1.jpg'),
}
];

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    resizeMode: 'cover',
  },
  slideBg : {    
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  title: {
    color: '#fafafa',
    marginTop: 40,
    marginBottom: 50,
    textAlign: 'center',
    fontSize: 40,
  },
  text: {
    color: 'white',
    marginTop: 20,
    textAlign: 'center',
    paddingHorizontal: 50,
    marginBottom: 50,
  },
  doneBtn: {
    backgroundColor: '#1DCD00',
    marginVertical: 40,
    marginHorizontal: 30,
    borderRadius: 20,
  },
});

// const Intro = () =>{
//     const [showApp,setShow ] = useState(false);

//     _renderItem = ({ item }) => {
//         return (
//         <View style={styles.slide}>
//             <Text style={styles.title}>{item.title}</Text>
//             <Image source={item.image} />
//             <Text style={styles.text}>{item.text}</Text>
//         </View>
//         );
//     }
//     _onDone = () => {
//         setShow( true);
//     };

//     return  (
//         <SafeAreaView style={{height: '100%'}}>
//         <ScrollView>
//         <View>
//             <AppIntroSlider 
//                         renderItem={()=> _renderItem} 
//                         data={slides} 
//                         onDone={()=>_onDone} 
//                     />
//         </View>
//        </ScrollView>
//        </SafeAreaView>

//     );
// };

// export default Intro;


export default class AppIntro extends React.Component {
  // {navigation}
    state = {
      showRealApp: false
    };

    _renderItem = ({ item }) => {
      return (
        <ImageBackground style={styles.slide} source={item.image}>
          <View style={styles.slideBg}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.text}>{item.text}</Text>
            {item.key == slides.length && (
            <Button style={styles.doneBtn} block >
              <Text style={{color: 'white', fontWeight: 'bold'}}>
                さあ、始めましょう!
              </Text>
            </Button>
          )}
        </View>
        </ImageBackground>
      );
    }
    
    _onDone = () => {
      this.setState({ showRealApp: true });
      // navigation.navigate('Top');

    }
    render() {
      return ( 
        <AppIntroSlider 
          renderItem={this._renderItem} 
          data={slides} 
          onDone={this._onDone}
          activeDotStyle={{backgroundColor: '#FF5E1F'}}
          dotStyle={{backgroundColor: 'white'}}
          showDoneButton={false}
        />
      );
    }
  }