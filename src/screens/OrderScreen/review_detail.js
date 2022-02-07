import React, {useState} from 'react';
import {
  Box,
  FlatList,
  Image,
  HStack,
  VStack,
  Text,
  TextArea,
  Spacer,
  Center,
  Stack,
  Circle,
  ZStack,
} from 'native-base';
import {
  TouchableOpacity,
  Platform,
  Alert,
  Dimensions,
  StyleSheet,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useSelector} from 'react-redux';

const screen = Dimensions.get('screen');

export default function ReviewDetailPage({route, navigation}) {
  const {itemid} = route.params;
  const orders = useSelector(state => state.order.orders);

  const height = Platform.OS === 'ios' ? 50 : 80;
  const top = Platform.OS === 'ios' ? 50 : 15;
  const [rating, setRating] = useState(0);
  const [photos, setPhotos] = useState([]);
  const [elements, setElements] = useState(photos);

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

  const chooseFile = type => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
    };
    launchImageLibrary(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        Alert.alert('User cancelled camera picker');
        return;
      } else if (response.errorCode === 'camera_unavailable') {
        Alert.alert('Camera not available on device');
        return;
      } else if (response.errorCode === 'permission') {
        Alert.alert('Permission not satisfied');
        return;
      } else if (response.errorCode === 'others') {
        Alert.alert(response.errorMessage);
        return;
      }
      console.log('uri -> ', response.assets[0].uri);
      console.log('width -> ', response.assets[0].width);
      console.log('height -> ', response.assets[0].height);
      console.log('fileSize -> ', response.assets[0].fileSize);
      console.log('type -> ', response.assets[0].type);
      console.log('fileName -> ', response.assets[0].fileName);

      let newArray1 = [...photos, response.assets[0]];
      let newArray2 = [...photos, response.assets[0], 'Button'];
      setElements(newArray2);
      setPhotos(newArray1);
    });
  };

  const removePhoto = pos => {
    let filterArray1 = photos.filter((item, index) => index !== pos);
    let filterArray2 = [...filterArray1, 'Button'];
    setElements(filterArray2);
    setPhotos(filterArray1);
  };

  const renderItem = ({item, index}) =>
    item === 'Button' ? (
      <Box w={12} my={2} alignItems="center" justifyContent="center">
        <TouchableOpacity
          onPress={() => chooseFile('photo')}
          style={styles.iconButton}>
          <Icon name="camera" size={14} color="skyblue" />
        </TouchableOpacity>
      </Box>
    ) : (
      <ZStack w={'25%'} h={24} mr={5} my={2}>
        <Image
          w={'100%'}
          h={'100%'}
          resizeMode="cover"
          rounded="lg"
          source={{
            uri: item.uri,
          }}
          alt={item.fileName}
        />
        <TouchableOpacity
          onPress={() => removePhoto(index)}
          style={styles.removeButton}>
          <Icon name="times-circle" size={18} color="red" />
        </TouchableOpacity>
      </ZStack>
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
              Review
            </Text>
            <Text />
          </HStack>
        </Box>
      </Box>
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
      <Stack py={10}>
        <HStack justifyContent="center" space={6}>
          <TouchableOpacity onPress={() => setRating(1)}>
            <Icon
              name="star"
              size={30}
              color={rating >= 1 ? '#ffd60a' : 'gray'}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setRating(2)}>
            <Icon
              name="star"
              size={30}
              color={rating >= 2 ? '#ffd60a' : 'gray'}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setRating(3)}>
            <Icon
              name="star"
              size={30}
              color={rating >= 3 ? '#ffd60a' : 'gray'}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setRating(4)}>
            <Icon
              name="star"
              size={30}
              color={rating >= 4 ? '#ffd60a' : 'gray'}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setRating(5)}>
            <Icon
              name="star"
              size={30}
              color={rating >= 5 ? '#ffd60a' : 'gray'}
            />
          </TouchableOpacity>
        </HStack>
        <TextArea
          aria-label="t1"
          numberOfLines={4}
          placeholder="Type Here"
          isInvalid
          _dark={{
            placeholderTextColor: 'gray.300',
          }}
          m={10}
        />
        {photos.length > 0 && (
          <Box px={5} h={screen.height / 3}>
            <FlatList
              data={elements}
              numColumns={3}
              renderItem={renderItem}
              keyExtractor={item => item.fileName}
            />
          </Box>
        )}
        {photos.length === 0 && (
          <Box px={5} mb={5}>
            <TouchableOpacity
              onPress={() => chooseFile('photo')}
              style={styles.whiteButton}>
              <HStack justifyContent="center" space={3} py={4}>
                <Icon
                  name="camera"
                  size={14}
                  style={{marginTop: 4}}
                  color="skyblue"
                />
                <Text bold>Add Photo</Text>
              </HStack>
            </TouchableOpacity>
          </Box>
        )}
      </Stack>
      <Box px={5} style={styles.bottomArea}>
        <TouchableOpacity onPress={() => {}} style={styles.blueButton}>
          <HStack justifyContent="center" py={4}>
            <Text color="white" bold>
              Submit
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
    bottom: 10,
    height: 80,
    justifyContent: 'center',
  },
  whiteButton: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
  },
  blueButton: {
    backgroundColor: 'skyblue',
    borderRadius: 10,
  },
  removeButton: {
    alignSelf: 'flex-end',
    left: 5,
    bottom: 5,
    backgroundColor: 'white',
    borderRadius: 100,
  },
  iconButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
