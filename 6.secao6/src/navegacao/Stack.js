import React from "react";
import {Text} from 'react-native'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TelaA from '../views/TelaA'
import TelaB from '../views/TelaB'
import TelaC from '../views/TelaC'
import PassoStack from '../components/PassoStack'

const Stack = createNativeStackNavigator()

export default props => (
    <Stack.Navigator initialRouteName="TelaA"
        screenOptions={{headerShown:true}}>
        <Stack.Screen name="TelaA"
        options={{title: 'Informacoes Iniciais'}}>
            {props => (
                //botao
                <PassoStack {...props} avancar="TelaB"> 
                    {/*manda tela como children ao componente com botao */}
                    <TelaA />  
                </PassoStack>
            )}
        </Stack.Screen>
        <Stack.Screen name="TelaB">
        {props =>(
                //botao
                <PassoStack {...props} avancar="TelaC" voltar> 
                    {/*manda tela como children ao componente com botao */}
                    <TelaB /> 
                </PassoStack>
            )}
        </Stack.Screen>
        <Stack.Screen name="TelaC">
        {props =>(
                //botao
                <PassoStack {...props} voltar avancar="TelaC" avancarParams={{numero: 1007}} a={{a:"eae"}} > 
                    {/*manda tela como children ao componente com botao */}
                    <TelaC {...props} /> 
                </PassoStack>
            )}
        </Stack.Screen>

        {/*<Stack.Screen name="TelaC" component={TelaC}/>*/}
    </Stack.Navigator>
)