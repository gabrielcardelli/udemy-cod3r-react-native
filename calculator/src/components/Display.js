import React from "react"
import { StyleSheet, Text, View } from "react-native"


export default props => {
    return(
        <View style={styles.display}>
            <Text style={styles.displayValue} >{props.value}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    display: {
        flex:1,
        padding:20,
        justifyContent: 'center',
        backgroundColor: '#777',
        alignItems:'flex-end'
    },
    displayValue: {
        fontSize:60,
        color: '#fff'
    }
});