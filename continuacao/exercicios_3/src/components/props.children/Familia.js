import React from 'react';
import {Text} from 'react-native';
import Estilo from '../estilo';

export default props => {
  return (
    <>
      <Text style={Estilo.txtG}>Familia</Text>
      <Text>--inicio--</Text>
      {props.children}
      <Text>--fim--</Text>
    </>
  );
};
