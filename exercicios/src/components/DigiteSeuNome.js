import React, { useState } from 'react'
import {View,Text, TextInput} from 'react-native'
import Estilo from './estilo'

export default props => {

    let [nome,setNome] = useState("Teste");

    return (
        <View>
            <Text>{nome}</Text>
            <TextInput 
                placeholder='Digite seu Nome' 
                value={nome}
                onChangeText={nome => setNome(nome)} />
        </View>
    )
}