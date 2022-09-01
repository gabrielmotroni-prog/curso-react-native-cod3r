import React, {useState} from 'react';
import type {Node} from 'react';
import Button from './src/components/Button';
import Display from './src/components/Display';
import { Soma, Subtracao } from './src/Classes/operacoes';


import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';



const  App: () => Node = () => {

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  //const [displayValue, setDisplayValue] = useState('1')
  //const [operation, setOperation] = useState('')

  //valor padrao inicial
   valorInicial = {
     displayValue: '0',
     operation: '',
     arrayNumeros: [0, 0],
     operacaoEmAndamento: false // controle para direcionar valor no arrayNumeros

   }

   // o useState manipula um objeto com todas propridades da calculadora. Evitando varios useState
  const [propriedadesCalculadora, setPropriedadesCalculadora] = useState(valorInicial)

  addDigit = n =>{
    //destructoring para recuperar valores
    [n1, n2] = propriedadesCalculadora.arrayNumeros   

    setPropriedadesCalculadora(
      {
        ...propriedadesCalculadora, ///rest -> retorna restante do array
        displayValue:  n,
        //arrayNumeros: propriedadesCalculadora.operation === ''  ? [n, 0] : [n1,n]  //caso nao exista operacao corrente coloque valor-n no indice[0], caso exista operacao corrente coloca valor-n no indice[1]
        arrayNumeros: propriedadesCalculadora.operacaoEmAndamento ? [n1, n] : [n, 0]  //caso exista operacao em andamento, persiste arrayNumeros[0] e coloca novo valor em arrayNumeros[1], do contraraio, coloca novo valor em arrayNumeros[0]
      }
    )
    //console.warn(n1, n2)
    //console.warn(propriedadesCalculadora.array)
    console.warn('operacao:',propriedadesCalculadora.operation)
  }

  clearMemory = () =>{
    setPropriedadesCalculadora({
      ...propriedadesCalculadora,
      displayValue: 0,
      arrayNumeros: [0,0],
      operacaoEmAndamento: false
    })
    console.warn('zerado')
  }

  setOperation = operation =>{
    if(propriedadesCalculadora.operation == '' ){ //se operacao no setPoropriedadeCalculadora ainda for vazio, set a operancao vinda. Caso n esteja vazio, calcule. Se vier '=' sera calculado.
        setPropriedadesCalculadora({
        ...propriedadesCalculadora,
          operation: operation, //colocar operaco
          operacaoEmAndamento: true // sobe flag 
        });
        //console.warn(propriedadesCalculadora)
    }else{

      //acionar calcular caso ja tenha alguma operacao em andamento. 
      calcular(operation)  
    }
  
  }
  
  //retorna uma instancia da funcao - poderia ser um map?
  function operacionar(operation){
    switch(operation){
      case '+':
        return Soma; //somente instancia
      case '-':
        return Subtracao;
    }
  }

  calcular = operation =>{
    //destructuring
    const[n1, n2] = propriedadesCalculadora.arrayNumeros

    let retorno_operacao = operacionar(propriedadesCalculadora.operation) //recebe instanca da funcao
    let resultado_final_operacao = retorno_operacao(n1,n2)
    
    //console.warn(resultado_final_operacao)
 
    if(operation === '='){
      // limpa operacao, so mostra resulta em display e limpa arrayNumero, para receber nova operacao
      setPropriedadesCalculadora({
        ...propriedadesCalculadora,
        displayValue: resultado_final_operacao,
        arrayNumeros: [0, 0],
        operation: '',
        operacaoEmAndamento: false // abaixa flag 
      })
    }else{
      //continua a operacao. Mostra no display, guarda resultado em arrayNumero[0] e aponta para arrayNumero[1]
      setPropriedadesCalculadora({
        ...propriedadesCalculadora,
        displayValue: resultado_final_operacao,
        arrayNumeros: [resultado_final_operacao, 0],
        operation: ''
      })

    }

 
  }

//1- se for alterado a operacao ou clicado em  `=` faz a operacao anterior, mostra, guarda no array[0]
// e se prepara para proima operacao ja com posicao alocada
//2- se for precionado `=` entre dois valores, aponte para array[0] e concatena com novos valores do array[0]


//resumo

// 1- ao ser selecionar uma nova operacao: continua mexendo no indice array[1] e o resultado da operacao
//anterior vai para o array[0]

// 2- ao ser selecionado '=': faz a opercao e volta o cursor para array[0] e o novo valor
//concatena com oque ja eta na tela, NAO o subscreve como a calc da apple

  return (
    <SafeAreaView style={[styles.container, backgroundStyle]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Display value={propriedadesCalculadora.displayValue} />
        <View style={styles.buttons}>
          <Button label='AC' triple onClick={clearMemory}/>
          <Button label='/' operation onClick={()=>{setOperation('/')}}/>
          <Button label='7' onClick={()=>{addDigit('7')}} /> 
          <Button label='8' onClick={this.addDigit}/>
          <Button label='9' onClick={this.addDigit}/>
          <Button label='*' operation onClick={this.setOperation}/>
          <Button label='4' onClick={this.addDigit}/>
          <Button label='5' onClick={this.addDigit}/>
          <Button label='6' onClick={this.addDigit}/>
          <Button label='-' operation onClick={this.setOperation} />
          <Button label='1' onClick={this.addDigit} />
          <Button label='2' onClick={this.addDigit} />
          <Button label='3' onClick={this.addDigit} />
          <Button label='+' operation onClick={this.setOperation} />
          <Button label='0' onClick={this.addDigit} />
          <Button label='.' onClick={this.addDigit} />
          <Button label='=' operation onClick={this.setOperation} />         
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1
  },
  buttons:{
    flexDirection:'row',
    flexWrap:'wrap' //faz quebrar a linha

  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
