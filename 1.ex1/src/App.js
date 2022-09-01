import React from "react";
import { Text, View, StyleSheet } from 'react-native'

import Primeiro from './components/Primeiro' 
import CompPadrao, { Comp1, Comp2 } from "./components/Multi";
import MinMax from "./components/MinMax"
import Aleatorio from "./components/Aleatorio";
import Titulo from "./components/Titulo"
import Botao from "./components/Botao"
import Contador from "./components/Contador";
import Pai from "./components/indireta/Pai"
import ContadorV2 from "./components/contador/ContadorV2"
import Diferenciar from "./components/diferenciar/Diferenciar"
import ParImpar from "./components/renderizacao/ParImpar";
import Familia from "./components/relacao/Familia"
import Membro from "./components/relacao/Membro"
import UsuarioLogado from "./components/renderizacao2/UsuarioLogado";
import ListaProdutosV2 from "./components/produtos/ListaProdutosV2";
import DigiteSeuNome from "./components/compControlado/DigiteSeuNome";
import Quadrado from "./components/layout/Quadrado"
import FlexboxV1 from "./components/layout/FlexboxV1";
import FlexboxV2 from "./components/layout/FlexboxV2";
import FlexboxV3 from "./components/layout/FlexboxV3";
import FlexboxV4 from "./components/layout/FlexboxV4";
import Mega from "./components/mega/Mega";

// arrow function mais simplificada
//export default () => <Text>Primeiro Componente 1</Text>

export default () => (
    <View style={style.App} >
        
        {  
        /* 
        <Pai />
        <MinMax min={30} max={20} />
        <Text> { 1 + 10 }</Text>
        <Comp1 />
        <Comp2 />
        <Primeiro />
        <Aleatorio min={1} max={5}/>
        <Aleatorio min={1} max={5}/>
        <Aleatorio min={1} max={5}/>
        <Aleatorio min={1} max={5}/>
        <Aleatorio min={1} max={5}/> 
        <Titulo principal="Cadastrar Produto" segundario="Ver produto"/> 
        <Botao/>
        <Contador inicial={100} passo={10}/>
        <Contador/>
        <ContadorV2 />
        <Diferenciar />
         <ParImpar num={1} />
           <Familia>
           <Membro nome="Gabriel" sobrenome="Motroni" />
           <Membro nome="Diego" sobrenome="Motroni" />
        </Familia>
        <Familia>
           <Membro nome="Bruna" sobrenome="Souza" />
           <Membro nome="Cida" sobrenome="Souza" />
        </Familia>
         <UsuarioLogado usuario={ {nome:'Gabriel', email:'gabriel@hotmail.com'} } />
         <ListaProdutosV2 />
         <DigiteSeuNome />
         <FlexboxV1 />
         <FlexboxV2 />
         <FlexboxV3 />
          <FlexboxV4 />
        */}
        <Mega qtdNumeros={7}/>
       

    </View>
)

const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    }
})