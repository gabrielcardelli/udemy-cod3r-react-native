import React from 'react'
import {View,Text} from 'react-native'
import Estilo from '../estilo'
import Membro from './Membro'

export default props => {
    return (
       <>
            <Text>Membros da Familia: </Text>
            {props.children}
       </>
    )
}