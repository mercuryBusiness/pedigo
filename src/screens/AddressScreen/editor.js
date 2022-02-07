import React from 'react';
import {
  Box,
  HStack,
  VStack,
  Text,
  Center,
  Circle,
  Stack,
  ScrollView,
} from 'native-base';
import {
  TouchableOpacity,
  Platform,
  StyleSheet,
  Dimensions,
  TextInput,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function AddressEditorScreen({route, navigation}) {
  const height = Platform.OS === 'ios' ? 50 : 50;
  const top = Platform.OS === 'ios' ? 50 : 15;
  const screen = Dimensions.get('screen');

  const {edit, user} = route.params;

  const [firstName, setFirstName] = React.useState(edit ? user.firstName : '');
  const [firstNameState, setFirstNameState] = React.useState(false);
  const [lastName, setLastName] = React.useState(edit ? user.lastName : '');
  const [lastNameState, setLastNameState] = React.useState(false);
  const [phoneNumber, setPhoneNumber] = React.useState(
    edit ? user.phoneNumber : '',
  );
  const [city, setCity] = React.useState(edit ? user.city : '');
  const [code, setCode] = React.useState(edit ? user.code : '');
  const [codeState, setCodeState] = React.useState(false);
  const [address1, setAddress1] = React.useState(edit ? user.address1 : '');
  const [address2, setAddress2] = React.useState(edit ? user.address2 : '');
  const [defaultForm, setDefaultForm] = React.useState(true);

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
  const validateCode = () => {
    if (code.length < 2 || code.length > 30) {
      setCodeState(true);
    } else {
      setCodeState(false);
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
              <Icon name="chevron-left" size={18} />
            </TouchableOpacity>
            <Text bold>Edit Profile</Text>
            <Text />
          </HStack>
        </Box>
      </Box>
      <ScrollView mt={2} mb={100}>
        <VStack space={1} mb={1}>
          <Text color={firstNameState ? 'red.600' : 'coolGray.800'}>
            First Name
          </Text>
          <TextInput
            placeholder=""
            onChangeText={setFirstName}
            value={firstName}
            onBlur={() => {
              validateFirstName();
            }}
            style={firstNameState ? styles.inputStyleError : styles.inputStyle}
          />
          {firstNameState && (
            <Text fontSize={10} color="red.600">
              Length between 6-15 characters and numbers
            </Text>
          )}
        </VStack>
        <VStack space={1} mb={1}>
          <Text color={lastNameState ? 'red.600' : 'coolGray.800'}>
            Last Name
          </Text>
          <TextInput
            placeholder=""
            onChangeText={setLastName}
            value={lastName}
            onBlur={() => {
              validateLastName();
            }}
            style={lastNameState ? styles.inputStyleError : styles.inputStyle}
          />
          {lastNameState && (
            <Text fontSize={10} color="red.600">
              Length between 6-15 characters and numbers
            </Text>
          )}
        </VStack>
        <VStack space={1} mb={1}>
          <Text>Phone Number</Text>
          <TextInput
            placeholder=""
            onChangeText={setPhoneNumber}
            value={phoneNumber}
            onBlur={() => {}}
            keyboardType="numeric"
            style={styles.inputStyle}
          />
        </VStack>
        <VStack space={1} mb={1}>
          <Text>State/Province & City & District</Text>
          <TextInput
            placeholder=""
            onChangeText={setCity}
            value={city}
            onBlur={() => {}}
            style={styles.inputStyle}
          />
        </VStack>
        <VStack space={1} mb={1}>
          <Text color={codeState ? 'red.600' : 'coolGray.800'}>
            Post/Zip Code
          </Text>
          <TextInput
            placeholder=""
            onChangeText={setCode}
            value={code}
            onBlur={() => {
              validateCode();
            }}
            style={codeState ? styles.inputStyleError : styles.inputStyle}
          />
          {codeState && (
            <Text fontSize={10} color="red.600">
              Post/ZIP Code should contain 2-30 characters.
            </Text>
          )}
        </VStack>
        <VStack space={1} mb={1}>
          <Text>Address Line 1</Text>
          <TextInput
            placeholder=""
            onChangeText={setAddress1}
            value={address1}
            onBlur={() => {}}
            style={styles.inputStyle}
          />
        </VStack>
        <VStack space={1} mb={5}>
          <Text>Address Line 2</Text>
          <TextInput
            placeholder=""
            onChangeText={setAddress2}
            value={address2}
            onBlur={() => {}}
            style={styles.inputStyle}
          />
        </VStack>
        <TouchableOpacity
          onPress={() => {
            setDefaultForm(!defaultForm);
          }}>
          <HStack alignItems="center" justifyContent="space-between" mb={3}>
            <Text>Make Default</Text>
            {defaultForm && (
              <Icon name="check-circle" size={18} color={'skyblue'} />
            )}
            {!defaultForm && (
              <Center>
                <Circle
                  size={4}
                  bg="white"
                  borderWidth={1}
                  borderColor="gray.300"
                />
              </Center>
            )}
          </HStack>
        </TouchableOpacity>
      </ScrollView>
      <Box ml={5} style={styles.bottomArea}>
        <TouchableOpacity
          onPress={() => {
            !firstNameState &&
              !lastNameState &&
              !codeState &&
              navigation.navigate({
                name: 'Address_Book',
                params: {
                  post: {
                    id: Date.now(),
                    firstName: firstName,
                    firstNameState: firstNameState,
                    lastName: lastName,
                    lastNameState: lastNameState,
                    phoneNumber: phoneNumber,
                    city: city,
                    code: code,
                    codeState: codeState,
                    address1: address1,
                    address2: address2,
                    defaultForm: defaultForm,
                  },
                },
                merge: true,
              });
          }}
          style={styles.blueButton}>
          <HStack justifyContent="center" py={4}>
            <Text color="white" bold>
              Save
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
    paddingHorizontal: 20,
    flexDirection: 'column',
  },
  header: {
    backgroundColor: 'transparent',
    position: 'absolute',
    width: '100%',
    zIndex: 1,
  },
  inputStyleError: {
    padding: 10,
    height: 40,
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 10,
  },
  inputStyle: {
    padding: 10,
    height: 40,
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
