import React from 'react';
import { StyleSheet,View, ActivityIndicator } from 'react-native';

const Loading = ({loading, isIcon}) => {
    return (
        <>
            {loading && ( 
            <View style={styles.loading}>
                {isIcon ? (
                <ActivityIndicator size="large" color="#ffffff" />
            ) : (
                <View />
            )}
            </View>
        )}
        </>
    );    
}

Loading.defaultProps = {
    isIcon: true,
};

const styles = StyleSheet.create({
    loading: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'center',
      opacity: 0.5,
      backgroundColor: 'black',
    },
  });

export default Loading;
