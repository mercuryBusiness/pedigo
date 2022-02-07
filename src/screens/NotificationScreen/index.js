import React from 'react';
import {
  Box,
  FlatList,
  Image,
  HStack,
  VStack,
  Text,
  Spacer,
  Center,
  Stack,
} from 'native-base';
import {TouchableOpacity, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const data = require('../../api/notification.json');

export default function NotificationScreen() {
  const internalData = [
    '',
    {description: 'liked your post', icon: {name: 'heart', color: 'red'}},
    {
      description: 'collected your post',
      icon: {name: 'star', color: '#ffd60a'},
    },
    {
      description: 'commented your post',
      icon: {name: 'comment', color: 'skyblue'},
    },
    {
      description: 'Your product has been shipped',
      icon: {name: 'ship', color: 'green'},
    },
    {description: 'followed you', icon: {name: 'user', color: 'skyblue'}},
    {description: 'followed you', icon: {name: 'user', color: 'skyblue'}},
    {
      description: 'successfully refunded',
      icon: {name: 'undo', color: 'green'},
    },
    {
      description: 'for summer fashion for the beach and sun and travel',
      icon: {name: 'fire', color: 'red'},
    },
  ];

  const renderItem = ({item}) => (
    <Box w={'100%'} overflow="hidden">
      <Stack px={5} mb={5}>
        <HStack justifyContent="space-between" alignItems="center" space={3}>
          <Icon
            name={internalData[item.type].icon.name}
            size={14}
            color={internalData[item.type].icon.color}
          />
          <VStack
            justifyContent="space-between"
            w={item.type == 7 ? '80%' : '60%'}>
            <Text color="gray.600">
              <Text bold>{item.name} </Text>
              {internalData[item.type].description}
            </Text>
            <Text color="gray.400">{item.date}</Text>
          </VStack>
          <Spacer />
          {item.type == 5 && (
            <TouchableOpacity
              style={{backgroundColor: 'skyblue', borderRadius: 50}}>
              <Text color="white" px={5} py={1} fontSize={12}>
                Follow
              </Text>
            </TouchableOpacity>
          )}
          {item.type == 6 && (
            <TouchableOpacity
              style={{borderWidth: 1, borderColor: 'gray', borderRadius: 50}}>
              <Text color="gray.600" px={5} py={1} fontSize={12}>
                Following
              </Text>
            </TouchableOpacity>
          )}
          {item.type != 5 && item.type != 6 && item.type != 7 && (
            <Image
              size={20}
              resizeMode="cover"
              rounded="lg"
              source={{
                uri: item.imgUrl,
              }}
              alt="image"
            />
          )}
        </HStack>
      </Stack>
    </Box>
  );

  return (
    <Box bg={'white'} pb={Platform.OS === 'ios' ? 32 : 32}>
      <Center py={6}>
        <Text fontSize={18} bold>
          Notification
        </Text>
      </Center>
      <FlatList
        data={data}
        removeClippedSubviews
        maxToRenderPerBatch={10}
        initialNumToRender={10}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </Box>
  );
}
