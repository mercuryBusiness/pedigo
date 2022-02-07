import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import MainScreen from './main';

const Stack = createNativeStackNavigator();

export default function InitScreen() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Primary" options={{headerShown: false}}>
          {props => <MainScreen {...props} />}
        </Stack.Screen>
        {/* <Stack.Screen
          name="Shopping_Bag"
          component={ShoppingBagScreen}
          options={{headerShown: false}}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
