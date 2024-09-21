import React from 'react'
import {View,Text, StyleSheet} from 'react-native'
import Quadrado from './Quadrado';

export default props => {
    return (
        <View style={style.FlexV2}>
            <Quadrado lado={20} />
            <Quadrado cor="#f00" lado={30} />
            <Quadrado cor="#0F0" lado={40}/>
            <Quadrado cor="#00F" lado={50}/>
            <Quadrado cor="#999" lado={60}/>  
        </View>
    )
}

const style = StyleSheet.create({
    FlexV2: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
        height: 300,
        width:'100%',
        backgroundColor: '#333'
    }
});