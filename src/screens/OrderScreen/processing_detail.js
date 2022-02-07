import React from 'react';
import {
  Box,
  Image,
  HStack,
  VStack,
  Text,
  Spacer,
  Center,
  Stack,
  Circle,
} from 'native-base';
import {TouchableOpacity, Platform, ScrollView, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useSelector} from 'react-redux';

export default function ProcessingDetailPage({route, navigation}) {
  const {itemid} = route.params;
  const orders = useSelector(state => state.order.orders);

  const height = Platform.OS === 'ios' ? 50 : 80;
  const top = Platform.OS === 'ios' ? 50 : 15;
  const [isCancel, setIsCancel] = React.useState(false);
  const [isReview, setIsReview] = React.useState(false);
  const [isOrdered, setIsOrdered] = React.useState(false);

  const isDetail = order => {
    let result = '';
    if (order !== undefined) {
      if (order.orderDetails.length > 0) {
        result = order;
      }
    }

    return result;
  };

  const currencyFormat = number => {
    if (number) {
      return number.toFixed(3).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    } else {
      return '0.00';
    }
  };

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
              <Text mr={2} bold>
                Order No.{' '}
                {isDetail(orders[itemid]) !== ''
                  ? orders[itemid].orderDetails[0].SKU
                  : ''}
              </Text>
              <Icon name="clone" size={14} color="skyblue" />
            </HStack>
            <Text />
          </HStack>
        </Box>
      </Box>
      <ScrollView>
        <Stack px={5} my={2}>
          <HStack justifyContent="space-between">
            <Text>Remark</Text>
          </HStack>
        </Stack>
        <Stack px={5} space={3}>
          <HStack space={3}>
            {isDetail(orders[itemid]) !== '' && (
              <Image
                size={82}
                resizeMode="cover"
                rounded="xl"
                source={{
                  uri: orders[itemid].orderDetails[0].DEFAULTIMAGE,
                }}
                alt="image"
              />
            )}
            <VStack justifyContent="space-between">
              <Text>
                {isDetail(orders[itemid]) !== ''
                  ? orders[itemid].orderDetails[0].PRODUCTNAME
                  : ''}
              </Text>
              <HStack>
                <Text mr={2}>
                  Rp{' '}
                  {isDetail(orders[itemid]) !== ''
                    ? currencyFormat(orders[itemid].orderDetails[0].PRICE)
                    : '0.00'}
                </Text>
                <Text strikeThrough color="gray.300">
                  Rp{' '}
                  {isDetail(orders[itemid]) !== ''
                    ? currencyFormat(orders[itemid].orderDetails[0].DISCOUNT)
                    : '0.00'}
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
          </HStack>
          <Text position="absolute" right={5} bottom={0}>
            <Icon name="times" size={12} />
            {isDetail(orders[itemid]) !== ''
              ? orders[itemid].orderDetails[0].QUANTITY
              : '0'}
          </Text>
        </Stack>
        <Stack px={5}>
          <HStack justifyContent="flex-end">
            <Text color="gray.300">None</Text>
          </HStack>
        </Stack>
        <Stack px={5} py={5}>
          <VStack space={2}>
            <HStack justifyContent="space-between">
              <Text>Retail Price</Text>
              <Text color="gray.300" strikeThrough>
                Rp{' '}
                {isDetail(orders[itemid]) !== ''
                  ? currencyFormat(
                      orders[itemid].orderDetails[0].DISCOUNT *
                        orders[itemid].orderDetails[0].QUANTITY,
                    )
                  : '0.00'}
              </Text>
            </HStack>
            <HStack justifyContent="space-between">
              <Text>Subtotal</Text>
              <Text bold>
                Rp{' '}
                {isDetail(orders[itemid]) !== ''
                  ? currencyFormat(orders[itemid].order.SUBTOTAL)
                  : '0.00'}
              </Text>
            </HStack>
            <HStack justifyContent="space-between">
              <Text>Shipping</Text>
              <Text bold>
                Rp{' '}
                {isDetail(orders[itemid]) !== ''
                  ? currencyFormat(orders[itemid].order.SHIPPINGCOST)
                  : '0.00'}
              </Text>
            </HStack>
            <HStack justifyContent="space-between">
              <Text>Total</Text>
              <Text bold>
                Rp{' '}
                {isDetail(orders[itemid]) !== ''
                  ? currencyFormat(orders[itemid].orderDetails[0].PRODUCTTOTAL)
                  : '0.00'}
              </Text>
            </HStack>
          </VStack>
        </Stack>
        <Stack px={5} py={5} mb={20}>
          <VStack space={12}>
            <HStack justifyContent="space-between" space={2}>
              <Center>
                <Circle size={3} bg="skyblue" />
              </Center>
              <Text>Order Created</Text>
              <Spacer />
              <Text color="gray.300">06-06-2021</Text>
            </HStack>
            <HStack justifyContent="space-between" space={2}>
              <Center>
                <Circle size={3} bg="skyblue" />
              </Center>
              <Text>Order Paid</Text>
              <Spacer />
              <Text color="gray.300">06-06-2021</Text>
            </HStack>
            <HStack justifyContent="space-between" space={2}>
              <Center>
                <Circle size={3} bg="skyblue" />
              </Center>
              <Text>Order Processing</Text>
              <Spacer />
              <Text color="gray.300">06-06-2021</Text>
            </HStack>
            <HStack justifyContent="space-between" space={2}>
              <Center>
                <Circle size={3} bg="skyblue" />
              </Center>
              <VStack>
                <Text>Product A shipped</Text>
                <HStack alignItems="center" space={2}>
                  <Text>Tracking:</Text>
                  <Text>xxxxxxxxxxxx</Text>
                  <TouchableOpacity
                    onPress={() => {
                      setIsCancel(true);
                    }}>
                    <Icon name="clone" size={14} color="skyblue" />
                  </TouchableOpacity>
                </HStack>
              </VStack>
              <Spacer />
              <VStack justifyContent="flex-end">
                <Text color="gray.300">06-06-2021</Text>
              </VStack>
            </HStack>
            <HStack justifyContent="space-between" space={2}>
              <Center>
                <Circle size={3} bg="skyblue" />
              </Center>
              <VStack>
                <Text>Product B shipped</Text>
                <HStack alignItems="center" space={2}>
                  <Text>Tracking:</Text>
                  <Text>xxxxxxxxxxxx</Text>
                  <TouchableOpacity
                    onPress={() => {
                      setIsCancel(true);
                    }}>
                    <Icon name="clone" size={14} color="skyblue" />
                  </TouchableOpacity>
                </HStack>
              </VStack>
              <Spacer />
              <VStack justifyContent="flex-end">
                <Text color="gray.300">06-06-2021</Text>
              </VStack>
            </HStack>
            {isCancel && (
              <HStack justifyContent="space-between" space={2}>
                <Center>
                  <Circle size={3} bg="skyblue" />
                </Center>
                <Text>Order Received</Text>
                <Spacer />
                <Text color="gray.300">06-06-2021</Text>
              </HStack>
            )}
            {isOrdered && (
              <HStack justifyContent="space-between" space={2}>
                <Center>
                  <Circle size={3} bg="skyblue" />
                </Center>
                <Text>Order Completed</Text>
                <Spacer />
                <Text color="gray.300">06-06-2021</Text>
              </HStack>
            )}
          </VStack>
        </Stack>
      </ScrollView>
      <Box px={5} style={[styles.bottomArea, {bottom: top}]}>
        {!isReview && (
          <HStack justifyContent="space-between" alignItems="center" space={1}>
            <Icon name="info-circle" size={20} color="gray" />
            <Spacer />
            {isCancel && (
              <TouchableOpacity
                onPress={() => {
                  setIsReview(true);
                }}
                style={[styles.button3, {backgroundColor: 'skyblue'}]}>
                <HStack justifyContent="center" py={1}>
                  <Text color="white" bold>
                    Received
                  </Text>
                </HStack>
              </TouchableOpacity>
            )}
            {!isCancel && (
              <TouchableOpacity onPress={() => {}} style={styles.button3}>
                <HStack justifyContent="center" py={1}>
                  <Text color="gray.400">Cancel</Text>
                </HStack>
              </TouchableOpacity>
            )}
          </HStack>
        )}
        {isReview && !isOrdered && (
          <HStack justifyContent="space-between" space={2}>
            <VStack>
              <HStack space={1}>
                <Text fontSize={10}>Review before</Text>
                <Text fontSize={10} bold>
                  06-06-2021
                </Text>
              </HStack>
              <Text color="red.500" fontSize={10}>
                Receive a discount voucher
              </Text>
            </VStack>
            <Spacer />
            <TouchableOpacity onPress={() => {}} style={styles.whiteButton}>
              <Text color="gray.600" px={5} py={1} fontSize={12}>
                Review
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setIsOrdered(true);
              }}
              style={styles.blueButton}>
              <Text color="white" px={5} py={1} fontSize={12}>
                Buy Again
              </Text>
            </TouchableOpacity>
          </HStack>
        )}
        {isOrdered && (
          <HStack justifyContent="space-between" space={2}>
            <TouchableOpacity onPress={() => {}} style={styles.button2}>
              <HStack justifyContent="center" py={1}>
                <Text color="gray.400">Reviewed</Text>
              </HStack>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {}}
              style={[styles.button2, {backgroundColor: 'skyblue'}]}>
              <HStack justifyContent="center" py={1}>
                <Text color="white" bold>
                  Buy Again
                </Text>
              </HStack>
            </TouchableOpacity>
          </HStack>
        )}
      </Box>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    width: '100%',
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
    justifyContent: 'center',
  },
  whiteButton: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 50,
  },
  blueButton: {
    backgroundColor: 'skyblue',
    borderRadius: 50,
  },
  button2: {
    width: '45%',
    borderRadius: 5,
  },
  button3: {
    width: '90%',
    borderRadius: 5,
  },
});
