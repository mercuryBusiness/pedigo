import React, {useState} from 'react';
import {
  Box,
  Avatar,
  FlatList,
  Image,
  HStack,
  ZStack,
  Text,
  Spacer,
  Stack,
  Circle,
  AlertDialog,
  Center,
  Button,
} from 'native-base';
import {TouchableOpacity, Platform, StyleSheet, Dimensions} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
const data = require('../../api/explore.json');

export default function CollectionScreen({navigation}) {
  const screen = Dimensions.get('screen');
  const height = Platform.OS === 'ios' ? 50 : 50;
  const top = Platform.OS === 'ios' ? 50 : 15;

  const cancelRef = React.useRef(null);
  const [isOpen, setIsOpen] = React.useState(false);
  const onClose = () => setIsOpen(false);
  const onOpen = () => setIsOpen(true);

  const initial = () => {
    let newData = [];
    for (let index = 0; index < data.length; index++) {
      let object = {};
      object.id = data[index].id;
      object.fullName = data[index].fullName;
      object.timeStamp = data[index].timeStamp;
      object.recentText = data[index].recentText;
      object.description = data[index].description;
      object.avatarUrl = data[index].avatarUrl;
      object.state = false;
      newData.push(object);
    }
    return newData;
  };

  const [isEdit, setEdit] = useState(false);
  const [isDel, setDel] = useState(false);
  const [newData, setNewData] = useState(initial());

  const checking = id => {
    let newArray = [];
    let count = 0;
    newData.map(item => {
      let object = {};
      object.id = item.id;
      object.fullName = item.fullName;
      object.timeStamp = item.timeStamp;
      object.recentText = item.recentText;
      object.description = item.description;
      object.avatarUrl = item.avatarUrl;
      if (id === item.id) {
        object.state = !item.state;
      } else {
        object.state = item.state;
      }

      if (object.state) {
        count++;
      }
      newArray.push(object);
    });
    setNewData(newArray);
    count > 0 ? setDel(true) : setDel(false);
  };

  const deleteProducts = () => {
    let newArray = [];
    newData.map(item => {
      if (!item.state) {
        let object = {};
        object.id = item.id;
        object.fullName = item.fullName;
        object.timeStamp = item.timeStamp;
        object.recentText = item.recentText;
        object.description = item.description;
        object.avatarUrl = item.avatarUrl;
        object.state = item.state;

        newArray.push(object);
      }
    });
    setNewData(newArray);
    setDel(false);
  };

  const renderItem = ({item}) => (
    <Box w={'49%'} m={1 / 2} mb={3} overflow="hidden">
      <Stack>
        <ZStack w={'100%'} h={32}>
          <Image
            w={'100%'}
            h={'100%'}
            rounded="lg"
            source={{
              uri: 'https://www.holidify.com/images/foodImages/8.jpg',
            }}
            alt={'image'}
          />
          <TouchableOpacity
            onPress={() => {
              checking(item.id);
            }}
            style={styles.checkButton}>
            {isEdit && !item.state && <Circle size={4} bg="white" />}
            {isEdit && item.state && (
              <Icon name="check-circle" size={18} color="skyblue" />
            )}
          </TouchableOpacity>
        </ZStack>
      </Stack>
      <Stack p="2" space={3}>
        <Text fontWeight="600" fontSize="14">
          {item.description.length > 40
            ? item.description.substring(0, 48) + '...'
            : item.description}
        </Text>
        <HStack space={1} justifyContent="space-between" alignItems="center">
          <Avatar
            size="20px"
            source={{
              uri: item.avatarUrl,
            }}
          />
          <Text
            _dark={{
              color: 'warmGray.50',
            }}
            color="coolGray.600">
            {item.fullName}
          </Text>
          <Spacer />
          <Icon name="heart" size={20} color={'red'} />
          <Text
            fontSize="xs"
            _dark={{
              color: 'warmGray.50',
            }}
            color="coolGray.800"
            alignSelf="flex-start">
            5K
          </Text>
        </HStack>
      </Stack>
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
            <Text mr={5} bold>
              #winterfall
            </Text>
            <TouchableOpacity
              onPress={() => {
                setEdit(true);
              }}>
              {!isEdit && <Icon name="list-alt" size={18} />}
            </TouchableOpacity>
          </HStack>
        </Box>
      </Box>
      <Box px={1 / 2}>
        <FlatList
          data={newData}
          numColumns={2}
          removeClippedSubviews
          maxToRenderPerBatch={6}
          initialNumToRender={6}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </Box>
      {isDel && (
        <Box style={styles.trashBox}>
          <TouchableOpacity onPress={() => onOpen()}>
            <Circle size={12} bg="red.600">
              <Icon name="trash" color="white" size={20} />
            </Circle>
          </TouchableOpacity>
        </Box>
      )}
      <AlertDialog
        leastDestructiveRef={cancelRef}
        isOpen={isOpen}
        onClose={onClose}>
        <AlertDialog.Content w={screen.width * 0.9}>
          <AlertDialog.Body p={6}>
            <Center _text={{color: 'coolGray.800', fontWeight: '600'}}>
              Are you sure to delete
            </Center>
            <Center _text={{color: 'coolGray.800', fontWeight: '600'}}>
              this draft?
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
                    deleteProducts();
                  }}>
                  Delete
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
  checkButton: {
    alignSelf: 'flex-end',
    right: 10,
    top: 10,
    backgroundColor: 'white',
    borderRadius: 100,
  },
  trashBox: {
    position: 'absolute',
    right: 20,
    bottom: Platform.OS === 'ios' ? 30 : 30,
    zIndex: 1,
  },
});
