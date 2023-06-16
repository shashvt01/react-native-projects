import React from 'react'
import type { PropsWithChildren } from 'react'

import { StyleSheet, Text, View } from 'react-native'

type CurrentButtonProps = PropsWithChildren<{
    name:string,
    flag:string,
}>

const CurrencyButton = (props: CurrentButtonProps) : JSX.Element =>{
    return (
        <View style = {styles.buttonContainer}>
            <Text style = {styles.flag}> {props.flag}</Text>
            <Text style = {styles.country}> {props.name}</Text>

        </View>
    )

}

const styles = StyleSheet.create({
    buttonContainer:{
        alignItems:'center'
    },
    flag:{
        fontSize:28,
        color:'#FFFFFF',
        marginBottom:4,
    },
    country:{
        fontSize:18,
        color:'#2d3436',
        marginBottom:4,
    },
})


export default CurrencyButton