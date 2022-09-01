import React, { useState } from "react";
import {Text, Button} from "react-native";
import Estilo from "./estilo";

export default ({inicial = 1, passo = 1}) => {
    //desctruturing valor e set valor do useState
    const [numero, setNumero] = useState(inicial)

    const inc = ()=> setNumero(numero + passo)

    const dec = ()=> setNumero(numero - passo)
    

    return (
        <>
            <Text style={Estilo.txtG}>{numero}</Text>
            <Button title="+" onPress={inc}></Button>
            <Button title="-" onPress={dec}></Button>
        </>
    )
}