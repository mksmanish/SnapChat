import {View, Text, TextInput} from 'react-native';
import React, {useState} from 'react';
import Loader from '../../Components/Loader';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../Components/Header';
import TextInputWithLabel from '../../Components/TextInputWithLabel';
import Strings from '../../constants/language/Strings';

const Login = () => {
  const [state, setState] = useState({
    isLoading: false,
    email: '',
    password: '',
  });
  const {isLoading, email, password} = state;
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

        />
        <View style={{margin: 10}} />
        <TextInputWithLabel
          label={'Password'}
          placeholder={Strings.PASSWORD}
          value={password}
          onChangeText={(password) => updateState({password})}
          secureTextEntry={true}
          
        />
      </SafeAreaView>
    </View>
  );
};

export default Login;
