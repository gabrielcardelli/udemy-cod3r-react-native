import React, { useState } from 'react'
import {View,Text} from 'react-native'
import Filho from './Filho'
import estilo from '../estilo';

export default props => {

    const [num,setNum] = useState();
    const [texto,setTexto] = useState();

    function exibirValor(numero,inicio){
        setNum(numero);
        setTexto(inicio); 
    }

    return (
        <>
            <Text style={estilo.txtG}>{texto}{num}</Text>
            <Filho funcao={exibirValor} min={1} max={60} />
        </>
    )
}