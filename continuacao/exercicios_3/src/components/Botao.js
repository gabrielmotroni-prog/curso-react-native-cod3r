/* eslint-disable */ 
import React from "react";
import {Button} from "react-native";

export default props => {

  function executar(){
        console.warn('Exec!')
    }


  //return da funcao principal
  return <Button 
            title="Executar!"
            onPress={executar}
            />;
};
