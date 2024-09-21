import React from 'react'
import {View,Text, Button} from 'react-native'

export default props => {
    return (
       <>
        <Button title='+' onPress={props.inc} />
        <Button title='-' onPress={props.dec} />
       </>
    )
}