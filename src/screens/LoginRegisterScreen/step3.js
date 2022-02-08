import React, {useState} from 'react';
import {Box, HStack, VStack, Text, ScrollView, Stack} from 'native-base';
import {
  TouchableOpacity,
  Platform,
  StyleSheet,
  TextInput,
  Image,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import {theme_colors} from '@util/color';

export default function Step3Screen({navigation}) {
  const height = Platform.OS === 'ios' ? 50 : 50;
  const top = Platform.OS === 'ios' ? 50 : 15;

  const [number, setNumber] = useState('');
  const [date, setDate] = useState('');

  return (
    <SafeAreaView style={[styles.container, {paddingTop: height}]}>
      <Box style={[styles.header, {height: height, top: top}]}>
        <Box flex={1}>
          <HStack px={5} alignItems="center" justifyContent="space-between">
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}>
              <Icon
                name="chevron-left"
                size={18}
                color={theme_colors.headerText}
              />
            </TouchableOpacity>
            <Text fontSize={20} bold color={theme_colors.primary} ml={8}>
              PediGo
            </Text>
            <HStack space={1 / 2}>
              <Text color={theme_colors.subText}>Step</Text>
              <Text color={theme_colors.primary}>3</Text>
              <Text color={theme_colors.subText}>of</Text>
              <Text color={theme_colors.subText}>4</Text>
            </HStack>
          </HStack>
        </Box>
      </Box>
      <ScrollView px={5}>
        <VStack space={1} mb={8}>
          <Text fontSize={20} bold color={theme_colors.headerText} mt={10}>
            Document
          </Text>
          <Text color={theme_colors.subText}>
            Please provide us with relevant document details and capturing
          </Text>
        </VStack>
        <Stack p={5}>
          <Text
            fontWeight="500"
            fontSize={14}
            color={theme_colors.headerText}
            mb={4}>
            National ID card
          </Text>
          <VStack space={1} my={2}>
            <Text
              fontWeight="400"
              fontSize={12}
              color={theme_colors.headerText}>
              Nuban number
            </Text>
            <TextInput
              placeholder="e,g, 2345657584"
              onChangeText={setNumber}
              value={number}
              onBlur={() => {}}
              style={styles.inputStyle}
            />
          </VStack>
          <VStack space={1} my={2}>
            <Text
              fontWeight="400"
              fontSize={12}
              color={theme_colors.headerText}>
              Issued date
            </Text>
            <TextInput
              placeholder="DD/MM/YYYY"
              onChangeText={setDate}
              value={date}
              onBlur={() => {}}
              style={styles.inputStyle}
            />
          </VStack>
          <HStack justifyContent="flex-end" mt={2}>
            <TouchableOpacity style={[styles.button, {width: '50%'}]}>
              <HStack
                alignItems="center"
                justifyContent="center"
                space={2}
                py={3}>
                <Image
                  style={styles.imageStyle}
                  source={require('../../assets/img/plus.png')}
                />
                <Text color={theme_colors.subText}>Upload a file</Text>
              </HStack>
            </TouchableOpacity>
          </HStack>
        </Stack>
        <Stack p={5}>
          <Text
            fontWeight="500"
            fontSize={14}
            color={theme_colors.headerText}
            mb={2}>
            Profile photo
          </Text>
          <Text color={theme_colors.subText}>
            Please provide us with a clear potrait picture of yourself. Picture
            should contain your face only
          </Text>
          <HStack justifyContent="flex-end" mt={4}>
            <TouchableOpacity style={[styles.button, {width: '50%'}]}>
              <HStack
                alignItems="center"
                justifyContent="center"
                space={2}
                py={3}>
                <Image
                  style={styles.imageStyle}
                  source={require('../../assets/img/plus.png')}
                />
                <Text color={theme_colors.subText}>Upload a file</Text>
              </HStack>
            </TouchableOpacity>
          </HStack>
        </Stack>
        <HStack justifyContent="center" alignItems="center" my={2}>
          <TouchableOpacity
            onPress={() => {}}
            style={[styles.button, {backgroundColor: theme_colors.primary}]}>
            <HStack justifyContent="center" py={3}>
              <Text color="white" bold>
                Next
              </Text>
            </HStack>
          </TouchableOpacity>
        </HStack>
      </ScrollView>
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
  imageStyle: {
    width: 18,
    height: 18,
    resizeMode: 'cover',
  },
  inputStyle: {
    padding: 10,
    height: 40,
    borderColor: theme_colors.third,
    borderWidth: 1,
    borderRadius: 5,
  },
  inputStyleError: {
    padding: 10,
    height: 40,
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 5,
  },
  button: {
    width: '100%',
    borderRadius: 5,
    borderColor: theme_colors.primary,
    borderWidth: 1,
  },
});
