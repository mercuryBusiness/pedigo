import React, {useState} from 'react';
import {
  Box,
  HStack,
  VStack,
  Text,
  ScrollView,
  Select,
  CheckIcon,
  Stack,
} from 'native-base';
import {TouchableOpacity, Platform, StyleSheet, TextInput} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import {theme_colors} from '@util/color';

export default function Step4Screen({navigation}) {
  const height = Platform.OS === 'ios' ? 50 : 50;
  const top = Platform.OS === 'ios' ? 50 : 15;

  const [bankholderName, setBankholderName] = useState('');
  const [accNumber, setAccNumber] = useState('');
  const [bankName, setBankName] = useState('');

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
              <Text color={theme_colors.primary}>4</Text>
              <Text color={theme_colors.subText}>of</Text>
              <Text color={theme_colors.subText}>4</Text>
            </HStack>
          </HStack>
        </Box>
      </Box>
      <ScrollView px={5}>
        <VStack space={1} mb={8}>
          <Text fontSize={20} bold color={theme_colors.headerText} mt={10}>
            Payment details
          </Text>
          <Text color={theme_colors.subText}>
            Please provide us with your bank details for quick payment
          </Text>
        </VStack>
        <VStack space={1} my={2}>
          <Text fontWeight="500" fontSize={12} color={theme_colors.headerText}>
            Bank holder name
          </Text>
          <TextInput
            placeholder="e.g, John Doe"
            onChangeText={setBankholderName}
            value={bankholderName}
            onBlur={() => {}}
            style={styles.inputStyle}
          />
        </VStack>
        <VStack space={1} my={2}>
          <Text fontWeight="500" fontSize={12} color={theme_colors.headerText}>
            Account number
          </Text>
          <TextInput
            placeholder="e.g, 0561416996"
            onChangeText={setAccNumber}
            value={accNumber}
            onBlur={() => {}}
            style={styles.inputStyle}
          />
        </VStack>
        <VStack space={1} my={2}>
          <Text fontWeight="500" fontSize={12} color={theme_colors.headerText}>
            Bank name
          </Text>
          <Select
            selectedValue={bankName}
            accessibilityLabel="Choose Bank Name"
            placeholder="e.g, GT bank"
            _selectedItem={{
              _text: {color: 'white'},
              bg: theme_colors.primary,
              endIcon: <CheckIcon size="5" color="white" />,
            }}
            onValueChange={itemValue => setBankName(itemValue)}>
            <Select.Item label="GT bank" value="gtbank" />
            <Select.Item label="KT bank" value="ktbank" />
          </Select>
        </VStack>
        <HStack justifyContent="center" alignItems="center" mt={20}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('step3');
            }}
            style={[styles.button, {backgroundColor: theme_colors.primary}]}>
            <HStack justifyContent="center" py={3}>
              <Text color="white" bold>
                Confirm
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
