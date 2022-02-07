import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {decrement, increment} from '../../redux/homeScreen';
import {Button, Text, Box, Center, ScrollView} from 'native-base';
import BottomBar from '../../components/BottomBar';
import {toggleReguireLogin} from '../../redux/globalStore';
import TabScreen from '../TabScreen';
import ProfileScreen from '../ProfileScreen/index';
import SearchPage from '../SearchPageScreen/index';
import EditProfile from '../ProfileScreen/EditProfile';
import Shop from '../Shop/shop';
import ProductScreen from '../ProductScreen';
import NotificationScreen from '../NotificationScreen';
import BlobScreen from '../BlobScreen/blob.js';
import VlogScreen from '../Vlog/index';
import BlobCreationScreen from '../BlogCreationScreen/main';

export default function MainScreen({navigation, extraData}) {
  const index = useSelector(state => state.homeScreen.indexBottomBar);
  const isHidden = useSelector(state => state.homeScreen.isHidden);
  const dispatch = useDispatch();

  return (
    <Box
      style={{
        flex: 1,
        width: '100%',
        flexDirection: 'column',
        backgroundColor: '#fff',
      }}
      safeAreaTop>
      {index === 0 && <TabScreen />}
      {index === 1 && <Shop navigation={navigation} />}
      {index === 2 && <BlobCreationScreen />}
      {/* {index === 2 && <Center my={100}><Button onPress={()=>{navigation.navigate('Order_Confirm_List')}}>Tap me</Button></Center>} */}
      {index === 3 && <NotificationScreen />}
      {index === 4 && (
        <ProfileScreen navigation={navigation} extraData={extraData} />
      )}
      <Box
        style={[
          {
            position: 'absolute',
            width: '100%',
            bottom: 0,
            height: 70,
          },
          {opacity: isHidden ? 0 : 1},
        ]}>
        <BottomBar />
      </Box>
    </Box>
  );
}
