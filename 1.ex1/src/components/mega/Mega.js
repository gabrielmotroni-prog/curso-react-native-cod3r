
//componente baseado em classe 

import React, { Component } from "react";
import { Button, Text, TextInput, View } from 'react-native'
import Estilo from '../estilo'
import ListaMega from "./ListaMega";

export default class Mega extends Component { // repare que extende componente do react 

    //1 estrategia: objeto state
    state = {
        qtdNumeros: this.props.qtdNumeros,
        numeros:[1]
    }

    alterarQtdNumero = (qtde) => { // eh chamado quando acontece evento na interface, alterado o input
        this.setState({qtdNumeros: +qtde})
        //this.gerarNumeros() deixa dinamicoo
        
    }
    gerarNumerosNaoContido = nums => {
        const novo = parseInt(Math.random() * 60 + 1) //gera numero aleatorio entra 1 a 60
        return nums.includes(novo) ? this.gerarNumerosNaoContido(nums) : novo // funcao recursiva; verifica se ja existe numero
    }

    //minha versao
    gerarNumeros = () => {
        const { qtdNumeros } = this.state //destructuring
        const numeros  =[]

        for( let i = 0; i < qtdNumeros; i++){
            const numero_aleatorio = this.gerarNumerosNaoContido(numeros)
            numeros.push(numero_aleatorio)
        }
        numeros.sort((a,b) => a - b)
        this.setState({numeros: numeros})

    }

    // versao do professor
    // gerarNumeros = () => {
    // const numeros = Array(this.state.qtdNumeros)
    //     .fill() //gera array prenchido com underfined com qtd passada
    //     .reduce(n => [...n, this.gerarNumerosNaoContido(n)], [])
    //     .sort((a,b) => a - b)

    // this.setState({numeros: numeros})
    // }

    // //2 forma: a partir do construtor
    // constructor(props){
    //     super(props)//passando para a classe pai
    //     this.state = {
    //         qtdNumeros : props.qtdNumeros + 1000
    //     }
    // }

    //funcao render: sera chamada quando meu componenete precisar ser mostrado na tela.
    //a resposta desssa funcao precisa ser jsx
    render(){
        return (
        <>
            <Text style={Estilo.txtG}>
                Gerador de Mega-Sena
                {this.state.qtdNumeros}
            </Text>
            <TextInput 
                keyboardType={'numeric'}
                style={{borderBottomWidth: 1}}
                placeholder="Qde de Numeros"
                value={this.state.qtdNumeros}
                onChangeText={this.alterarQtdNumero}>
            </TextInput>
            <Button 
                title="Gerar"
                onPress={this.gerarNumeros}
            /> 
            <View style={{flexDirection:'row', marginTop:20, justifyContent:'center', alignItems:'center'}}> 
                <ListaMega numeros={this.state.numeros} />
            </View>
      
          
           
        </>
        )
    }

    
}


