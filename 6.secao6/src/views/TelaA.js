import React from 'react';
import TextoCentral from '../components/TextoCentral';

import AsyncStorage from '@react-native-async-storage/async-storage';

export default props => {

  const storeData = async value => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('@storage_Key', jsonValue);
    } catch (e) {
      // saving error
    }
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@storage_Key')

      if(value !== null) {
        // value previously stored
        console.warn(value)
      }
    } catch(e) {
      // error reading value
    }
  }

  storeData({nome:"gabriel"});
  getData();

  return <TextoCentral corFundo="#e53935">Tela A</TextoCentral>;
};
