import React from 'react'
import {View,Text, StyleSheet} from 'react-native'
import Estilo from '../estilo'

export default props => {
    return (
        <View style={style.Container}>
            <Text style={[Estilo.txtG,style.Num]}>{props.num}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    Container: {
        backgroundColor:'#000',
        height: 50,
        width: 50,
        margin: 5,
        borderRadius: 25
    },
    Num : {
        color:'#fff'
    }
});