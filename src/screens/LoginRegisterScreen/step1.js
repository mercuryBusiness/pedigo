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

export default function Step1Screen({navigation}) {
  const height = Platform.OS === 'ios' ? 50 : 50;
  const top = Platform.OS === 'ios' ? 50 : 15;

  const [firstName, setFirstName] = useState('');
  const [firstNameState, setFirstNameState] = useState(false);
  const [lastName, setLastName] = useState('');
  const [lastNameState, setLastNameState] = useState(false);
  const [dob, setDOB] = useState('');
  const [email, setEmail] = useState('');
  const [emailState, setEmailState] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');

  const validateFirstName = () => {
    if (firstName.length < 6 || firstName.length > 15) {
      setFirstNameState(true);
    } else {
      setFirstNameState(false);
    }
  };
  const validateLastName = () => {
    if (lastName.length < 6 || lastName.length > 15) {
      setLastNameState(true);
    } else {
      setLastNameState(false);
    }
  };
  const validateEmail = () => {
    if (email === '') {
      setEmailState(true);
    } else {
      setEmailState(false);
    }
  };

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
              <Text color={theme_colors.primary}>1</Text>
              <Text color={theme_colors.subText}>of</Text>
              <Text color={theme_colors.subText}>4</Text>
            </HStack>
          </HStack>
        </Box>
      </Box>
      <ScrollView px={5} mb={100}>
        <VStack space={1} mb={4}>
          <Text fontSize={20} bold color={theme_colors.headerText} mt={10}>
            Personal Information
          </Text>
          <Text color={theme_colors.subText}>
            Please provide us with your personal details to know you better
          </Text>
        </VStack>
        <VStack space={1} my={2}>
          <Text
            fontWeight="500"
            fontSize={12}
            color={firstNameState ? 'red.600' : theme_colors.headerText}>
            First Name
          </Text>
          <TextInput
            placeholder="e.g, John"
            onChangeText={setFirstName}
            value={firstName}
            onBlur={() => {
              validateFirstName();
            }}
            style={firstNameState ? styles.inputStyleError : styles.inputStyle}
          />
        </VStack>
        <VStack space={1} my={2}>
          <Text
            fontWeight="500"
            fontSize={12}
            color={lastNameState ? 'red.600' : theme_colors.headerText}>
            Last Name
          </Text>
          <TextInput
            placeholder="e.g, Doe"
            onChangeText={setLastName}
            value={lastName}
            onBlur={() => {
              validateLastName();
            }}
            style={lastNameState ? styles.inputStyleError : styles.inputStyle}
          />
        </VStack>
        <VStack space={1} my={2}>
          <Text fontWeight="500" fontSize={12} color={theme_colors.headerText}>
            Date of birth
          </Text>
          <TextInput
            placeholder="DD/MM/YYYY"
            onChangeText={setDOB}
            value={dob}
            onBlur={() => {}}
            style={styles.inputStyle}
          />
        </VStack>
        <VStack space={1} my={2}>
          <Text
            fontWeight="500"
            fontSize={12}
            color={emailState ? 'red.600' : theme_colors.headerText}>
            Email Address
          </Text>
          <TextInput
            placeholder="e.g, johnDoe@gmail.com"
            onChangeText={setEmail}
            value={email}
            onBlur={() => {
              validateEmail();
            }}
            style={emailState ? styles.inputStyleError : styles.inputStyle}
          />
        </VStack>
        <VStack space={1} my={2}>
          <Text fontWeight="500" fontSize={12} color={theme_colors.headerText}>
            Mobile number
          </Text>
          <TextInput
            placeholder="e.g, +2349069469010"
            onChangeText={setPhoneNumber}
            value={phoneNumber}
            onBlur={() => {}}
            keyboardType="numeric"
            style={styles.inputStyle}
          />
        </VStack>
      </ScrollView>
      <Box px={5} style={[styles.bottomArea, {bottom: top}]}>
        <HStack justifyContent="center" alignItems="center">
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('step2');
            }}
            style={[styles.button, {backgroundColor: theme_colors.primary}]}>
            <HStack justifyContent="center" py={3}>
              <Text color="white" bold>
                Next
              </Text>
            </HStack>
          </TouchableOpacity>
        </HStack>
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
  bottomArea: {
    position: 'absolute',
    width: '100%',
    height: 80,
    justifyContent: 'center',
  },
  button: {
    width: '100%',
    borderRadius: 5,
    borderColor: theme_colors.primary,
    borderWidth: 1,
  },
});
