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
import {goToIndex} from '../../redux/tab';

export default function TabBar() {
  const index = useSelector(state => state.tab.indexTab);
  const blobIndex = useSelector(state => state.tab.indexTab);
  const dispatch = useDispatch();
  return (
    <Box flex={1}>
      <Center flex={1}></Center>
      <HStack alignItems="center">
        <>
          <Pressable
            cursor="pointer"
            opacity={index === 0 ? 1 : 0.6}
            py="3"
            flex={1}
            onPress={() => dispatch(goToIndex(0))}>
            <Center ml="24">
              <Text pb="0.5" color="#161616" fontSize="14">
                Explore
              </Text>
              <Box
                w="5"
                h="1"
                backgroundColor={index === 0 ? 'cyan.200' : 'white'}></Box>
            </Center>
          </Pressable>
          <Pressable
            cursor="pointer"
            opacity={index === 1 || blobIndex === 2 ? 1 : 0.6}
            py="2"
            flex={1}
            onPress={() => dispatch(goToIndex(1))}>
            <Center mr="24">
              <Text pb="0.5" color="#161616" fontSize="14">
                Following
              </Text>
              <Box
                w="5"
                h="1"
                backgroundColor={
                  index === 1 || blobIndex === 2 ? 'cyan.200' : 'white'
                }></Box>
            </Center>
          </Pressable>
        </>
      </HStack>
    </Box>
  );
}
