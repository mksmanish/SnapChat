import { StyleSheet, Text, View,Pressable,ImageBackground } from 'react-native'
import React from 'react'
import { snapImage } from '../../assets'

const Intail = () => {
  const Pressme = () => {
    console.log("you pressabe me")
  }
  return (
   <ImageBackground style={{flex:1,justifyContent:"flex-end"}} source={snapImage}>
  <View style={{width:"100%",backgroundColor:"gray",justifyContent:"flex-end",alignItems:"center"}}>
    <Pressable style={{padding:20,backgroundColor:"red",width:"100%"}}>
      <Text style={{textAlign:"center",fontSize:25,fontWeight:"600",color:"white"}}>Log In</Text>
    </Pressable>
    <Pressable style={{padding:20,backgroundColor:"blue",width:"100%"}}>
      <Text style={{textAlign:"center",fontSize:25,fontWeight:"600",color:"white"}}>Sign Up</Text>
    </Pressable>
  </View>
   </ImageBackground>
  )
}

export default Intail

const styles = StyleSheet.create({})