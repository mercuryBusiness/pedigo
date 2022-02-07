import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ExtendTabScreen from '../ExtendTabScreen';
import ReviewDetailPage from './review_detail';
import ReviewDetail2Page from './review_detail2';
import ProcessingDetailPage from './processing_detail';
import UnpaidDetailPage from './unpaid_detail';
import ShippedDetailPage from './shipped_detail';
import ReviewsPage from './reviews';

const Stack = createNativeStackNavigator();

export default function StackScreen({navigation}) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Order_Main" options={{headerShown: false}}>
        {props => <ExtendTabScreen {...props} extraData={navigation} />}
      </Stack.Screen>
      <Stack.Screen
        name="Order_Review_Detail"
        component={ReviewDetailPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Order_Review_Detail2"
        component={ReviewDetail2Page}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Order_Reviews"
        component={ReviewsPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Order_Shipped_Detail"
        component={ShippedDetailPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Order_Processing_Detail"
        component={ProcessingDetailPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Order_Unpaid_Detail"
        component={UnpaidDetailPage}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
