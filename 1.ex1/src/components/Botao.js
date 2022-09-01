import React from "react"
import { Button } from "react-native"

export default props => {

    //funcao
    const executar = () => {
        console.warn("Exec #01!");
    }

    return (
        //fragment
        <> 
            {/* botao 1 - chamar funcao externa */}
            <Button
                title="Executar #01!"
                onPress={executar}
            />
            {/* botao 2 - function express */}
            <Button
                title="Executar #02!"
                onPress={function(){ console.warn('Exec #02!!')}}
            />
            {/* botao 3 - arrow function */}
            <Button
                title="Executar #03!"
                onPress={() => console.warn('Exec #03!')}
            />
        </>
    )
}

