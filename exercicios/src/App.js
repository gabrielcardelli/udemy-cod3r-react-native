import React from "react";
import { Text, View, StyleSheet, SafeAreaView } from "react-native";
import Primeiro from "./components/Primeiro";
import X, {Comp1,Comp2} from './components/Multi';
import MinMax from "./components/MinMax";
import Aleatorio from "./components/Aleatorio";
import Titulo from "./components/Titulo";
import Botao from "./components/Botao";
import Contador from "./components/Contador";
import Pai from "./components/relacao/Familia";
import ContadorV2 from "./components/contador/ContadorV2";
import Diferenciar from "./components/Diferenciar";
import ParImpar from "./components/ParImpar";
import Familia from "./components/relacao/Familia";
import Membro from "./components/relacao/Membro";
import UsuarioLogado from "./components/UsuarioLogado";
import ListaProdutos from "./components/produtos/ListaProdutos";
import ListaProdutosV2 from "./components/produtos/ListaProdutosV2";
import DigiteSeuNome from "./components/DigiteSeuNome";
import Quadrado from "./components/layout/Quadrado";
import FlexBoxV1 from "./components/layout/FlexBoxV1";
import FlexBoxV2 from "./components/layout/FlexBoxV2";
import FlexBoxV3 from "./components/layout/FlexBoxV3";
import FlexBoxV4 from "./components/layout/FlexBoxV4";
import Mega from "./components/mega/Mega";


export default () => 
    <SafeAreaView style={style.App}>

        <Mega qtdeNumeros={7} />

        {/* <FlexBoxV4 /> */}

        {/* <FlexBoxV3 /> */}
        {/* <FlexBoxV2 /> */}
        {/* <FlexBoxV1 /> */}

        {/* <DigiteSeuNome /> */}
        {/* <ListaProdutosV2 /> */}

        {/* <ListaProdutos /> */}

        {/* <UsuarioLogado usuario={{nome: "Gui", email : "usuario@email.com"}} />

        <UsuarioLogado usuario={{nome: "Ana"}} />

        <UsuarioLogado usuario={{email : "usuario2@email.com"}} /> */}

        {/* <Familia>
            <Membro nome="Ana" sobrenome="Silva" />
            <Membro nome="Julia" sobrenome="Silva" />
        </Familia>

        <Familia>
            <Membro nome="Gabriel" sobrenome="Souza" />
            <Membro nome="Larissa" sobrenome="Pinto" />
        </Familia> */}
        {/* <ParImpar num={4} /> */}

        {/* <Diferenciar/> */}

        {/* <ContadorV2 /> */}

        {/* <Contador inicial = {100} />
        <Contador passo = {20} /> */}

        {/* <Pai /> */}

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
    </SafeAreaView>

const  style = StyleSheet.create({
    App: {
        // backgroundColor: "#A00",
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    }
});