import React from 'react'
import {Text} from 'react-native'

function numAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min)) + min || 0;
  }

export default (props) => {
    const {min, max} = props
    return(
        <Text>{numAleatorio(min, max)}</Text>
    )
}