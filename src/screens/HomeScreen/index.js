import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from './main';
import ShoppingBagScreen from '../Shop/shoppingBag';
import CollectionScreen from '../CollectionScreen';
import OrderConfirmListScreen from '../OrderConfirmScreen';
import OrderConfirmCheckoutScreen from '../OrderConfirmScreen/checkout';
import AddressBookScreen from '../AddressScreen/book';
import AddressEditorScreen from '../AddressScreen/editor';

const Stack = createNativeStackNavigator();

export default function HomeScreen({navigation}) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Primary" options={{headerShown: false}}>
        {props => <MainScreen {...props} extraData={navigation} />}
      </Stack.Screen>
      <Stack.Screen
        name="Shopping_Bag"
        component={ShoppingBagScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Collection"
        component={CollectionScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Order_Confirm_List"
        component={OrderConfirmListScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Order_Confirm_Checkout"
        component={OrderConfirmCheckoutScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Address_Book"
        component={AddressBookScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Address_Editor"
        component={AddressEditorScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
