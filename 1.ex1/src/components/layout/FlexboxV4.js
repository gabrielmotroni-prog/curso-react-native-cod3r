import React from 'react'
import { View , StyleSheet} from 'react-native'
import Quadrado from './Quadrado'

export default props => {
    return (
      <View style={style.FlexV4}>
          <View style={style.V0}/>
          <View style={style.V1}/>
          <View style={style.V2}/>
          <View />
      </View>
    )
}

//trocando o eixo principal e segundario -flexDirection
const style = StyleSheet.create({
    FlexV4: {
        flexGrow: 1,
        width: 100,
        backgroundColor: '#000'
    },
    V0:{
        backgroundColor: '#36c9a7',
        flexGrow:1
    },
    V1:{
        backgroundColor: '#ff801a',
        flexGrow:3
    },
    V2:{
        backgroundColor: '#dd22c1',
        flexGrow:9
    }
})