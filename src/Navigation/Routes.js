import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from './AuthStack';
import MainStack from './MainStack';
const Stack = createNativeStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
          <Stack.Navigator>
           {MainStack(Stack)}
          </Stack.Navigator>
        </NavigationContainer>
      );

}

export default Routes
