import { StyleSheet, Text, View,ActivityIndicator ,Modal} from 'react-native'
import React from 'react'

const Loader = ({isLoading = false}) => {
    if(isLoading){
        return (
            <Modal transparent>
              <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
                  <ActivityIndicator size={24} color={"red"}/>
              </View>
            </Modal>
            )
    }
    return null;
 
}
  
export default Loader

const styles = StyleSheet.create({
    loaderStyle:{
        position:"absolute",
        left:0,
        top:0,
        right:0,
        left:0,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:'rgb(0,0,0,0.3'
    }
})