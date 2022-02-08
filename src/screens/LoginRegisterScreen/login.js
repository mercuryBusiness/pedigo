import React, {useState} from 'react';
import {Box, HStack, VStack, Text, ScrollView, Stack} from 'native-base';
import {TouchableOpacity, Platform, StyleSheet, TextInput} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import {theme_colors} from '@util/color';

export default function LoginScreen({navigation}) {
  const height = Platform.OS === 'ios' ? 50 : 50;
  const top = Platform.OS === 'ios' ? 50 : 15;

  const [email, setEmail] = useState('');
  const [emailState, setEmailState] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordState, setPasswordState] = useState(false);

  const validateEmail = () => {
    if (email === '') {
      setEmailState(true);
    } else {
      setEmailState(false);
    }
  };
  const validatePassword = () => {
    if (password === '') {
      setPasswordState(true);
    } else {
      setPasswordState(false);
    }
  };

  return (
    <SafeAreaView style={[styles.container, {paddingTop: height}]}>
      <Box style={[styles.header, {height: height, top: top}]}>
        <Box flex={1}>
          <HStack px={5} alignItems="center" justifyContent="space-between">
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('primary');
              }}>
              <Icon
                name="chevron-left"
                size={18}
                color={theme_colors.headerText}
              />
            </TouchableOpacity>
            <Text fontSize={20} bold color={theme_colors.primary} mr={8}>
              PediGo
            </Text>
            <Text />
          </HStack>
        </Box>
      </Box>
      <Box px={5} mb={100}>
        <VStack space={1} mb={8}>
          <Text fontSize={20} bold color={theme_colors.headerText} mt={10}>
            Login
          </Text>
          <Text color={theme_colors.subText}>
            Please provide your login details fo easy and quick access to the
            app
          </Text>
        </VStack>
        <VStack space={1} my={2}>
          <Text
            fontWeight="500"
            fontSize={12}
            color={emailState ? 'red.600' : theme_colors.headerText}>
            Email address
          </Text>
          <TextInput
            placeholder="e.g, Ulimhukaakem@gmail.com"
            onChangeText={setEmail}
            value={email}
            onBlur={() => {
              validateEmail();
            }}
            style={emailState ? styles.inputStyleError : styles.inputStyle}
          />
        </VStack>
        <VStack space={1} my={2}>
          <Text
            fontWeight="500"
            fontSize={12}
            color={passwordState ? 'red.600' : theme_colors.headerText}>
            Password
          </Text>
          <TextInput
            placeholder="e.g, 223455"
            onChangeText={setPassword}
            value={password}
            onBlur={() => {
              validatePassword();
            }}
            style={passwordState ? styles.inputStyleError : styles.inputStyle}
          />
        </VStack>
        <HStack my={4} justifyContent="center">
          <TouchableOpacity>
            <Text color={theme_colors.primary}>Forgot password?</Text>
          </TouchableOpacity>
        </HStack>
        <HStack mt={10} justifyContent="center" alignItems="center">
          <TouchableOpacity
            onPress={() => {
              // navigation.navigate('home');
            }}
            style={[styles.button, {backgroundColor: theme_colors.primary}]}>
            <HStack justifyContent="center" py={3}>
              <Text color="white" bold>
                Confirm
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
  button: {
    width: '100%',
    borderRadius: 5,
    borderColor: theme_colors.primary,
    borderWidth: 1,
  },
});
