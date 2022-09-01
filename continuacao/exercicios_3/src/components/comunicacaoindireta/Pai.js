import React, {useState} from 'react';
import {Text} from "react-native"
import Filho from './Filho';
import Estilo from '../estilo';

export default props => {
  const [num, setNumero] = useState(0);

  //funcao passsada ao filho que muda valor na interface do pai
  function exibirValor(numero) {
    setNumero(numero);
  }


  return (
    <>
      <Text style={Estilo.txtG}>{num}</Text>
      <Filho min={1} max={5} funcao={exibirValor} />
    </>
  );
};
