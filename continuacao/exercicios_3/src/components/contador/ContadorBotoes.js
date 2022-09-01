import React from 'react';
import {Button, StyleSheet, View} from 'react-native';

export default props => {
  return (
    <View style={style.Botoes}>
      <Button
        title="+"
        onPress={() => {
          props.inc(); //quando preocionado a chama funcao passando parametro - callback
        }}
      />
      <Button
        title="-"
        onPress={() => {
          props.dec(); //quando preocionado a chama funcao passando parametro - callback
        }}
      />
    </View>
  );
};

const style = StyleSheet.create({
  Botoes: {
    flexDirection: 'row',
    backgroundColor: '#fbb',
  },
});
