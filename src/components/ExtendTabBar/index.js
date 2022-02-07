import React, {useRef} from 'react';
import {Animated, Easing, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {Center, Text, Box, HStack, Pressable} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import {goToIndex} from '../../redux/extendTab';

export default function ExtendTabBar({extraData}) {
  const index = useSelector(state => state.extendTab.indexTab);
  const dispatch = useDispatch();
  const tabs = [
    {index: 0, name: 'All Orders'},
    {index: 1, name: 'Unpaid'},
    {index: 2, name: 'Processing'},
    {index: 3, name: 'Shipped'},
    {index: 4, name: 'Review'},
    {index: 5, name: 'Returns'},
  ];
  const position = useRef(new Animated.Value(0)).current;

  const leftMove = () => {
    Animated.timing(position, {
      toValue: -190,
      duration: 1000,
      easing: Easing.ease,
    }).start();
  };
  const rightMove = () => {
    Animated.timing(position, {
      toValue: 0,
      duration: 1000,
      easing: Easing.ease,
    }).start();
  };

  const FloatingView = props => {
    return (
      <Animated.View
        style={{
          ...props.style,
          left: position,
        }}>
        {props.children}
      </Animated.View>
    );
  };

  return (
    <Box flex={1}>
      <HStack px={5} alignItems="center" justifyContent="space-between">
        <TouchableOpacity
          onPress={() => {
            extraData.navigate('Home');
          }}>
          <Icon name="chevron-left" size={18} />
        </TouchableOpacity>
        <Text mr={5} bold>
          Orders
        </Text>
        <Text></Text>
      </HStack>
      <FloatingView>
        <HStack alignItems="center" w="150%">
          {tabs.map(element => (
            <Pressable
              key={element.index}
              cursor="pointer"
              opacity={index === element.index ? 1 : 0.6}
              py="3"
              flex={1}
              onPress={() => {
                dispatch(goToIndex(element.index));
                element.index == 2 && rightMove();
                element.index == 3 && leftMove();
              }}>
              <Center>
                <Text pb="0.5" color="#161616" fontSize="14">
                  {element.name}
                </Text>
                <Box
                  w="5"
                  h="1"
                  backgroundColor={
                    index === element.index ? 'cyan.200' : 'white'
                  }></Box>
              </Center>
            </Pressable>
          ))}
        </HStack>
      </FloatingView>
    </Box>
  );
}
