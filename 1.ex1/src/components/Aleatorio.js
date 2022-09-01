import React from 'react';
import {Text} from 'react-native';
import Estilo from './estilo';

export default (props) => {
    const {min, max} = props //destructuring
    function numeroAleatorio(){
        return Math.floor( Math.random() * (max - min + min) + 1);
        //a logica do math.floor() + 1 usei do curso JS para arrendodar e pegar o ultimo numero
    }
    return(
    <Text style={Estilo.txtG}>Numero Aleatorio: {numeroAleatorio()} </Text>);
}