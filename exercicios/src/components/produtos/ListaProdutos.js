import React from 'react'
import {View,Text} from 'react-native'
import Estilo from '../estilo'

import produtos from './produtos'

export default props => {
    return (
        <>
            <Text style={Estilo.txtG}>Lista de Produtos</Text>

            {produtos.map( p  => {
                return <Text key={p.id}>{p.id}) {p.nome} tem preço R$ {p.preco}</Text>
            })}

        </>
    )
}