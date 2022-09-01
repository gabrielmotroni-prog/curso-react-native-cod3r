import React, { createContext, useReducer} from "react";
import users from '../data/users'

//reduce
const initialState = { users }

//createContext: funcao que cria contexto
//useContext:  a outra ponta usa para acessar o contexto
const UsersContext = createContext({}) //criando o contexto

 const actions = { //objeto de action. Deixa o reducer mais generico e limpo
    createUser(state, action) {
        const user = action.payload
        user.id = Math.random // gera id aleatorio
        //console.warn(user)
        return {
            ...state, // retorna estado -  obrigatorio
            users: [...state.users, user] //lista anterior mais o novo usuario
        }
    },
    updateUser(state, action) {
        const user_update = action.payload

        return {
            ...state, // retorna estado -  obrigatorio
            users: state.users.map(u => u.id ===  user_update.id ?  user_update : u) //retorna usuario id se for igual, senaoo retorna o pproprio usuarioo
        }
    },
    deleteUser(state, action){
        const user = action.payload //recebe os dados
            return {
                //use operador spread se necessario manter os dados anteriores mais o acrescento de outros. Evita sobrescrever.
                ...state, // retorna estado - obrigatorio 
                users: state.users.filter(u => u.id !== user.id) // evolui o estado com um elemento a menos. Um array com todos elemtnos menos aqui ID
            }
    }
 }

export const UsersProviders = props => {
    
    //reduce mais generico. Procura no objeto action a action type de acordo com passado em parametro
    function reducer(state, action){ //estado atual(sempre vai representar estado na sua ultima versao) /  action - novos dados/objeto
            const fn = actions[action.type] //procura o atributo action.type no objeto actions 
            return fn ? fn(state, action) : state //caso dispatch mandando nao encontre no reducer nenhuma action.type solicitado, envia o state atual
    }
                                        //minha funcao reducer / estado inicial                               
    const [state, dispatch] = useReducer(reducer, initialState) // segue conceito do redux
    //o retorno de useReducer é o state e dispatch
    //state
    //dispatch: responsavel disparar um eventos para todos os reducers

    return(
        <UsersContext.Provider value={{
            state,   // passamos para todos terema acesso ao dado
            dispatch //passamos para todos terem uma forma para invocar um evento ( de mudanca)
        }}>

            {props.children}
        </UsersContext.Provider>
    )
}

export default UsersContext

//espalho os dados com contextAPI e atualizo os estados deles com reducer/redux

//UsersProviders
// envolvemos nossa aplicacao inteira dentro dele para PROVER nossa lista de usuarios
//passamos a aplicacao para ele como childre
//entao qulauer ponto eu posso pegar esses dados, sem precisar do props de comunicao direta ou indireta(pai passa funcao ao filho e essa fncao eh  chamada passado propriedas ao pai)