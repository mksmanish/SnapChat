import {StyleSheet, Text, View, SafeAreaView, StatusBar} from 'react-native';
import React, {Children} from 'react';
import colors from '../assets/styles/colors';
import Loader from './Loader';

const WrapperContainer = ({
  barStyle = 'dark-content',
  statusBarColor = colors.white,
  Children,
  isLoading
}) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={barStyle} backgroundColor={statusBarColor} />
      <SafeAreaView>
        {Children}
      </SafeAreaView>
      <Loader isLoading={isLoading}/>
    </View>
  );
};

export default WrapperContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue,
  },
});
