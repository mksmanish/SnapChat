import {StyleSheet, Text, View, TextInput, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import colors from '../assets/styles/colors';
import { eye, eyeoff } from '../assets';

const TextInputWithLabel = ({
  label,
  value,
  placeholder,
  onChangeText,
  inputStyle,
  textStyle,
  secureText,
  onPressSecure,
  ...props
}) => {
  return (
    <View >
      <Text style={styles.labelStyle}>{label}</Text>
      <View style={{...styles.inputStyle, ...inputStyle}}>
      <TextInput
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        style={{...styles.labelStyle}}
        {...props}
      />
      {onPressSecure && (
        <TouchableOpacity onPress={onPressSecure}>
        <Image source={ secureText ? eyeoff : eye} style={{height:20,width:20,marginTop:10}}/>
      </TouchableOpacity>
      )}
      </View>
    </View>
  );
};

export default TextInputWithLabel;

const styles = StyleSheet.create({
  container: {
    //  flex:1,
    
   alignSelf:"center",
    width:"80%"
  },
  inputStyle: {
    borderBottomWidth: 2,
    padding:5,
    borderBottomColor:colors.blue,
    flexDirection:"row",
    justifyContent:"space-between"
  },
  labelStyle:{
    fontSize:15,
    fontWeight:"500",
    flex:1
  }
});
