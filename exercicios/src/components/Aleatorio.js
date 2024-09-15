import React from "react";
import { Text } from "react-native";
import estilo from "./estilo";

export default (props) => {
    let numeroGerado = Math. floor(Math. random() * (props.max - props.min + 1)) + props.min;

    return <Text style={estilo.txtG}>O numero gerado foi {numeroGerado}</Text>

}