import React from 'react';
import {Text, Button} from 'react-native';
import Estilo from '../estilo';

export default props => {
  function geraNumero(min, max) {
    const fator = max - min + 1;
    return parseInt(Math.random() * fator) + min;
  }

  return (
    <>
      <Button
        title="Executar"
        onPress={function () {
          const n = geraNumero(props.min, props.max);
          props.funcao(n); // chama funcao do pai passando valor para ela
        }}
      />
    </>
  );
};
