import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Platform} from 'react-native';
import {decrement, increment} from '../../redux/homeScreen';
import {Button, Text, Box, ScrollView} from 'native-base';
import TabBar from '../../components/TabBar';
import {toggleReguireLogin} from '../../redux/globalStore';
import FollowingScreen from '../FollowingScreen';
import ExploreScreen from '../ExploreScreen';
import BlobScreen from '../BlobScreen/blob.js';
import VlogScreen from '../Vlog/index';

export default function TabScreen() {
  const index = useSelector(state => state.tab.indexTab);
  const blobIndex = useSelector(state => state.tab.indexTab);
  const dispatch = useDispatch();
  const height = Platform.OS === 'ios' ? 50 : 60;

  return (
    <Box style={{flex: 1, width: '100%', flexDirection: 'column'}}>
      {blobIndex === 3 || blobIndex === 2 ? null : (
        <>
          <Box
            style={{
              position: 'absolute',
              width: '100%',
              height: height,
              zIndex: 1,
            }}>
            <TabBar />
          </Box>
          {index === 0 && <ExploreScreen />}
          {index === 1 && <FollowingScreen />}
        </>
      )}
      {blobIndex === 2 && <BlobScreen />}
      {blobIndex === 3 && <VlogScreen />}
    </Box>
  );
}
