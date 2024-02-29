import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Portfolio( {navigation} ) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Portfolio</Text>
      <Button 
      onPress={()=>navigation.navigate('About')}
      title='A propos'/>

      <Button onPress={()=>navigation.goBack()} 
       title='Retour page accueil'
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"yellow",
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