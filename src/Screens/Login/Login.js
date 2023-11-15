import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import Loader from '../../Components/Loader';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../Components/Header';
import TextInputWithLabel from '../../Components/TextInputWithLabel';
import Strings from '../../constants/language/Strings';
import {moderateScale} from 'react-native-size-matters';
import colors from '../../assets/styles/colors';
import BtnComp from '../../Components/BtnComp';
import styles from './styles';

const Login = () => {
  const [state, setState] = useState({
    isLoading: false,
    email: '',
    password: '',
    isSecure: true,
  });
  const {isLoading, email, password, isSecure} = state;
  const updateState = data => setState(state => ({...state, ...data}));

  const onPressLogin = () => {
    console.log(email, password);
  };
  return (
    <View style={{flex: 1, padding: 24}}>
      <SafeAreaView style={{flex: 1}}>
        <Header />
        <Loader isLoading={false} />
        <View style={{flex: 1, justifyContent: 'space-between'}}>
          <View style={{marginTop: moderateScale(30)}}>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Text
                style={{fontSize: 30, fontWeight: '600', color: colors.blue}}>
                Login
              </Text>
            </View>
            <TextInputWithLabel
              label={'UserName or Email'}
              placeholder={Strings.EMAIL}
              value={email}
              onChangeText={email => updateState({email})}
              secureText={false}
            />
            <View style={{margin: 10}} />
            <TextInputWithLabel
              label={'Password'}
              placeholder={Strings.PASSWORD}
              value={password}
              onChangeText={password => updateState({password})}
              secureTextEntry={isSecure}
              secureText={isSecure}
              onPressSecure={() => updateState({isSecure: !isSecure})}
            />
            <TouchableOpacity
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginVertical: moderateScale(20),
              }}>
              <Text
                style={{fontSize: 16, fontWeight: '500', color: colors.blue}}>
                Forgot your password ?
              </Text>
            </TouchableOpacity>
          </View>

          <BtnComp
            btnStyle={styles.btnStyle}
            textStyle={styles.textStyle}
            btnText={'Login'}
            onPress={onPressLogin}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Login;
