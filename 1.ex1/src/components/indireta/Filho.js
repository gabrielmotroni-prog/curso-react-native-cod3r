import React from 'react'
import { Button, Text } from 'react-native'
import Estilo from '../estilo'

export default props => {

    function geraNumero(min, max) {
        const fator = max - min + 1
        return parseInt(Math.random() * fator ) + min
    }

    return (
        <Button 
            title="Executar"
            onPress={ function(){
                const n = geraNumero(props.min, props.max)
                {/* mando para funcao do pai um numero e um texto e ele vai exbir */}
                props.funcao(n, 'O Valor é: ')
            } }
        />
    )
}