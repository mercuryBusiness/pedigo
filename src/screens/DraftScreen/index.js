import React, {useState} from 'react';
import {
  Box,
  FlatList,
  Image,
  HStack,
  Text,
  AspectRatio,
  Spacer,
  Stack,
} from 'native-base';
import {TouchableOpacity, Platform, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
const data = require('../../api/draft.json');

export default function DraftScreen({navigation}) {
  const height = Platform.OS === 'ios' ? 50 : 50;
  const top = Platform.OS === 'ios' ? 50 : 15;

  const renderItem = ({item}) => (
    <Box w={'49%'} m={1 / 2} mb={3} overflow="hidden">
      <Stack>
        <AspectRatio w="100%">
          <Image
            rounded="lg"
            source={{
              uri: item.imgUrl,
            }}
            alt={item.name}
          />
        </AspectRatio>
        <HStack p={2} alignItems="center" justifyContent="space-between">
          <Text>{item.date}</Text>
          <Spacer />
          <TouchableOpacity>
            <Icon name="trash" size={18} color="red" />
          </TouchableOpacity>
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
                navigation.navigate('Home');
              }}>
              <Icon name="chevron-left" size={18} />
            </TouchableOpacity>
            <Text mr={5} bold>
              Drafts
            </Text>
            <Text />
          </HStack>
        </Box>
      </Box>
      <Box px={1 / 2}>
        <FlatList
          data={data}
          numColumns={2}
          removeClippedSubviews
          maxToRenderPerBatch={6}
          initialNumToRender={6}
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
