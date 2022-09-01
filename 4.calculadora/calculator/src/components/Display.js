import React from "react";
import {
    StyleSheet,
    Text,
    View
} from 'react-native'

const styles = StyleSheet.create({
    display: {
        flex: 1, //faz elemento crescer
        padding: 20,
        justifyContent: 'center', // cross axis
        backgroundColor: 'rgba(0,0,0,0.6)',
        alignContent: 'center' //main axis
    },
    displayValue: {
        fontSize: 60,
        color: '#fff',
    }
})

//componente display
export default props =>{
    return(
        <View style={styles.display}>
            <Text style={styles.displayValue} numberOfLines={1}> {props.value}</Text>
        </View>
    )
   
}