import {StyleSheet, Text, View, Pressable, ImageBackground} from 'react-native';
import React from 'react';
import {snapImage} from '../../assets';
import {useNavigation} from '@react-navigation/native';
import navigationStrings from '../../constants/navigationStrings';

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
          style={{padding: 20, backgroundColor: 'red', width: '100%'}}
          onPress={onPressLogin}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 25,
              fontWeight: '600',
              color: 'white',
            }}>
            Log In
          </Text>
        </Pressable>
        <Pressable
          style={{padding: 20, backgroundColor: 'blue', width: '100%'}}
          onPress={onPressSignUp}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 25,
              fontWeight: '600',
              color: 'white',
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
