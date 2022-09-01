import React, { useContext, useState } from "react";
import { Text, TextInput, View, StyleSheet, Button } from "react-native";
import UsersContext from "../context/UsersContext";

export default ({route, navigation}) => {
    //console.warn(Object.keys(props.route))
    //console.warn(Object.keys(props.route.params))

    //se existe parametro coloca no useState, senao coloca objeto vazio
    const [user, setUser] =  useState(route.params ? route.params : {})
 
    const {dispatch} = useContext(UsersContext)

    return (
      <View style={style.form}>
        <Text>Nome</Text>
        <TextInput 
            style={style.input}
            onChangeText={name => setUser({...user, name})}
            placeholder="Informe o Nome"
            value={user.name}
        />
        <Text>E-mail</Text>
        <TextInput 
            style={style.input}
            onChangeText={email => setUser({...user, email})}
            placeholder="Informe o e-mail"
            value={user.email}
        />
        <Text>Avatar URL</Text>
        <TextInput 
            style={style.input}
            onChangeText={avatarUrl => setUser({...user, avatarUrl})}
            placeholder="Informe o e-mail"
            value={user.avatarUrl}
        />
        <Button 
            title="Salvar"
            //se user.id estiver setado eh edicao, caso nao, criacao
            onPress={()=>{
                dispatch({
                    type: user.id ? 'updateUser' : 'createUser',
                    payload: user
                })
                navigation.goBack()
            }}
        />
      </View>
    )
}

const style = StyleSheet.create({
    form: {
        padding:12

    }, 
    input:{
        height:40,
        borderColor:'gray',
        borderWidth: 1, //importane para crescer elemento e aparecer
        marginBottom: 10
    
    }
})