import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Loader from '../../Components/Loader';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../Components/Header';
import TextInputWithLabel from '../../Components/TextInputWithLabel';
import Strings from '../../constants/language/Strings';
import {moderateScale} from 'react-native-size-matters';
import colors from '../../assets/styles/colors';
import BtnComp from '../../Components/BtnComp';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import navigationStrings from '../../constants/navigationStrings';

const SignUp = () => {
  const [state, setState] = useState({
    isLoading: false,
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    userName: '',
    isSecure: true,
    isEnable: false,
  });
  const navigation = useNavigation();
  const {
    isLoading,
    email,
    password,
    isSecure,
    firstName,
    lastName,
    userName,
    isEnable,
  } = state;
  const updateState = data => setState(state => ({...state, ...data}));

  const onPressLogin = () => {
    console.log(email, password);
  };
  const onPressSignIn = () => {
    navigation.navigate(navigationStrings.LOGIN);
  };

  useEffect(() => {
    if (
      email !== '' &&
      password !== '' &&
      firstName !== '' &&
      lastName !== '' &&
      userName !== ''
    ) {
      updateState({isEnable: true});
      return;
    }
    updateState({isEnable: false});
  }, [email, password, lastName, firstName, userName]);

  return (
    <View style={{flex: 1, padding: 24}}>
      <SafeAreaView style={{flex: 1}}>
        <Header />
        <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false} automaticallyAdjustKeyboardInsets={true}>
          <View
            style={{
              flex: 1,
              justifyContent: 'space-between',
              marginVertical: moderateScale(10),
            }}>
            <View>
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Text
                  style={{fontSize: 25, fontWeight: '600', color: colors.blue}}>
                  Create an account
                </Text>
              </View>
              <TextInputWithLabel
                label={'First Name'}
                placeholder={Strings.FIRST_NAME}
                value={firstName}
                onChangeText={value => updateState({firstName: value})}
                secureText={false}
              />
              <View style={{margin: 10}} />
              <TextInputWithLabel
                label={'Last Name'}
                placeholder={Strings.LAST_NAME}
                value={lastName}
                onChangeText={value => updateState({lastName: value})}
              />
              <View style={{margin: 10}} />
              <TextInputWithLabel
                label={'User Name'}
                placeholder={Strings.USER_NAME}
                value={userName}
                onChangeText={value => updateState({userName: value})}
              />
              <View style={{margin: 10}} />
              <TextInputWithLabel
                label={'Email'}
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
                onPress={onPressSignIn}
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginVertical: moderateScale(20),
                }}>
                <Text
                  style={{fontSize: 16, fontWeight: '500', color: colors.blue}}>
                  Already have account ? Sign In
                </Text>
              </TouchableOpacity>
            </View>
            <BtnComp
              btnStyle={{
                ...styles.btnStyle,
                backgroundColor: isEnable ? colors.green : colors.blue,
              }}
              textStyle={styles.textStyle}
              btnText={'Sign Up'}
              onPress={onPressLogin}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default SignUp;
