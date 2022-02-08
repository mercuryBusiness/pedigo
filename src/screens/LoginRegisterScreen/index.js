import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import MainScreen from './main';
import Step1Screen from './step1';
import Step2Screen from './step2';
import Step3Screen from './step3';
import Step4Screen from './step4';
import ConfirmScreen from './confirm';
import LoginScreen from './login';

const Stack = createNativeStackNavigator();

export default function InitScreen() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="primary"
          component={MainScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="step1"
          component={Step1Screen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="step2"
          component={Step2Screen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="step3"
          component={Step3Screen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="step4"
          component={Step4Screen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="confirm"
          component={ConfirmScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
