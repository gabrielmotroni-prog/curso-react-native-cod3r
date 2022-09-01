import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import Estilo from './estilo';

//usando operador ternario dentro do return JSX
export default ({num = 0}) => {
  return (
    <SafeAreaView>
      <Text style={Estilo.txtG}>O resultado é</Text>
      {num % 2 === 0 ? (
        <Text style={Estilo.txtG}>Par</Text>
      ) : (
        <Text style={Estilo.txtG}>Ímpar</Text>
      )}
    </SafeAreaView>
  );
};
