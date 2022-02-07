import React, {useEffect, useState, useCallback, PureComponent} from 'react';
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
import {TouchableOpacity, Platform, StyleSheet} from 'react-native';
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
        <Stack px={5} mb={1}>
          <HStack justifyContent="space-between">
            <Text>Remark</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Order_Shipped_Detail', {
                  itemid: order.order.ORDERID,
                });
              }}>
              <Icon name="chevron-right" size={12} />
            </TouchableOpacity>
          </HStack>
        </Stack>
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
        <Stack px={5} my={2}>
          <HStack justifyContent="space-between">
            <Text color="gray.400" bold>
              Order No.{' '}
            </Text>
            <Text color="gray.400" bold>
              {isDetail(order) !== '' ? order.orderDetails[0].SKU : ''}
            </Text>
            <Spacer />
            <Text color="gray.300">None</Text>
          </HStack>
        </Stack>
        <Stack px={5} mb={5}>
          <HStack justifyContent="flex-end" alignItems="center" space={2}>
            <Icon name="info-circle" size={20} />
            <TouchableOpacity onPress={() => {}} style={styles.payButton}>
              <Text color="white" px={5} py={1} fontSize={12}>
                Received
              </Text>
            </TouchableOpacity>
          </HStack>
        </Stack>
      </Box>
    );
  }
}

export default function ShippedPage({navigation}) {
  const orders = useSelector(state => state.order.orders);
  const orderlist = useSelector(state => state.order.orderList);

  const init = useCallback(() => {
    let newArray = [];
    orderlist.map(item => {
      if (item.STATUSID === 5) {
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

const styles = StyleSheet.create({
  payButton: {
    backgroundColor: 'skyblue',
    borderRadius: 50,
  },
});
