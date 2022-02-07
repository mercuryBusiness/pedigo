import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {decrement, increment} from '../../redux/homeScreen';
import {Button, Text, Box, ScrollView, View, Menu} from 'native-base';
import BottomBar from '../../components/BottomBar';
import HomeScreen from '../HomeScreen';
import LoginScreen from '../LoginScreen';
import MenuScreen from '../MenuScreen';

export default function MainScreen() {
  const requireLogin = useSelector(state => state.globalStore.requireLogin);
  const dispatch = useDispatch();

  return (
    <>
      <LoginScreen />
      {/* {!requireLogin && <MenuScreen />} */}
    </>
  );
}
