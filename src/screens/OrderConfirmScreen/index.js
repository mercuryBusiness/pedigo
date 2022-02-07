import React, {useState} from 'react';
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
  Circle,
  useToast,
  Actionsheet,
  useDisclose,
  Button,
} from 'native-base';
import {TouchableOpacity, Platform, StyleSheet, Dimensions} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function OrderConfirmListScreen({navigation, route}) {
  const {isOpen, onOpen, onClose} = useDisclose();
  const toast = useToast();

  const screen = Dimensions.get('screen');
  const height = Platform.OS === 'ios' ? 50 : 50;
  const top = Platform.OS === 'ios' ? 50 : 15;

  React.useEffect(() => {
    if (route.params?.post) {
      setUserData(route.params.post);
      setAddress(true);
    }
  }, [route.params?.post]);

  const currencyFormat = number => {
    return number.toFixed(3).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  };

  const data = [
    {
      id: 1,
      imgUrl: 'https://www.holidify.com/images/foodImages/8.jpg',
      description: 'Mickey Mouseprint cardigan and jeans set',
      price: 479,
      price_retail: 579,
      count: 2,
    },
    {
      id: 2,
      imgUrl: 'https://www.holidify.com/images/foodImages/8.jpg',
      description: 'Mickey Mouseprint cardigan and jeans set',
      price: 479,
      price_retail: 579,
      count: 2,
    },
  ];

  const [userData, setUserData] = useState({});
  const [address, setAddress] = useState(false);
  const [payment, setPayment] = useState(0);
  const [discount, setDiscount] = useState(0);

  const renderItem = ({item}) => (
    <Box w={'100%'} overflow="hidden" bg={'white'}>
      <Text mb={1}>Remark</Text>
      <Stack space={3}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Order_Confirm_Checkout');
          }}>
          <HStack space={3}>
            <Image
              w={'24%'}
              h={'100%'}
              resizeMode="cover"
              rounded="xl"
              source={{
                uri: item.imgUrl,
              }}
              alt="image"
            />
            <VStack w="55%" justifyContent="space-between" space={2}>
              <Text>{item.description}</Text>
              <HStack>
                <Text mr={2}>Rp {currencyFormat(item.price)}</Text>
                <Text strikeThrough color="gray.300">
                  Rp {currencyFormat(item.price_retail)}
                </Text>
              </HStack>
              <Spacer />
              <HStack>
                <Center>
                  <Circle
                    size={5}
                    bg="white"
                    borderWidth={1}
                    borderColor="gray.300">
                    <Text bottom={1}>s</Text>
                  </Circle>
                </Center>
                <Text> / </Text>
                <Center>
                  <Circle
                    size={5}
                    bg="skyblue"
                    borderWidth={1}
                    borderColor="gray.300"
                  />
                </Center>
              </HStack>
            </VStack>
            <Spacer />
          </HStack>
          <HStack
            position="absolute"
            right={0}
            bottom={0}
            justifyContent="space-between"
            alignItems="center">
            <Icon name="times" />
            <Text>{item.count}</Text>
          </HStack>
        </TouchableOpacity>
      </Stack>
      <HStack justifyContent="flex-end">
        <Text color="gray.300">None</Text>
      </HStack>
    </Box>
  );
  return (
    <SafeAreaView style={[styles.container, {paddingTop: height}]}>
      <Box style={[styles.header, {height: height, top: top}]}>
        <Box flex={1}>
          <HStack px={5} alignItems="center" justifyContent="space-between">
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}>
              <Icon name="chevron-left" size={18} />
            </TouchableOpacity>
            <HStack alignItems="center">
              <Text mx={2} bold>
                Order No. 3233244
              </Text>
              <Icon name="clone" size={14} color="skyblue" />
            </HStack>
            <Text />
          </HStack>
        </Box>
      </Box>
      <Box mt={3}>
        {!address && (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Address_Book');
            }}>
            <HStack alignItems="center" justifyContent="space-between">
              <Text>Please add your address</Text>
              <Icon name="chevron-right" size={18} />
            </HStack>
          </TouchableOpacity>
        )}
        {address && (
          <VStack>
            <HStack space={2}>
              <Text bold>
                {userData.firstName} {userData.lastName}
              </Text>
              <Text color={'gray.400'}>{userData.phoneNumber}</Text>
            </HStack>
            <Text color={'gray.400'} fontSize={12}>
              {userData.city}
            </Text>
            <Text color={'gray.400'} fontSize={12}>
              {userData.address1} {userData.code}.
            </Text>
          </VStack>
        )}
        <Box w={'100%'} h={1} my={3} bg={'rose.300'} />
      </Box>
      <Box>
        <HStack
          alignItems="center"
          justifyContent="flex-start"
          mb={2}
          space={2}>
          <Text bold>Shopping Bag</Text>
          <Icon name="info-circle" size={18} />
        </HStack>
      </Box>
      <Box h={screen.height * 0.4}>
        <FlatList
          data={data}
          removeClippedSubviews
          maxToRenderPerBatch={6}
          initialNumToRender={6}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </Box>
      <Box>
        <VStack space={2}>
          <Text mb={1} bold>
            Payment Method
          </Text>
          <TouchableOpacity
            onPress={() => {
              setPayment(1);
            }}>
            <HStack alignItems="center" justifyContent="space-between">
              <Text>OVO</Text>
              {payment === 1 && (
                <Icon name="check-circle" size={18} color={'skyblue'} />
              )}
              {payment !== 1 && (
                <Center>
                  <Circle
                    size={4}
                    bg="white"
                    borderWidth={1}
                    borderColor="gray.300"
                  />
                </Center>
              )}
            </HStack>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setPayment(2);
            }}>
            <HStack alignItems="center" justifyContent="space-between">
              <Text>Dana</Text>
              {payment === 2 && (
                <Icon name="check-circle" size={18} color={'skyblue'} />
              )}
              {payment !== 2 && (
                <Center>
                  <Circle
                    size={4}
                    bg="white"
                    borderWidth={1}
                    borderColor="gray.300"
                  />
                </Center>
              )}
            </HStack>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setPayment(3);
            }}>
            <HStack alignItems="center" justifyContent="space-between">
              <Text>Bank Transfer</Text>
              {payment === 3 && (
                <Icon name="check-circle" size={18} color={'skyblue'} />
              )}
              {payment !== 3 && (
                <Center>
                  <Circle
                    size={4}
                    bg="white"
                    borderWidth={1}
                    borderColor="gray.300"
                  />
                </Center>
              )}
            </HStack>
          </TouchableOpacity>
        </VStack>
      </Box>
      <Box style={styles.bottomArea}>
        <TouchableOpacity
          onPress={() => {
            address
              ? onOpen()
              : toast.show({
                  render: () => {
                    return (
                      <Box
                        bg="red.600"
                        opacity={0.8}
                        w={screen.width * 0.9}
                        px="5"
                        py="3"
                        rounded="50"
                        mb={5}>
                        <HStack space={3}>
                          <Icon name="times-circle" size={20} color="white" />
                          <Text color="white">Please add your address.</Text>
                        </HStack>
                      </Box>
                    );
                  },
                });
          }}
          style={styles.whiteButton}>
          <HStack
            alignItems="center"
            justifyContent="space-between"
            py={3}
            px={3}>
            <Text>Apply Voucher</Text>
            <Icon name="chevron-right" size={18} />
          </HStack>
        </TouchableOpacity>
      </Box>
      <Actionsheet isOpen={isOpen} onClose={onClose} hideDragIndicator>
        <Actionsheet.Content>
          <Box w="100%" h={60} px={4} justifyContent="center">
            <HStack alignItems="center" justifyContent="space-between">
              <Text />
              <Text bold>Vouchers</Text>
              <TouchableOpacity onPress={onClose}>
                <Icon name="times" size={20} />
              </TouchableOpacity>
            </HStack>
          </Box>
          <Actionsheet.Item
            py={2}
            onPress={() => {
              setDiscount(1);
            }}>
            <HStack alignItems="center">
              <HStack space={4}>
                <Box
                  w={32}
                  h={20}
                  bg={'skyblue'}
                  justifyContent="center"
                  alignItems="center"
                  borderTopLeftRadius={10}
                  borderBottomLeftRadius={10}>
                  <Text fontSize={24} color={'white'} bold>
                    50%
                  </Text>
                  <Text fontSize={16} color={'white'}>
                    DISCOUNT
                  </Text>
                </Box>
                <VStack>
                  <Text fontSize={12} style={{width: '70%'}}>
                    Minimal belanja mulai dari 30RB
                  </Text>
                  <Text fontSize={11} color={'gray.300'}>
                    Berlaku hingga
                  </Text>
                  <Text fontSize={11} color={'gray.300'}>
                    30 Desember 2021
                  </Text>
                </VStack>
              </HStack>
              <Spacer />
              {discount === 1 && (
                <Icon name="check-circle" size={18} color={'skyblue'} />
              )}
              {discount !== 1 && (
                <Center>
                  <Circle
                    size={4}
                    bg="white"
                    borderWidth={1}
                    borderColor="gray.300"
                  />
                </Center>
              )}
            </HStack>
          </Actionsheet.Item>
          <Actionsheet.Item
            py={2}
            onPress={() => {
              setDiscount(2);
            }}>
            <HStack alignItems="center">
              <HStack space={4}>
                <Box
                  w={32}
                  h={20}
                  bg={'skyblue'}
                  justifyContent="center"
                  alignItems="center"
                  borderTopLeftRadius={10}
                  borderBottomLeftRadius={10}>
                  <Text fontSize={24} color={'white'} bold>
                    50%
                  </Text>
                  <Text fontSize={16} color={'white'}>
                    DISCOUNT
                  </Text>
                </Box>
                <VStack>
                  <Text fontSize={12} style={{width: '70%'}}>
                    Minimal belanja mulai dari 30RB
                  </Text>
                  <Text fontSize={11} color={'gray.300'}>
                    Berlaku hingga
                  </Text>
                  <Text fontSize={11} color={'gray.300'}>
                    30 Desember 2021
                  </Text>
                </VStack>
              </HStack>
              <Spacer />
              {discount === 2 && (
                <Icon name="check-circle" size={18} color={'skyblue'} />
              )}
              {discount !== 2 && (
                <Center>
                  <Circle
                    size={4}
                    bg="white"
                    borderWidth={1}
                    borderColor="gray.300"
                  />
                </Center>
              )}
            </HStack>
          </Actionsheet.Item>
          <Button
            w="91%"
            h={45}
            mt={5}
            bg={'skyblue'}
            justifyContent="center"
            alignItems="center"
            borderRadius={10}>
            <Text fontSize="16" color="white">
              Confirm
            </Text>
          </Button>
        </Actionsheet.Content>
      </Actionsheet>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    width: '100%',
    paddingHorizontal: 20,
    flexDirection: 'column',
  },
  header: {
    backgroundColor: 'transparent',
    position: 'absolute',
    width: '100%',
    zIndex: 1,
  },
  bottomArea: {
    position: 'absolute',
    width: '100%',
    height: 80,
    bottom: 10,
    marginHorizontal: 20,
    justifyContent: 'center',
  },
  whiteButton: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
  },
});
