import {StyleSheet, Text, View,TouchableOpacity,Image} from 'react-native';
import React from 'react';
import {arrow_back} from '../assets';
import { useNavigation } from '@react-navigation/native';
import { moderateScale } from '../assets/styles/responsiveSize';

const Header = ({
    leftImage = arrow_back,
    onPress,
    headerStyle,
}) => {

const navigation = useNavigation()

  return (
    <View style={{...styles.headerStyle,...headerStyle}}>
      <TouchableOpacity onPress={!!onPress ? onPress : () => navigation.goBack()}>
        <Image source={arrow_back} style={{height:moderateScale(25),width:moderateScale(25)}}></Image>
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
    headerStyle:{
        minHeight:moderateScale(48)
    }
});
