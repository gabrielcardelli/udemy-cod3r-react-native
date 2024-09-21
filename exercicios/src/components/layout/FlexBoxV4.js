import React from 'react'
import {View,Text, StyleSheet} from 'react-native'
import Quadrado from './Quadrado';

export default props => {
    return (
        <View style={style.FlexV4}>
            <View style={style.V0}></View>
            <View style={style.V1}></View>
            <View style={style.V2}></View>
        </View>
    )
}

const style = StyleSheet.create({
    FlexV4: {
        flexGrow:1,
        width:100,
        backgroundColor: '#000'
    },
    V0: {
      backgroundColor:'#333',
      height:300  
    },
    V1: {
        backgroundColor: '#ccc',
        flexGrow: 90
    },
    V2:{
        backgroundColor: '#565',
        flexGrow:10
    }
});