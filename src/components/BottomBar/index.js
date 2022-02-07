import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  Center,
  Text,
  Box,
  HStack,
  Pressable,
  Icon,
  CheckIcon,
} from 'native-base';
import HomeIcon from '../../assets/svg/homeIcon';
import StoreIcon from '../../assets/svg/storeIcon';
import AddIcon from '../../assets/svg/addIcon';
import NotificationIcon from '../../assets/svg/notificationIcon';
import ProfileIcon from '../../assets/svg/profileIcon';
import {goToIndex} from '../../redux/homeScreen';

export default function BottomBar() {
  const index = useSelector(state => state.homeScreen.indexBottomBar);
  const dispatch = useDispatch();
  return (
    <Box bg="white" flex={1}>
      <HStack bg="white" alignItems="center" shadow={1}>
        <Pressable
          cursor="pointer"
          opacity={index === 0 ? 0.7 : 1}
          py="3"
          flex={1}
          onPress={() => dispatch(goToIndex(0))}>
          <Center>
            <Icon mb="1" color="#161616" size="sm">
              <HomeIcon />
            </Icon>
            <Text style={{paddingBottom: 11}} color="#161616" fontSize="8">
              Home
            </Text>
          </Center>
        </Pressable>
        <Pressable
          cursor="pointer"
          opacity={index === 1 ? 0.7 : 1}
          py="2"
          flex={1}
          onPress={() => dispatch(goToIndex(1))}>
          <Center>
            <Icon mb="1" color="#161616" size="sm">
              <StoreIcon />
            </Icon>
            <Text style={{paddingBottom: 11}} color="#161616" fontSize="8">
              Store
            </Text>
          </Center>
        </Pressable>
        <Pressable
          cursor="pointer"
          opacity={index === 2 ? 0.7 : 1}
          py="2"
          flex={1}
          onPress={() => dispatch(goToIndex(2))}>
          <Center>
            <Icon mb="3" color="#161616" size="lg">
              <AddIcon />
            </Icon>
          </Center>
        </Pressable>
        <Pressable
          cursor="pointer"
          opacity={index === 3 ? 0.7 : 1}
          py="2"
          flex={1}
          onPress={() => dispatch(goToIndex(3))}>
          <Center>
            <Icon mb="1" color="#161616" size="sm">
              <NotificationIcon />
            </Icon>
            <Text style={{paddingBottom: 11}} color="#161616" fontSize="8">
              Notification
            </Text>
          </Center>
        </Pressable>
        <Pressable
          cursor="pointer"
          opacity={index === 4 ? 0.7 : 1}
          py="2"
          flex={1}
          onPress={() => dispatch(goToIndex(4))}>
          <Center>
            <Icon mb="1" color="#161616" size="sm">
              <ProfileIcon />
            </Icon>
            <Text style={{paddingBottom: 11}} color="#161616" fontSize="8">
              Profile
            </Text>
          </Center>
        </Pressable>
      </HStack>
    </Box>
  );
}
