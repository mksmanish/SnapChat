import { StyleSheet, Text, View,Pressable } from 'react-native'
import React from 'react'

const Intail = () => {
  const Pressme = () => {
    console.log("you pressabe me")
  }
  return (
    <View>
      <Text>Intail</Text>
      <Pressable onPress={Pressme}><Text>Press me</Text></Pressable>
    </View>
  )
}

export default Intail

const styles = StyleSheet.create({})