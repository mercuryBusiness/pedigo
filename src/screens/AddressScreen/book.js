import React from 'react';
import {Box, HStack, VStack, Text, Spacer, Stack, Pressable} from 'native-base';
import {TouchableOpacity, Platform, StyleSheet, Dimensions} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {SwipeListView} from 'react-native-swipe-list-view';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function AddressBookScreen({navigation, route}) {
  const height = Platform.OS === 'ios' ? 50 : 50;
  const top = Platform.OS === 'ios' ? 50 : 15;
  const screen = Dimensions.get('screen');

  const data = [];
  React.useEffect(() => {
    if (route.params?.post) {
      const newData = [...listData, route.params.post];
      setListData(newData);
    }
  }, [route.params?.post]);

  const [listData, setListData] = React.useState(data);

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

    setListData(newData);
  };

  const onRowDidOpen = rowKey => {
    console.log('This row opened', rowKey);
  };

  const renderItem = ({item}) => (
    <Box
      w={'100%'}
      h={32}
      pr={5}
      overflow="hidden"
      justifyContent="center"
      bg={'white'}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate({
            name: 'Order_Confirm_List',
            params: {
              post: {
                firstName: item.firstName,
                lastName: item.lastName,
                phoneNumber: item.phoneNumber,
                city: item.city,
                code: item.code,
                address1: item.address1,
                address2: item.address2,
              },
            },
            merge: true,
          });
        }}>
        <HStack alignItems="center">
          <VStack w="60%" justifyContent="space-between">
            <HStack>
              <Text mr={1} bold>
                {item.firstName}
              </Text>
              <Text mr={2} bold>
                {item.lastName}
              </Text>
              <Text color="gray.300">{item.phoneNumber}</Text>
            </HStack>
            <Text color="gray.400">{item.address1}</Text>
            <Text color="gray.400">{item.city}</Text>
          </VStack>
          <Spacer />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Address_Editor', {edit: 1, user: item});
            }}>
            <Icon name="pencil" size={14} />
          </TouchableOpacity>
        </HStack>
      </TouchableOpacity>
    </Box>
  );

  const renderHiddenItem = (param, rowMap) => (
    <Stack>
      <HStack pl="2" mb={5} justifyContent="flex-end">
        <Pressable
          w="90"
          h={32}
          cursor="pointer"
          bg="red.500"
          justifyContent="center"
          onPress={() => {
            deleteRow(rowMap, param.item.id);
          }}
          _pressed={{
            opacity: 0.5,
          }}>
          <VStack alignItems="center" space={2}>
            <Icon name="trash" size={20} color="white" />
          </VStack>
        </Pressable>
      </HStack>
    </Stack>
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
            <Text mr={4} bold>
              Address Book
            </Text>
            <Text />
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
      <Box px={5} style={styles.bottomArea}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Address_Editor', {edit: 0});
          }}
          style={styles.blueButton}>
          <HStack justifyContent="center" py={4}>
            <Text color="white" bold>
              Add new address
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
    justifyContent: 'center',
  },
  blueButton: {
    backgroundColor: 'skyblue',
    borderRadius: 10,
  },
});
