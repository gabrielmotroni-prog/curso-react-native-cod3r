import React, {useState} from 'react'
import { Text } from 'react-native'
import Estilo from '../estilo'
import Filho from './Filho'

export default props => {
    const [texto, setTexto] = useState('')
    const [num, setNum] = useState(0)
    

    //funcao mostra valor que vem do filho
    function exibiValor(numero, texto){
        setNum(numero)
        setTexto(texto)
    }
    
    
    //para essa funcao
    return (
        <>
            <Text style={Estilo.txtG}>
                {texto}{num}
            </Text>
            <Filho 
                min={1}
                max={60}
                funcao={exibiValor} />
                {/*o pai chama o filho e passa sua funcao recebe os dados do filho para exibir*/}
                {/*conceito callback: quando acontece um evento, uma funcao eh chamada de volta passando dados
                para essa funcao.
                no caso, chama filho e apos ela retornar, chama a funcao do pai passando os dados (texto e numero) */}
        </>

    )
}