import React, {useState} from 'react';
import {
  Box,
  FlatList,
  Heading,
  AspectRatio,
  Image,
  useToast,
  Avatar,
  HStack,
  VStack,
  Text,
  Spacer,
  Center,
  Stack,
  Actionsheet,
  useDisclose,
  NativeBaseProvider,
  IconButton,
  Button,
} from 'native-base';
import NotificationIcon from '../../assets/svg/notificationIcon';
import {Path} from 'react-native-svg';
const data = require('../../api/following.json');
const socialData = require('../../api/social.json');
import {TouchableOpacity, Platform, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import BlobScreen from '../BlobScreen/blob';
import {goToBlog} from '../../redux/tab';
import {useSelector, useDispatch} from 'react-redux';
import VlogScreen from '../Vlog/index';

export const Example = () => {
  const {isOpen, onOpen, onClose} = useDisclose();
  const [isShowing, setIsShowing] = useState(0);
  const toast = useToast();
  const screenWidth = Dimensions.get('screen').width;

  const index = useSelector(state => state.tab.indexTab);
  const dispatch = useDispatch();

  const renderItem = ({item, index}) => (
    <Box
      w={'100%'}
      overflow="hidden"
      _dark={{
        borderColor: 'coolGray.600',
        backgroundColor: 'gray.700',
      }}
      _web={{
        shadow: 2,
        borderWidth: 0,
      }}
      _light={{
        backgroundColor: 'gray.50',
      }}>
      <Stack p="1" space={3}>
        <HStack space={2} justifyContent="space-between">
          <Avatar
            size="35px"
            ml={3}
            source={{
              uri: item.avatarUrl,
            }}
          />
          <Text
            mt={1}
            _dark={{
              color: 'warmGray.50',
            }}
            color="coolGray.800"
            bold>
            {item.fullName}
          </Text>
          <Spacer />
          <TouchableOpacity
            style={{padding: 10}}
            onPress={() => {
              setIsShowing(2);
              onOpen();
            }}>
            <Icon name="ellipsis-h" size={20} />
          </TouchableOpacity>
        </HStack>
      </Stack>
      <Box>
        <TouchableOpacity
          onPress={() =>
            index == 0 ? dispatch(goToBlog(2)) : dispatch(goToBlog(3))
          }>
          <AspectRatio w="100%" ratio={16 / 9}>
            <Image
              source={{
                uri: 'https://www.holidify.com/images/foodImages/8.jpg',
              }}
              alt="image"
              resizeMode="cover"
            />
          </AspectRatio>
        </TouchableOpacity>
        <Center
          bg="black"
          opacity={0.8}
          _text={{
            fontWeight: '700',
            fontSize: 'xs',
          }}
          rounded="50"
          position="absolute"
          bottom="5"
          left="5"
          px="5"
          py="1.5">
          <TouchableOpacity
            onPress={() => {
              setIsShowing(0);
              onOpen();
            }}>
            <Text color="white">Products</Text>
          </TouchableOpacity>
        </Center>
        <Center
          bg="black"
          opacity={0.8}
          rounded="50"
          position="absolute"
          bottom="5"
          right="5"
          px="3"
          py="1.5">
          <TouchableOpacity
            p="3"
            onPress={() => {
              toast.show({
                render: () => {
                  return (
                    <Box
                      bg="black"
                      opacity={0.8}
                      w="300"
                      px="5"
                      py="3"
                      rounded="50"
                      mb={5}>
                      <HStack space={3}>
                        <Icon name="check-circle" size={20} />
                        <Text color="white">Successfully reported</Text>
                      </HStack>
                    </Box>
                  );
                },
              });
            }}>
            <Icon name="volume-up" size={20} />
          </TouchableOpacity>
        </Center>
      </Box>
      <Stack p="4" space={3}>
        <HStack space={2} justifyContent="space-between">
          <Center>
            <TouchableOpacity
              onPress={() => {
                setIsShowing(1);
                onOpen();
              }}>
              <Icon name="share-square" size={20} />
            </TouchableOpacity>
          </Center>
          <Spacer />
          <Icon name="heart" size={20} />
          <Text
            fontSize="xs"
            _dark={{
              color: 'warmGray.50',
            }}
            color="coolGray.800"
            alignSelf="flex-start">
            {item.like}
          </Text>
          <Icon name="star" size={20} />
          <Text
            fontSize="xs"
            _dark={{
              color: 'warmGray.50',
            }}
            color="coolGray.800"
            alignSelf="flex-start">
            {item.wishlist}
          </Text>
          <Icon name="comment" size={20} />
          <Text
            fontSize="xs"
            _dark={{
              color: 'warmGray.50',
            }}
            color="coolGray.800"
            alignSelf="flex-start">
            {item.comment}
          </Text>
        </HStack>
        <Text fontWeight="800" fontSize={16}>
          {item.recentText}
        </Text>
        <Text fontWeight="400">
          {item.description.length > 40
            ? item.description.substring(0, 40) + '...'
            : item.description}
        </Text>
        <VStack px={5}>
          <HStack>
            <Text fontWeight="600">Casual:</Text>
            <Text fontWeight="400" px={2}>
              {item.description.substring(0, 20)}
            </Text>
          </HStack>
          <HStack>
            <Text fontWeight="600">Casual:</Text>
            <Text fontWeight="400" px={2}>
              {item.description.substring(0, 20)}
            </Text>
          </HStack>
        </VStack>
      </Stack>
    </Box>
  );
  return (
    <Box
      w={{
        base: '100%',
      }}
      pt={Platform.OS === 'ios' ? 12 : 16}
      pb={Platform.OS === 'ios' ? 20 : 16}>
      <FlatList
        data={data}
        removeClippedSubviews
        maxToRenderPerBatch={3}
        initialNumToRender={3}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      {isShowing == 0 && (
        <Actionsheet isOpen={isOpen} onClose={onClose} hideDragIndicator>
          <Actionsheet.Content>
            <Box
              w="100%"
              h={60}
              px={4}
              justifyContent="center"
              alignItems="center">
              <Text>Products</Text>
            </Box>
            <Actionsheet.Item>
              <HStack>
                <HStack space={4}>
                  <Image
                    w="20"
                    source={{
                      uri: 'https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg',
                    }}
                    alt="image"
                  />
                  <VStack space={4}>
                    {/* <Text>Emberoidered Logo Cotton Gabardine Zip-front Shirt</Text> */}
                    <Text>Emberoidered Logo Cotton</Text>
                    <HStack>
                      <Text>Rp 999.000</Text>
                      <Text>Rp 1899.000</Text>
                    </HStack>
                  </VStack>
                </HStack>
                <Spacer />
                <VStack ml={4} justifyContent="space-between">
                  <Icon name="tag" size={20} />

                  <Icon name="flag" size={20} />
                </VStack>
              </HStack>
            </Actionsheet.Item>
          </Actionsheet.Content>
        </Actionsheet>
      )}

      {isShowing == 1 && (
        <Actionsheet isOpen={isOpen} onClose={onClose} hideDragIndicator>
          <Actionsheet.Content>
            <FlatList
              data={socialData}
              numColumns={3}
              p={1}
              renderItem={({item}) => (
                <Center>
                  <Box my={5} mx={1} style={{width: screenWidth / 4}}>
                    <TouchableOpacity>
                      <Center>
                        <Icon
                          name={item.Iconname}
                          size={20}
                          color={item.color}
                        />
                        <Text mt={1}>{item.name}</Text>
                      </Center>
                    </TouchableOpacity>
                  </Box>
                </Center>
              )}
              keyExtractor={item => item.id}
            />
            <Box
              w="100%"
              h={60}
              px={4}
              justifyContent="center"
              alignItems="center">
              <Text
                fontSize="16"
                color="gray.500"
                _dark={{
                  color: 'gray.300',
                }}>
                Cancel
              </Text>
            </Box>
          </Actionsheet.Content>
        </Actionsheet>
      )}

      {isShowing == 2 && (
        <Actionsheet isOpen={isOpen} onClose={onClose} hideDragIndicator>
          <Actionsheet.Content>
            <Actionsheet.Item startIcon={<Icon name="ban" size={20} />}>
              Not Interested
            </Actionsheet.Item>
            <Actionsheet.Item
              startIcon={<Icon name="exclamation-triangle" size={20} />}>
              Report
            </Actionsheet.Item>
            <Box
              w="100%"
              h={60}
              px={4}
              justifyContent="center"
              alignItems="center">
              <TouchableOpacity
                onPress={() => {
                  onClose;
                }}>
                <Text
                  fontSize="16"
                  color="gray.500"
                  _dark={{
                    color: 'gray.300',
                  }}>
                  Cancel
                </Text>
              </TouchableOpacity>
            </Box>
          </Actionsheet.Content>
        </Actionsheet>
      )}
    </Box>
  );
};

export default function FollowingScreen() {
  return <Example />;
}
