import React from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
} from 'react-native';
import {Text, Icon,} from 'native-base';

const styles = StyleSheet.create({
    bottomMenu: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: '#FFA8A8',
        padding: 4,
    },
    Menu: {
        width: '33.33%',
        flexDirection: 'column',
    },
    Icon: {
        textAlign: 'center',
        // color : "#fff"
    },
    IconText: {
        fontSize: 12,
        textAlign: 'center',
        color : "#fff"
    },
});


const BottomMenu = ({navigation}) => {
    return (
        <View style={styles.bottomMenu}>
            <TouchableOpacity
                style={styles.Menu}
                onPress={() => navigation.navigate('Home')}>
                <Icon style={styles.Icon} name={'home-outline'} />
                <Text style={styles.IconText}>HOME</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.Menu}
                onPress={() => navigation.navigate('Weather')}>
                <Icon style={styles.Icon} name={'calendar-outline'} />
                <Text style={styles.IconText}>
                    calender
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.Menu}
                onPress={() => navigation.navigate('Weather1')}>
                <Icon style={styles.Icon} name={'information-circle-outline'} />
                <Text style={styles.IconText}>Weather</Text>
            </TouchableOpacity>
        </View>
    );
};

export default BottomMenu;
