import React from "react";
import { Text } from "react-native";
import estilo from "./estilo";

export default ({min,max}) => <Text style={estilo.txtG}>O numero gerado foi {Math. floor(Math. random() * (max - min + 1)) + min}</Text>

