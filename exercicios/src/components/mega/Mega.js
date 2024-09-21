import React from "react";
import { Button, Text, TextInput, View } from "react-native";   
import estilo from "../estilo";
import Numero from "./Numero";

export default class Mega extends React.Component {

    state = {
        qtdeNumeros : this.props.qtdeNumeros,
        numeros: []
    }

    alterarQtdeNumero(qtde){
        this.setState({
            qtdeNumeros : +qtde,
        });
    }

    gerarNumeroNaoContido = nums => {
        const novo = parseInt(Math.random() * 60) + 1;
        return nums.includes(novo) ? this.gerarNumeroNaoContido(nums) : novo;
    }

    gerarNumeros = () => {
        const numeros = Array(this.state.qtdeNumeros+1).fill().reduce((nums) => [...nums||[],this.gerarNumeroNaoContido(nums||[])]).sort((a,b) => a-b );
        console.log(numeros);
        this.setState({numeros:numeros})
    }

    render(){
        return (
            <>
                <Text style={estilo.txtG}>Gerador de Mega-Sena </Text>

                <TextInput placeholder="Qtde de Números"
                    keyboardType="number-pad"
                    style={{borderBottomWidth:1,marginBottom:20}}
                    value={this.state.qtdeNumeros}
                    onChangeText={qtde => this.alterarQtdeNumero(qtde)}
                     />

                <Button style={{marginTop:20}} title="Gerar" onPress={() => this.gerarNumeros()} />

                <View style={{
                    marginTop:20,
                    flexDirection: "row",
                    flexWrap:'wrap',
                    justifyContent:"center"
                }}>
                    {this.state.numeros.map(n => <Numero key={n} num={n} />)}
                </View>
            </>
        )
    }

}