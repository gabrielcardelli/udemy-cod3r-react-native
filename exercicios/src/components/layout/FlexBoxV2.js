import React from 'react'
import {View,Text, StyleSheet} from 'react-native'
import Quadrado from './Quadrado';

export default props => {
    return (
        <View style={style.FlexV2}>
            <Quadrado />
            <Quadrado cor="#f00" />
            <Quadrado cor="#0F0" />
            <Quadrado cor="#00F" />
            <Quadrado cor="#999" />  
        </View>
    )
}

const style = StyleSheet.create({
    FlexV2: {
        flex: 1,
        width:'100%',
        alignItems: 'flex-end',
        justifyContent: "space-evenly",
        backgroundColor: '#333'
    }
});