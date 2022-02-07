import React, {useState} from 'react';
import {
  Box,
  FlatList,
  Image,
  HStack,
  VStack,
  Text,
  Avatar,
  Spacer,
  Stack,
} from 'native-base';
import {TouchableOpacity, Platform, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
const data = require('../../api/reviews.json');

export default function ReviewsPage({navigation}) {
  const height = Platform.OS === 'ios' ? 50 : 80;
  const top = Platform.OS === 'ios' ? 50 : 15;

  const renderItemPhoto = ({item}) => (
    <Box w={'24%'} h={20} m={1 / 2}>
      <Image
        w="100%"
        h="100%"
        source={{
          uri: item.imgUrl,
        }}
        rounded={'lg'}
        alt="image"
        resizeMode="cover"
      />
    </Box>
  );

  const renderItem = ({item}) => (
    <Box>
      <Stack>
        <HStack space={2} justifyContent="space-between">
          <Avatar
            size="35px"
            source={{
              uri: item.avatarUrl,
            }}
          />
          <VStack justifyContent="space-between">
            <Text color="coolGray.800" fontSize={13} bold>
              {item.name}
            </Text>
            <Text color="gray.400" fontSize={12}>
              {item.date}
            </Text>
          </VStack>
          <Spacer />
          <Icon
            name="star"
            size={14}
            color={item.rating >= 1 ? '#ffd60a' : 'gray'}
          />
          <Icon
            name="star"
            size={14}
            color={item.rating >= 2 ? '#ffd60a' : 'gray'}
          />
          <Icon
            name="star"
            size={14}
            color={item.rating >= 3 ? '#ffd60a' : 'gray'}
          />
          <Icon
            name="star"
            size={14}
            color={item.rating >= 4 ? '#ffd60a' : 'gray'}
          />
          <Icon
            name="star"
            size={14}
            color={item.rating >= 5 ? '#ffd60a' : 'gray'}
          />
        </HStack>
      </Stack>
      <Stack mb={2} pl={10}>
        <Text fontSize={13}>{item.description}</Text>
      </Stack>
      <Stack mb={5}>
        <FlatList
          data={item.photos}
          numColumns={4}
          removeClippedSubviews
          maxToRenderPerBatch={5}
          initialNumToRender={5}
          renderItem={renderItemPhoto}
          keyExtractor={itemPhoto => itemPhoto.key}
        />
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
              Reviews
            </Text>
            <Text />
          </HStack>
        </Box>
      </Box>
      <Box px={5}>
        <FlatList
          data={data}
          removeClippedSubviews
          maxToRenderPerBatch={5}
          initialNumToRender={5}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
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
});
