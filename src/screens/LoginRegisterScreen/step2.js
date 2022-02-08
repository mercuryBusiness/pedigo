import React, {useState} from 'react';
import {
  Box,
  HStack,
  VStack,
  Text,
  ScrollView,
  Select,
  CheckIcon,
  Checkbox,
  Stack,
} from 'native-base';
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

export default function Step2Screen({navigation}) {
  const height = Platform.OS === 'ios' ? 50 : 50;
  const top = Platform.OS === 'ios' ? 50 : 15;

  const [checked, setChecked] = useState(false);
  const [vechilemanufacturer, setVechilemanufacturer] = useState('');
  const [vechileType, setVechileType] = useState('');
  const [license, setLicense] = useState('');
  const [address, setAddress] = useState('');

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
              <Text color={theme_colors.primary}>2</Text>
              <Text color={theme_colors.subText}>of</Text>
              <Text color={theme_colors.subText}>4</Text>
            </HStack>
          </HStack>
        </Box>
      </Box>
      <ScrollView px={5}>
        <VStack space={1} mb={8}>
          <Text fontSize={20} bold color={theme_colors.headerText} mt={10}>
            Vechile Details
          </Text>
          <Text color={theme_colors.subText}>
            Please provide us with your vechile details for proper arrangement
          </Text>
        </VStack>
        <VStack space={1} my={2}>
          <Checkbox
            value="success"
            colorScheme="success"
            onChange={() => {
              setChecked(!checked);
            }}>
            I have a vechile to use for delivery
          </Checkbox>
        </VStack>
        {checked && (
          <VStack space={1} my={2}>
            <Text
              fontWeight="500"
              fontSize={12}
              color={theme_colors.headerText}>
              Vechile manufacturer
            </Text>
            <TextInput
              placeholder="e,g, Yamaha 314"
              onChangeText={setVechilemanufacturer}
              value={vechilemanufacturer}
              onBlur={() => {}}
              style={styles.inputStyle}
            />
          </VStack>
        )}
        {checked && (
          <VStack space={1} my={2}>
            <Text
              fontWeight="500"
              fontSize={12}
              color={theme_colors.headerText}>
              Vechile type
            </Text>
            <Select
              selectedValue={vechileType}
              accessibilityLabel="Choose Type"
              placeholder="Choose Type"
              _selectedItem={{
                _text: {color: 'white'},
                bg: theme_colors.primary,
                endIcon: <CheckIcon size="5" color="white" />,
              }}
              onValueChange={itemValue => setVechileType(itemValue)}>
              <Select.Item label="Motorbike" value="motorbike" />
              <Select.Item label="Truck" value="truck" />
              <Select.Item label="bus" value="bus" />
            </Select>
          </VStack>
        )}
        {checked && (
          <VStack space={1} my={2}>
            <Text
              fontWeight="500"
              fontSize={12}
              color={theme_colors.headerText}>
              License plate
            </Text>
            <TextInput
              placeholder="e.g, BG 336 CB"
              onChangeText={setLicense}
              value={license}
              onBlur={() => {}}
              style={styles.inputStyle}
            />
          </VStack>
        )}
        {checked && (
          <VStack space={1} my={2}>
            <Text
              fontWeight="500"
              fontSize={12}
              color={theme_colors.headerText}>
              Address
            </Text>
            <Select
              selectedValue={address}
              accessibilityLabel="Choose Address"
              placeholder="Choose Address"
              _selectedItem={{
                _text: {color: 'white'},
                bg: theme_colors.primary,
                endIcon: <CheckIcon size="5" color="white" />,
              }}
              onValueChange={itemValue => setAddress(itemValue)}>
              <Select.Item label="Calabar" value="calabar" />
              <Select.Item label="Meihen" value="meihen" />
              <Select.Item label="Baboi" value="baboi" />
            </Select>
          </VStack>
        )}
        <HStack justifyContent="center" alignItems="center" mt={20}>
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
    left: -50,
    width: '100%',
    height: '100%',
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
