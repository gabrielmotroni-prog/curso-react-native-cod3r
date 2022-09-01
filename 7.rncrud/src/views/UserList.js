import React, { useContext } from "react";
import { View, FlatList, Text, Alert } from "react-native";
import { ListItem, Avatar, Button, Icon } from "react-native-elements";
import UsersContext  from "../context/UsersContext";

export default (props) => {

    //pegando os dados via contexto
    const {state, dispatch} = useContext(UsersContext)

    // separamos em outra funcao para ficar mais modularizado
    function confirmaUserDeletion (user) {
        Alert.alert('Excluir Usuario', 'Deseja excluir o usuário?', [
            {
                text: 'Sim',
                onPress(){
                    dispatch({ //passamos uma action (que eh um objeto normal js) ao dispatch
                        type: 'deleteUser', 
                        payload: user, //a informacao que passamos junto a acao (type)
                    }) 
                    //console.warn('delete ' + user.id)
                }
            },
            
            {
                text: 'Não'
            }
        ])
    }

    //botoes editar ou excluir
    function getActions(user){
        return (
            <View style={{flexDirection:'row'}}> 
                <Button //botao do react native elements
                    onPress={()=> props.navigation.navigate("UserForm", user)}
                    type= "clear"
                    icon={<Icon name="edit" size={25} color="orange" />}
                />
                <Button //botao do react native elements
                    onPress={()=> confirmaUserDeletion(user)}
                    type= "clear"
                    icon={<Icon name="delete" size={25} color="red" />}
                />
            </View>
        )
    }

    renderItem = ({ item : user }) => (
        //** passando id ao clicar 
        <ListItem bottomDivider onPress={()=>{props.navigation.navigate('UserForm'), user}}> 
          <Avatar source={{ uri: user.avatarUrl }} />
          <ListItem.Content >
            <ListItem.Title>{user.name}</ListItem.Title>
            <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
          </ListItem.Content>
          <ListItem.Content right={true}>
            {getActions(user)}
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      )

    return (
        <View>
            <FlatList
                keyExtractor={user => user.id.toString()}
                data={state.users}
                renderItem={this.renderItem}          
            />
        </View>
    )
}