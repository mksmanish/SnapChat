import {StyleSheet, Text, View, Pressable, ImageBackground} from 'react-native';
import React from 'react';
import {snapImage} from '../../assets';
import {useNavigation} from '@react-navigation/native';
import navigationStrings from '../../constants/navigationStrings';
import colors from '../../assets/styles/colors';
import fontFamily from '../../assets/styles/fontFamily';

const DashBoard = () => {
  const navigation = useNavigation();
  const onPressLogin = () => {
    navigation.navigate(navigationStrings.LOGIN);
  };

  const onPressSignUp = () => {
    navigation.navigate(navigationStrings.SIGN_UP);
  };

  return (
    <ImageBackground
      style={{flex: 1, justifyContent: 'flex-end'}}
      source={snapImage}>
      <View
        style={{
          width: '100%',
          backgroundColor: 'gray',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Pressable
          style={{padding: 20, backgroundColor: colors.red, width: '100%'}}
          onPress={onPressLogin}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 25,
              color: 'white',
              fontFamily:fontFamily.regular
            }}>
            Log In
          </Text>
        </Pressable>
        <Pressable
          style={{padding: 20, backgroundColor: colors.blue, width: '100%'}}
          onPress={onPressSignUp}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 25,
              color: 'white',
              fontFamily:fontFamily.regular
            }}>
            Sign Up
          </Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
};

export default DashBoard;

const styles = StyleSheet.create({});
