import React from 'react'
import { View , StyleSheet} from 'react-native'
import Quadrado from './Quadrado'

export default props => {
    return (
      <View style={style.FlexV3}>
        <Quadrado cor='#ff801a'/>
        <Quadrado cor='#50d1f6'/>
        <Quadrado cor='#dd22c1'/>
        <Quadrado cor='#8312ed'/>
        <Quadrado cor='#36c9a7'/>
      </View>
    )
}

//trocando o eixo principal e segundario -flexDirection
const style = StyleSheet.create({
    FlexV3: {
        flexDirection:'row',
        height: 350,
        width: '100%',
        alignItems:"flex-start",
        justifyContent: "space-evenly",
        backgroundColor: '#000'    
    }
})