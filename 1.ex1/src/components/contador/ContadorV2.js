import React, { useState } from 'react'
import { Text } from 'react-native'
import Estilo from '../estilo'
import ContadorDisplay from './ContadorDisplay'
import ContadorBotoes from './ContadorBotoes'

export default props => {
    const [num, setNum] = useState(0)

    const inc = () => setNum(num + 1)
    const dec = () => setNum(num - 1)

    return (
      <>
        <Text style={Estilo.txtG}>Contador</Text>
        {/*comunicao direta */}
        {/*Direta: o pai passando valores/dado ao fiho para ele exibir*/}
        <ContadorDisplay num={num}/>
         {/*comunicao indireta */}
         {/*Indireto: o pai passando funções ao componente filho, pra quando acontecer um evento 
         o filho notificar o pai e o pai atualizar os componentes*/}
        <ContadorBotoes inc={inc} dec={dec} />
      </>
    )
}