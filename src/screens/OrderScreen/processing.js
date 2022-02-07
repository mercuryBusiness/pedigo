import React, {useCallback, PureComponent} from 'react';
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
import {TouchableOpacity, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useSelector} from 'react-redux';

class MyListItem extends PureComponent {
  render() {
    const order = this.props.order;
    const navigation = this.props.navigation;

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
      <Box w={'100%'} overflow="hidden">
        <Stack px={5} my={2}>
          <HStack justifyContent="space-between">
            <Text>Remark</Text>
          </HStack>
        </Stack>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Order_Processing_Detail', {
              itemid: order.order.ORDERID,
            });
          }}>
          <Stack px={5} space={3}>
            <HStack space={3}>
              {isDetail(order) !== '' && (
                <Image
                  size={82}
                  resizeMode="cover"
                  rounded="xl"
                  source={{
                    uri: order.orderDetails[0].DEFAULTIMAGE,
                  }}
                  alt="image"
                />
              )}
              <VStack justifyContent="space-between">
                <Text>
                  {isDetail(order) !== ''
                    ? order.orderDetails[0].PRODUCTNAME
                    : ''}
                </Text>
                <HStack>
                  <Text mr={2}>
                    Rp{' '}
                    {isDetail(order) !== ''
                      ? currencyFormat(order.orderDetails[0].PRICE)
                      : '0.00'}
                  </Text>
                  <Text strikeThrough color="gray.300">
                    Rp{' '}
                    {isDetail(order) !== ''
                      ? currencyFormat(order.orderDetails[0].DISCOUNT)
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
              {isDetail(order) !== '' ? order.orderDetails[0].QUANTITY : '0'}
            </Text>
          </Stack>
        </TouchableOpacity>
        <Stack px={5} my={2}>
          <HStack justifyContent="space-between" space={3}>
            <Icon name="truck" size={20} color="skyblue" />
            <Text color="skyblue">Started Shipping</Text>
            <Spacer />
            <Text color="gray.300">None</Text>
          </HStack>
        </Stack>
      </Box>
    );
  }
}

export default function ProcessingPage({navigation}) {
  const orders = useSelector(state => state.order.orders);
  const orderlist = useSelector(state => state.order.orderList);

  const init = useCallback(() => {
    let newArray = [];
    orderlist.map(item => {
      if (item.STATUSID === 4) {
        newArray.push(item);
      }
    });
    return newArray;
  }, [orderlist]);

  const renderItem = ({item}) => (
    <MyListItem order={orders[item.ORDERID]} navigation={navigation} />
  );

  return (
    <Box
      w={{
        base: '100%',
      }}
      pt={Platform.OS === 'ios' ? 20 : '22%'}>
      <FlatList
        data={init()}
        removeClippedSubviews
        maxToRenderPerBatch={5}
        initialNumToRender={5}
        renderItem={renderItem}
        keyExtractor={item => item.ORDERID}
      />
    </Box>
  );
}
