import React from 'react'
import { View, Text, Button } from 'react-native'

//tela de passo -> pq da os passo de avancar ou voltar

export default props => (
    <View style={{flex: 1}}>
        <View style={{flexDirection:'row',justifyContent:"space-around" }}>
          {/*renderzacao condicional: se voltar for chamado ele mostra */}
          {/*voltar: executa goBack*/}
          { props.voltar
                ? <Button 
                title='Voltar'
                onPress={()=>{
                    props.navigation.goBack()
                    }} 
                />
                : false
            }

          {/*renderzacao condicional: se houver/for passdo avancar */}
          {/*avanca: nome da rota da tela*/}
           {props.avancar
            ? <Button 
                title='Avançar'
                onPress={()=>{
                    props.navigation.push(
                        props.avancar,
                        props.avancarParams,
                        {
                            numero: parseInt(Math.random() * 100) //gera num aleatorio
                        })
                }}
             />
            : false
            }
        </View>
        {/*a tela a ser renderizada, recebida como children */}
        <View style={{flex:1}}>
            {props.children}
        </View>
    </View>
)