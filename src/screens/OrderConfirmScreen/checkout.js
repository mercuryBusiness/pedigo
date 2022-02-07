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
} from 'native-base';
import {TouchableOpacity, Platform, StyleSheet, Dimensions} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function OrderConfirmCheckoutScreen({navigation}) {
  const screen = Dimensions.get('screen');
  const height = Platform.OS === 'ios' ? 50 : 50;
  const top = Platform.OS === 'ios' ? 50 : 15;

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
  ];

  const [payment, setPayment] = useState(0);

  const renderItem = ({item}) => (
    <Box w={'100%'} overflow="hidden" bg={'white'}>
      <Text mb={1}>Remark</Text>
      <Stack space={3}>
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
            <Text ml={2} bold>
              Order Confirmation
            </Text>
            <Text />
          </HStack>
        </Box>
      </Box>
      <Box mt={5}>
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
      <VStack py={6} space={2}>
        <TouchableOpacity onPress={() => {}} style={styles.whiteButton}>
          <HStack
            alignItems="center"
            justifyContent="space-between"
            py={3}
            px={3}>
            <Text>Apply Voucher</Text>
            <Icon name="chevron-right" size={18} />
          </HStack>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={styles.whiteButton}>
          <HStack
            alignItems="center"
            justifyContent="space-between"
            py={3}
            px={3}>
            <Text>Apply Gift Card</Text>
            <Icon name="chevron-right" size={18} />
          </HStack>
        </TouchableOpacity>
      </VStack>
      <Box>
        <VStack space={2}>
          <HStack alignItems="center" justifyContent="space-between">
            <Text fontSize={12}>Retail Price</Text>
            <Text fontSize={12} strikeThrough color="gray.300">
              Rp {currencyFormat(3200)}
            </Text>
          </HStack>
          <HStack alignItems="center" justifyContent="space-between">
            <Text fontSize={12}>Subtotal</Text>
            <Text fontSize={12} bold>
              Rp {currencyFormat(1916)}
            </Text>
          </HStack>
          <HStack alignItems="center" justifyContent="space-between">
            <Text fontSize={12}>Voucher</Text>
            <Text fontSize={12} bold color="red.400">
              - Rp {currencyFormat(25)}
            </Text>
          </HStack>
          <HStack alignItems="center" justifyContent="space-between">
            <Text fontSize={12}>Shipping</Text>
            <Text fontSize={12} bold>
              Rp. {currencyFormat(1900)}
            </Text>
          </HStack>
        </VStack>
      </Box>
      <Box style={styles.bottomArea}>
        <HStack justifyContent="space-between" mb={1}>
          <Text color="black" fontSize={16}>
            Total
          </Text>
          <Text color="black">Rp. {currencyFormat(1900)}</Text>
        </HStack>
        <TouchableOpacity onPress={() => {}} style={styles.payButton}>
          <HStack justifyContent="center" py={1}>
            <Text color="white" bold>
              Pay now
            </Text>
          </HStack>
        </TouchableOpacity>
      </Box>
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
    height: 100,
    bottom: 10,
    marginHorizontal: 20,
    justifyContent: 'center',
  },
  whiteButton: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
  },
  payButton: {
    width: '100%',
    backgroundColor: 'skyblue',
    borderRadius: 5,
  },
});
