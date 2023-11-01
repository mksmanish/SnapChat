import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Intail,Login,SignUp} from "../Screens/index"
const Stack = createNativeStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Intail" component={Intail} options={{headerShown:false}}/>
            <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
            <Stack.Screen name="SignUp" component={SignUp} options={{headerShown:false}}/>
          </Stack.Navigator>
        </NavigationContainer>
      );

}

export default Routes
