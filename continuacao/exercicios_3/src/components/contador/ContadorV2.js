import React, {useState} from 'react';
import {Text} from 'react-native';
import Estilo from '../estilo';
import ContadorDisplay from './ContadorDisplay';
import ContadorBotoes from './ContadorBotoes';

export default props => {
  const [num, setNumero] = useState(0);

  const inc = () => setNumero(num + 1);
  const dec = () => setNumero(num - 1);

  return (
    <>
      <Text style={Estilo.txtG}>Contador</Text>
      <ContadorDisplay num={num} />
      <ContadorBotoes inc={inc} dec={dec} />
    </>
  );
};
