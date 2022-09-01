import React from 'react'
import TextoCentral from '../components/TextoCentral'

export default props => {
    // recebe do pai props {...pros}
    //assim conseguimos pegarr dados da rota e parametros
    //console.log(props.route.params)
    
    //tratando caso nao seja passado parametro param pela ou ela venha vazio
    const route = props.route || {params : { numero: 0  }}
    //console.warn(props.avancarParams)
 
    return (
        <TextoCentral corFundo='#9932cd'>
            Tela C - {props.avancarParams}
        </TextoCentral>
    )
}