import React from 'react';
import {Platform} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {Button, Text, Box, ScrollView, VStack} from 'native-base';
import {SafeAreaView} from 'react-native-safe-area-context';
import ExtendTabBar from '../../components/ExtendTabBar';
import AllOrderPage from '../OrderScreen/all.js';
import UnpaidPage from '../OrderScreen/unpaid.js';
import ProcessingPage from '../OrderScreen/processing.js';
import ShippedPage from '../OrderScreen/shipped.js';
import ReviewPage from '../OrderScreen/review.js';
import ReturnsPage from '../OrderScreen/returns.js';

export default function ExtendTabScreen({navigation, props, extraData}) {
  const index = useSelector(state => state.extendTab.indexTab);
  const dispatch = useDispatch();
  const height = Platform.OS === 'ios' ? 80 : 80;
  const top = Platform.OS === 'ios' ? 50 : 15;
  return (
    <SafeAreaView
      style={{
        backgroundColor: 'white',
        flex: 1,
        width: '100%',
        flexDirection: 'column',
      }}>
      <Box
        style={{
          backgroundColor: 'transparent',
          position: 'absolute',
          width: '100%',
          height: height,
          top: top,
          zIndex: 1,
        }}>
        <ExtendTabBar extraData={extraData} />
      </Box>
      {index == 0 && <AllOrderPage />}
      {index == 1 && <UnpaidPage navigation={navigation} />}
      {index == 2 && <ProcessingPage navigation={navigation} />}
      {index == 3 && <ShippedPage navigation={navigation} />}
      {index == 4 && <ReviewPage navigation={navigation} />}
      {index == 5 && <ReturnsPage />}
    </SafeAreaView>
  );
}
