import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Primeiro from "./components/Primeiro";
import X, {Comp1,Comp2} from './components/Multi';
import MinMax from "./components/MinMax";
import Aleatorio from "./components/Aleatorio";
import Titulo from "./components/Titulo";
import Botao from "./components/Botao";
import Contador from "./components/Contador";


export default () => 
    <View style={style.App}>

        <Contador inicial = {100} />

        <Contador passo = {20} />

        {/* <Botao /> */}

        {/* <Titulo principal="Cadastro Produto" secundario="Tela de Cadastro do Produto" /> */}

        {/* <MinMax min={3} max={20} />
        <MinMax min={1} max={94} />
        <Aleatorio min={5} max={30} />
        <Aleatorio min={5} max={30} />
        <Aleatorio min={5} max={30} />
        <Aleatorio min={5} max={30} />
        <Aleatorio min={5} max={30} />
        <Aleatorio min={5} max={30} />
        <Aleatorio min={5} max={30} />
        <Aleatorio min={5} max={30} />
        <Aleatorio min={5} max={30} /> */}
        {/* <X />
        <Primeiro/>
        <Comp1 />
        <Comp2 /> */}
    </View>

const  style = StyleSheet.create({
    App: {
        // backgroundColor: "#A00",
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    }
});