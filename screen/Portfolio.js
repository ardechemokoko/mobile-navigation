import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { globalStyles } from '../styles/AppStyle';

export default function Portfolio( {navigation,route} ) {
  const name = route.params.name;
  const country = route.params.country;
  const totalImg = route.params.totalImg;

 
  useLayoutEffect(()=>{
    navigation.setOptions({
      title : `Portfolio de ${name}`
    })
  },[navigation])
  return (
    <View style={globalStyles.containerPortofio}>
      <Text style ={globalStyles.titleInfo}>{name}</Text>
      <Text style ={globalStyles.titleInfo}>{country}</Text>
      <Text style ={globalStyles.titleInfo}>{totalImg}</Text>
    </View>
  )
}
