import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function About() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"green",
        flex : 1,
        alignItems:'center',
        justifyContent:'center',
    },
    title:{
        fontSize :25,
        color:"#FFF",
        fontWeight:'bold',
    }
})