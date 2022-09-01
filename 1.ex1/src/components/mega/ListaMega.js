import React, {Component} from 'react';
import {
  Button,
  FlatList,
  Text,
  TextInput,
  View,
  StyleSheet,
} from 'react-native';
import Estilo from '../estilo';

export default props => {
  return (
    <FlatList
      data={props.numeros}
      renderItem={({item}) =>
      <View style={style.Container}> 
        <Text style={style.Num}>{item}</Text>
      </View>
        }
    />
  );
};

const style = StyleSheet.create({
  Container: {
      height: 25,
      aligth: 25,
      backgroundColor: '#000',
      margin:5,
      borderRadius: 12,
  },

  Num: {
    color: '#fff',
  },
});
