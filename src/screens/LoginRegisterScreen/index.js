import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import MainScreen from './main';
import Step1Screen from './step1';

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
