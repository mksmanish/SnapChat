import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Loader from '../../Components/Loader';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../Components/Header';
import TextInputWithLabel from '../../Components/TextInputWithLabel';
import Strings from '../../constants/language/Strings';
import { moderateScale } from 'react-native-size-matters';
import colors from '../../assets/styles/colors';

const Login = () => {
  const [state, setState] = useState({
    isLoading: false,
    email: '',
    password: '',
    isSecure:true,
  });
  const {isLoading, email, password,isSecure} = state;
  const updateState = (data) => setState((state) => ({...state,...data}))
  return (
    <View style={{flex: 1, padding: 24}}>
      <SafeAreaView>
        <Header />
        <Loader isLoading={false} />
        <TextInputWithLabel
          label={'UserName or Email'}
          placeholder={Strings.EMAIL}
          value={email}
          onChangeText={(email) => updateState({email})}
          secureText={false}

        />
        <View style={{margin: 10}} />
        <TextInputWithLabel
          label={'Password'}
          placeholder={Strings.PASSWORD}
          value={password}
          onChangeText={(password) => updateState({password})}
          secureTextEntry={isSecure}
          secureText={isSecure}
          onPressSecure={() => updateState({isSecure : !isSecure})}
        />
        <TouchableOpacity style={{justifyContent:"center",alignItems:"center",marginVertical:moderateScale(20)}}>
          <Text style={{fontSize:16,fontWeight:"500",color:colors.blue}}>Forgot your password ?</Text>
          </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

export default Login;
