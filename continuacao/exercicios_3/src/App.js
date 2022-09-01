/* eslint-disable */ 
import React from "react"
import { View , Text, SafeAreaView, StyleSheet } from "react-native"
import Titulo from './components/Titulo'
import Botao from './components/Botao'

// import Primeiro from './components/Primeiro'
// import CompPadrao,{Comp1, Comp2}  from './components/Multi'
//import MinMax from "./components/MinMax"
//import Aleatorio from "./components/Aleatorio"
//import Contador from "./components/Contador"
//import Pai from "./components/direta/Pai"
// import Pai from "./components/indireta/Pai"
// import ContadorV2 from "./components/contador/ContadorV2"
// import Diferenciar from "./components/Diferenciar"
// import ParImpar from "./components/ParImpar"
// import Familia from "./components/relacao/Familia"
// import Membro from "./components/relacao/Membro"
import UsuarioLogado from "./components/renderizacaoCondicional/Forma#2/UsuarioLogado"


function pesquisar () {

}


export default () => (
        
        <SafeAreaView style={style.App}> 
            {/* <CompPadrao/>
            <Comp1 />
            <Comp2 />
            <Primeiro /> 
            <MinMax min={3} max={20}/>
            <MinMax min={1} max={94}/>
            <Aleatorio  min={1} max={94}/>
            <Aleatorio  />
            <Titulo principal={'Tela Cadastro'} secundaria={'Tela de cadastro de produto'}/>
            <Titulo principal={'Tela Cadastro'} secundaria={'Tela de cadastro de produto'}/>
            <Botao />  
            <Pai />
                         
            <Pai />
            <Pai />
            <ContadorV2 />
            <Diferenciar />
            <ParImpar num={1}/>
             <Familia>
                <Membro nome={"Gabriel"} />
                <Membro nome={"Diego"} />
                <Membro nome={"Pai"} />
                <Membro nome={"Mae"} />
            </Familia>
            <Familia>
                <Membro nome={"Bruna"} />
                <Membro nome={"Cida"} />
            </Familia>
            */}
            <UsuarioLogado usuario={{nome:'gabriel', email:'biel@gmail.com'}}/>

        </SafeAreaView>  
    )

const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding:20
    }
})


