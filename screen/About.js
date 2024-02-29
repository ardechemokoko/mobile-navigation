import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'

export default function About({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About</Text>
      <Button onPress={()=>navigation.goBack()} 
       title='Retour portfolio'
      />
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