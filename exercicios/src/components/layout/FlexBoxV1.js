import React from 'react'
import {View,Text, StyleSheet} from 'react-native'
import Quadrado from './Quadrado';

export default props => {
    return (
        <View style={style.FlexV1}>
            <Quadrado />
            <Quadrado cor="#f00" />
            <Quadrado cor="#0F0" />
            <Quadrado cor="#00F" />
            <Quadrado cor="#999" />  
        </View>
    )
}

const style = StyleSheet.create({
    FlexV1: {
        flex: 1,
        justifyContent: "space-between",
        backgroundColor: '#333'
    }
});