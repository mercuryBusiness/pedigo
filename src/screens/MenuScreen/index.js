import React, {useEffect} from 'react';
import {View, Platform, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {
  Box,
  HStack,
  VStack,
  Text,
  Spacer,
  Center,
  Button,
  Divider,
  Pressable,
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from '../HomeScreen';
import StackScreen from '../OrderScreen';
import WishListScreen from '../WishList/index';
import DraftScreen from '../DraftScreen';
import ShoppingBagScreen from '../Shop/shoppingBag';

import {useDispatch} from 'react-redux';
import {
  getOrderByCustomerId,
  getOrderById,
  getProductById,
} from '../../api/api';
import {setOrders, setProduct, setOrderList} from '../../redux/order';

function NavScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

function CustomDrawerContent(props) {
  const arrIcon = ['', 'file', 'shopping-bag', 'list', 'bookmark', 'language'];
  const arrTitle = [
    '',
    'Drafts',
    'Shopping Bag',
    'Orders',
    'Wishlist',
    'Language',
  ];

  return (
    <View {...props} safeArea>
      <VStack space="6" my="2" mx="1">
        {Platform.OS === 'ios' && <Box w="100%" h={50} />}
        <Box px="4" justifyContent="center" alignItems="center">
          <Text bold>Menu</Text>
        </Box>
        <VStack divider={<Divider />} space="4">
          <VStack>
            {props.state.routeNames.map(
              (name, index) =>
                index != 0 && (
                  <Pressable
                    key={index}
                    px="5"
                    py="3"
                    rounded="md"
                    bg={
                      index === props.state.index
                        ? 'rgba(6, 182, 212, 0.1)'
                        : 'transparent'
                    }
                    onPress={event => {
                      props.navigation.navigate(name);
                    }}>
                    <HStack space="3" alignItems="center">
                      <Icon name={arrIcon[index]} size={14} />
                      <Text
                        fontWeight="500"
                        color={
                          index === props.state.index
                            ? 'primary.500'
                            : 'gray.700'
                        }>
                        {arrTitle[index]}
                      </Text>
                      <Spacer />
                      <Icon name="chevron-right" />
                    </HStack>
                  </Pressable>
                ),
            )}
            <Pressable
              px="5"
              py="3"
              rounded="md"
              bg={'transparent'}
              onPress={() => {}}>
              <HStack space="3" alignItems="center">
                <Icon name="times-circle" size={14} color={'red'} />
                <Text fontWeight="500" color={'red.400'}>
                  Log Out
                </Text>
                <Spacer />
                <Icon name="chevron-right" />
              </HStack>
            </Pressable>
          </VStack>
        </VStack>
      </VStack>
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function MenuScreen() {
  const dispatch = useDispatch();

  const getOrder = async orderid => {
    let res = await getOrderById({orderid: orderid, languageid: 3});
    dispatch(setOrders(res));

    if (res.orderDetails.length > 0) {
      res.orderDetails.map(async item => {
        const productid = item.PRODUCTID;
        const storeid = res.order.STOREID;
        const res2 = await getProductById({
          productid: productid,
          storeid: storeid,
        });
        console.log('^^^^^^^^^^-----', res2);
        dispatch(setProduct(res2.PRODUCT));
      });
    }
  };

  const getAllOrder = async () => {
    const res = await getOrderByCustomerId({customerid: 3});
    // console.log('-->', res.rows);
    const data = res.rows;

    dispatch(setOrderList(data));

    data.map(item => {
      getOrder(item.ORDERID);
    });
  };

  useEffect(() => {
    getAllOrder();
  });

  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={props => <CustomDrawerContent {...props} />}>
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Drawer.Screen
          name="Draft"
          component={DraftScreen}
          options={{headerShown: false}}
        />
        <Drawer.Screen
          name="Shopping"
          component={ShoppingBagScreen}
          options={{headerShown: false}}
        />
        <Drawer.Screen
          name="Order"
          component={StackScreen}
          options={{headerShown: false}}
        />
        <Drawer.Screen
          name="Wishlist"
          component={WishListScreen}
          options={{headerShown: false}}
        />
        <Drawer.Screen name="Language" component={NavScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
