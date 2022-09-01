import React from 'react'

import {
    StyleSheet,
    Text,
    Dimensions,
    TouchableHighlight
} from 'react-native'

//estilo
const styles = StyleSheet.create({
    button:{
        fontSize: 40,
        height: Dimensions.get('window').width / 4 , //divide por 4 a dimendao da tela
        width: Dimensions.get('window').width / 4,
        padding: 20,
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#888'
    },
    operationButton: {
        color: '#fff',
        backgroundColor: '#fa8231',
    },
    buttonDoule: {
        width: (Dimensions.get('window').width / 4 ) * 2 //dobra o botao, faz cresce duas casas
    },
    buttonTriple: {
        width: (Dimensions.get('window').width / 4 ) * 3 //tripla o botao, faz crescer 3 casas
    }
})
export default props => {
    //array de estilos
    const styleButton = [styles.button]
    if(props.operation) styleButton.push(styles.operationButton)
    if(props.double) styleButton.push(styles.buttonDoule)
    if(props.triple) styleButton.push(styles.buttonTriple)

    return (
        <TouchableHighlight onPress={()=>props.onClick(props.label)}>
            <Text style={styleButton}>{props.label}</Text>
        </TouchableHighlight>
    )
}

//divimos por 4, pegando a dimensao do celular dividindo por 4 se espirando na calculadora do ios
//altura e largura divido por 4, ou seja, 25% cada. Ficara igual.
// o botao entao ficara quadrado e sempre Pgando a dimendao do celular e calculando divisao por 4

//coponente touchableHighlight: um espaco aonde eu posso tocar (sensivel ao toque)
//componete deseja que o pai seja notificado quando componente filho gerar um evento, vc passa nas propriedades
//uma funcao que seja chamada quando filho clicar 