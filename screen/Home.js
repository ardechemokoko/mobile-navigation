import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <Button 
      title='Portfolio' onPress={() => navigation.navigate('Portfolio')}
      />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        backgroundColor:"orange",
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