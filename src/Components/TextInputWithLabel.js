import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import colors from '../assets/styles/colors';

const TextInputWithLabel = ({
  label,
  value,
  placeholder,
  onChangeText,
  inputStyle,
  textStyle,
  ...props
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.labelStyle}>{label}</Text>
      <TextInput
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        style={{...styles.inputStyle, ...inputStyle}}
        {...props}
      />
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
    borderBottomColor:colors.blue
  },
  labelStyle:{
    fontSize:15,
    fontWeight:"500",
  }
});
