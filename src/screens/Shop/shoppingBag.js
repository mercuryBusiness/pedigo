import React from 'react';
import {
  Box,
  FlatList,
  Image,
  HStack,
  VStack,
  Text,
  Center,
  Circle,
  Spacer,
  Stack,
  Pressable,
  useToast,
  AlertDialog,
  Button,
} from 'native-base';
import {TouchableOpacity, Platform, StyleSheet, Dimensions} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {SwipeListView} from 'react-native-swipe-list-view';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function ShoppingBagScreen({navigation}) {
  const height = Platform.OS === 'ios' ? 50 : 80;
  const top = Platform.OS === 'ios' ? 50 : 15;
  const screen = Dimensions.get('screen');

  const toast = useToast();
  const cancelRef = React.useRef(null);
  const [rowMap, setRowMap] = React.useState([]);
  const [rowKey, setRowKey] = React.useState(0);
  const [isOpen, setIsOpen] = React.useState(false);
  const onClose = () => setIsOpen(false);
  const onOpen = () => setIsOpen(true);

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

  const [listData, setListData] = React.useState(data);

  const initTotal = () => {
    let newtotal = 0;
    listData.map(item => {
      newtotal += item.price * item.count;
    });
    return newtotal;
  };

  const [subtotal, setSubtotal] = React.useState(initTotal());

  const increment = id => {
    let newData = [];
    let newtotal = 0;

    listData.map(item => {
      let object = {};
      object.id = item.id;
      object.imgUrl = item.imgUrl;
      object.description = item.description;
      object.price = item.price;
      object.price_retail = item.price_retail;
      if (item.id === id) {
        object.count = item.count + 1;
      } else {
        object.count = item.count;
      }
      newData.push(object);
      newtotal += object.price * object.count;
    });

    setListData(newData);
    setSubtotal(newtotal);
  };

  const decrement = id => {
    let newData = [];
    let newtotal = 0;

    listData.map(item => {
      let object = {};
      object.id = item.id;
      object.imgUrl = item.imgUrl;
      object.description = item.description;
      object.price = item.price;
      object.price_retail = item.price_retail;
      if (item.id === id) {
        object.count = item.count > 0 ? item.count - 1 : item.count;
      } else {
        object.count = item.count;
      }
      newData.push(object);
      newtotal += object.price * object.count;
    });

    setListData(newData);
    setSubtotal(newtotal);
  };

  const closeRow = (rowMap, rowKey) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };

  const deleteRow = (rowMap, rowKey) => {
    closeRow(rowMap, rowKey);
    const newData = [...listData];
    const prevIndex = listData.findIndex(item => item.key === rowKey);

    newData.splice(prevIndex, 1);
    let newtotal = 0;

    newData.map(item => {
      newtotal += item.price * item.count;
    });

    setListData(newData);
    setSubtotal(newtotal);
  };

  const onRowDidOpen = rowKey => {
    console.log('This row opened', rowKey);
  };

  const renderItem = ({item}) => (
    <Box w={'100%'} mb={5} pr={5} overflow="hidden" bg={'white'}>
      <Stack space={3}>
        <HStack space={3}>
          <Image
            w={20}
            h={32}
            resizeMode="cover"
            rounded="xl"
            source={{
              uri: item.imgUrl,
            }}
            alt="image"
          />
          <VStack w="60%" justifyContent="space-between" space={2}>
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
          <TouchableOpacity
            onPress={() => {
              toast.show({
                render: () => {
                  return (
                    <Box
                      bg="black"
                      opacity={0.8}
                      w={screen.width * 0.9}
                      px="5"
                      py="3"
                      rounded="50"
                      mb={5}>
                      <HStack space={3}>
                        <Icon name="check-circle" size={20} color="white" />
                        <Text color="white">Added to your Wishlist</Text>
                      </HStack>
                    </Box>
                  );
                },
              });
            }}>
            <Icon name="bookmark" size={14} />
          </TouchableOpacity>
        </HStack>
        <HStack
          space={3}
          position="absolute"
          right={0}
          bottom={0}
          justifyContent="space-between"
          alignItems="center">
          <TouchableOpacity onPress={() => decrement(item.id)}>
            <Circle size={5} bg="gray.600">
              <Icon name="minus" color="white" />
            </Circle>
          </TouchableOpacity>
          <Text>{item.count}</Text>
          <TouchableOpacity onPress={() => increment(item.id)}>
            <Circle size={5} bg="skyblue">
              <Icon name="plus" color="white" />
            </Circle>
          </TouchableOpacity>
        </HStack>
      </Stack>
    </Box>
  );

  const renderHiddenItem = (data, rowMap) => (
    <HStack flex="1" pl="2" mb={5} justifyContent="flex-end">
      <Pressable
        w="90"
        cursor="pointer"
        bg="red.500"
        justifyContent="center"
        onPress={() => {
          onOpen();
          setRowMap(rowMap);
          setRowKey(data.item.id);
        }}
        _pressed={{
          opacity: 0.5,
        }}>
        <VStack alignItems="center" space={2}>
          <Icon name="trash" size={20} color="white" />
        </VStack>
      </Pressable>
    </HStack>
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
            <Text mr={5} bold>
              Shopping Bag
            </Text>
            <Icon name="bookmark" size={20} />
          </HStack>
        </Box>
      </Box>
      <Box pl={5}>
        <SwipeListView
          data={listData}
          renderItem={renderItem}
          renderHiddenItem={renderHiddenItem}
          rightOpenValue={-90}
          onRowDidOpen={onRowDidOpen}
          keyExtractor={item => item.id}
        />
      </Box>
      <Box px={5} style={[styles.bottomArea, {bottom: 20}]}>
        <HStack mb={1} justifyContent="space-between" alignItems="center">
          <Text bold>Subtotal</Text>
          <Text bold>Rp. {currencyFormat(subtotal)}</Text>
        </HStack>
        <HStack justifyContent="space-between" alignItems="center">
          <TouchableOpacity onPress={() => {}} style={styles.blueButton}>
            <HStack justifyContent="center" py={1}>
              <Text color="white" bold>
                Checkout
              </Text>
            </HStack>
          </TouchableOpacity>
        </HStack>
      </Box>
      <AlertDialog
        leastDestructiveRef={cancelRef}
        isOpen={isOpen}
        onClose={onClose}>
        <AlertDialog.Content w={screen.width * 0.9}>
          <AlertDialog.Body p={6}>
            <Center _text={{color: 'coolGray.800', fontWeight: '600'}}>
              Are you sure you want
            </Center>
            <Center _text={{color: 'coolGray.800', fontWeight: '600'}}>
              to delete this product?
            </Center>
            <Center mt={3}>
              <Button.Group space={2} my={3}>
                <Button
                  w={24}
                  variant="unstyled"
                  _text={{color: 'coolGray.500'}}
                  onPress={onClose}
                  ref={cancelRef}>
                  Cancel
                </Button>
                <Button
                  w={24}
                  colorScheme="info"
                  onPress={() => {
                    onClose();
                    deleteRow(rowMap, rowKey);
                  }}>
                  Confirm
                </Button>
              </Button.Group>
            </Center>
          </AlertDialog.Body>
        </AlertDialog.Content>
      </AlertDialog>
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
  blueButton: {
    width: '100%',
    borderRadius: 5,
    backgroundColor: 'skyblue',
  },
});
