import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View
} from 'react-native';
import { Text,Content, Accordion, Icon } from "native-base";

const dataArray = [
    { title: "1 Element", content: "Lorem ipsum dolor sit amet" },
    { title: "2 Element", content: "Lorem ipsum dolor sit amet" },
    { title: "3 Element", content: "Lorem ipsum dolor sit amet" },
    { title: "4 Element", content: "Lorem ipsum dolor sit amet" },
    { title: "5 Element", content: "Lorem ipsum dolor sit amet" },
    { title: "6 Element", content: "Lorem ipsum dolor sit amet" },
    { title: "7 Element", content: "Lorem ipsum dolor sit amet" },
    { title: "8 Element", content: "Lorem ipsum dolor sit amet" },
    { title: "9 Element", content: "Lorem ipsum dolor sit amet" },
    { title: "10 Element", content: "Lorem ipsum dolor sit amet" },
    { title: "11 Element", content: "Lorem ipsum dolor sit amet" },
    { title: "12 Element", content: "Lorem ipsum dolor sit amet" },
];
  
const HelpScreen = ({}) => {

    const renderHeader = (item,expanded)=>{
        return (
            <View
            style={[styles.helpHeader,]}>
                <View style={{width : '90%'}}>
                    <Text style={[styles.helpHeaderText]}>
                        Q. {item.title}
                    </Text>
                </View>
                {expanded ? (
                    <Icon style={{color: 'white'}} name="chevron-up" />
                ) : (
                    <Icon style={{color: 'white'}} name="chevron-down" />
                )}
            </View>
        );
    }
    const renderContent = (item) =>{
        return (
            <View style={[styles.helpContent,]}>
                <Text>A. {item.content}</Text>
            </View>
        );
    };

    return (
        <Accordion 
            dataArray={dataArray}
            expanded={[0]} 
            renderHeader={renderHeader}
            renderContent={renderContent}
        />
    );
}

const styles = StyleSheet.create({
    helpHeader: {
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
        marginRight: 15,
        marginLeft: 15,
        backgroundColor : '#FD7D7D',
      },
      helpHeaderText: {
        fontWeight: 'bold',
        color: '#fafafa',
      },
      helpContent: {
        marginTop :8,
        marginRight: 20,
        marginLeft: 20,
        padding : 8,
        backgroundColor : '#fafafa',
      },
});

export default HelpScreen;