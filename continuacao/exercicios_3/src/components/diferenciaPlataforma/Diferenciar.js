import React from 'react';
import {Text, Platform} from 'react-native';
import Estilo from './estilo';

export default props => {
  if (Platform.OS === 'ios') {
    return <Text style={Estilo.txtG}>iOS {Platform.Version}</Text>;
  } else if (Platform.OS === 'android') {
    return <Text style={Estilo.txtG}>android {Platform.Version}</Text>;
  } else {
    return <Text style={Estilo.txtG}>eita</Text>;
  }
};
