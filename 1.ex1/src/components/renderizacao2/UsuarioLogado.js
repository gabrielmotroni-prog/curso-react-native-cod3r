import React from 'react'
import { Text } from 'react-native'
import Estilo from '../estilo'
import If from "./If"

export default props => {
    //fizemos dessa forma, para tratar null
    //eh passado um objeto usuario
    const usuario = props.usuario || {}

    return (

        <>
            {/*esse compoente so mostra o childre contidonos neele se o teste der true */}
            {/*verifica se passou todos os parametros*/}
            <If teste={usuario && usuario.nome && usuario.email}> 
                <Text style={Estilo.txtG}>Usuario Logado!</Text>
                <Text style={Estilo.txtG}>
                    {usuario.nome} - {usuario.email}
                </Text>
            </If>
        </>
    )
}