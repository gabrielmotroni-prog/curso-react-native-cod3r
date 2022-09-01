import React from 'react'
import { Text } from 'react-native'
import Estilo from './estilo'
import Filho from './Filho'

export default props => {
    return (
        <>
            <Text style={Estilo.txtG}></Text>
        
            <Filho a={"a"} b={"b"} />
        </>

    )
}