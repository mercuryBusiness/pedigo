import React, {useEffect, useState} from 'react';
import {
  Button,
  HStack,
  VStack,
  Text,
  Link,
  Checkbox,
  Divider,
  Image,
  useColorModeValue,
  IconButton,
  Icon,
  Pressable,
  Center,
  Hidden,
  StatusBar,
  Stack,
  Box,
} from 'native-base';
import {
  TextInput,
  TouchableOpacity,
  View,
  ImageBackground,
  Alert,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {
  AccessToken,
  LoginManager,
  GraphRequest,
  GraphRequestManager,
} from 'react-native-fbsdk';
import md5 from 'react-native-md5';

import GoogleIcon from '../../assets/svg/googleIcon';
import FacebookIcon from '../../assets/svg/facebookIcon';
import AppleIcon from '../../assets/svg/appleIcon';
import FloatingLabelInput from '../../components/FloatingLabelInput';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {toggleReguireLogin} from '../../redux/globalStore';
import AddIcon from '../../assets/svg/addIcon';
import {useDispatch} from 'react-redux';
import images from './../../assets/img/image';
import Fonts from './../../assets/font/fonts';
import {login} from '../../api/api.js';
import {storage} from '@util/storage';

export function SignInForm({props, navigation}) {
  // add next router here
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [termsCond, setTermsCond] = useState(false);
  const [emailInvalid, setEmailInvalid] = useState(false);
  const [errMsg, setErrMsg] = React.useState('');

  const googleLogin = async () => {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'],
      webClientId:
        '907581750443-ojkpldb2mftokdogi4o3p86cn247r5sh.apps.googleusercontent.com',
    });
    try {
      await GoogleSignin.hasPlayServices({
        showPlayServicesUpdateDialog: true,
      });
      const userInfo = await GoogleSignin.signIn();

      console.log('userInfo---->', userInfo);

      // registerUserGoogleFacebook('google', userInfo);
    } catch (error) {
      console.log('Message', JSON.stringify(error));
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        alert('User Cancelled the Login Flow');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        alert('Signing In');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        alert('Play Services Not Available or Outdated');
      } else {
        alert(error.message);
      }
    }
  };

  const facebookLogin = async () => {
    LoginManager.logInWithPermissions([
      'public_profile',
      'email',
      'user_friends',
    ]).then(
      async function (result) {
        if (result.isCancelled) {
          console.log('Login cancelled');
        } else {
          console.log(
            'Login success with permissions: ' +
              result.grantedPermissions.toString(),
          );
          let token = await AccessToken.getCurrentAccessToken();
          getFBInfoFromToken(token);
        }
      },
      function (error) {
        console.log('Login fail with error: ' + error);
      },
    );
  };

  const getFBInfoFromToken = token => {
    const PROFILE_REQUEST_PARAMS = {
      fields: {
        string: 'id,name,first_name,last_name,email,picture',
      },
    };
    const profileRequest = new GraphRequest(
      '/me',
      {token, parameters: PROFILE_REQUEST_PARAMS},
      (error, user) => {
        if (error) {
          console.log('login info has error: ' + error);
        } else {
          // this.setState({ userInfo: user });
          console.log('result:', user);
          // registerUserGoogleFacebook("facebook", user);
        }
      },
    );
    new GraphRequestManager().addRequest(profileRequest).start();
  };

  const validate = () => {
    console.log('called');
    console.log(email);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (email && pass != '') {
      if (reg.test(email) === false) {
        console.log('Email is Not Correct');
        setErrMsg('Email invalid, please try again.');
        setEmail(email);
        setEmailInvalid(true);
        return false;
      } else {
        if (termsCond == false) {
          setErrMsg('Please check term and condition');
          setEmailInvalid(true);
        } else {
          setEmail(email);
          console.log('Email is Correct');
          checkLogin();
          setEmailInvalid(false);
        }
      }
    } else {
      setEmailInvalid(true);
      setErrMsg('Please must be enter fields');
    }
  };

  const checkLogin = async () => {
    const data = JSON.stringify({
      email: email,
      password: md5.hex_md5(pass),
    });
    console.log('data--->', data);
    await login(data)
      .then(response => {
        console.log('rs--->', response);
        if (response.success == true) {
          storage.setItem('LOGIN_TOKEN', response.token);
          alert('Login Success');
        } else {
          setEmailInvalid(true);
          setErrMsg('Please check email and password');
        }
      })
      .catch(err => {
        console.log('err------>', err);
      });
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{
        flexGrow: 1,
      }}
      style={{
        flex: 1,
        backgroundColor: '#F8F8F8',
      }}>
      <VStack
        flex="1"
        px="6"
        py="9"
        bg={'#F8F8F8'}
        space="3"
        justifyContent="space-between"
        borderTopRightRadius={{
          base: '2xl',
          md: 'xl',
        }}
        borderBottomRightRadius={{
          base: '0',
          md: 'xl',
        }}
        borderTopLeftRadius={{
          base: '2xl',
          md: '0',
        }}>
        <VStack space="3">
          <Text fontSize="lg" fontWeight="500" style={Fonts.fontNormal}>
            Login
          </Text>
          <VStack>
            <VStack space="3">
              <VStack
                space={{
                  base: '7',
                  md: '4',
                }}>
                <View
                  style={{
                    backgroundColor: '#fff',
                    borderWidth: 0,
                    borderRadius: 10,
                    height: 40,
                    justifyContent: 'center',
                  }}>
                  <TextInput
                    style={{
                      padding: 1.5,
                      height: 30,
                      backgroundColor: '#fff',
                      paddingHorizontal: 20,
                      fontFamily: 'Helvetica Now Micro',
                      color: 'black',
                      fontSize: 10,
                      fontWeight: '400',
                    }}
                    placeholder="Enter Email"
                    placeholderTextColor="#C8C8C8"
                    onChangeText={text => setEmail(text)}
                    value={email}
                  />
                </View>
                {/* <FloatingLabelInput
                  isRequired
                  label="Enter Email"
                  labelColor="#9ca3af"
                  borderRadius="10"
                  defaultValue={text}
                  borderWidth="0"
                  style={{height: 40, borderWidth: 0}}
                  onChangeText={txt => setText(txt)}
                  _text={{
                    fontSize: 'sm',
                    fontWeight: 'medium',
                  }}
                  backgroundColor="#fff"
                /> */}
                <View
                  style={{
                    backgroundColor: '#fff',
                    borderWidth: 0,
                    borderRadius: 10,
                    height: 40,
                    justifyContent: 'center',
                    width: '100%',
                  }}>
                  <TextInput
                    style={{
                      padding: 1.5,
                      height: 30,
                      width: '75%',
                      backgroundColor: '#fff',
                      paddingHorizontal: 20,
                      fontFamily: 'Helvetica Now Micro',
                      color: 'black',
                      fontSize: 10,
                      fontWeight: '400',
                    }}
                    placeholder="Verification"
                    placeholderTextColor="'#C8C8C8'"
                    onChangeText={txt => setPass(txt)}
                    value={pass}
                  />
                  <TouchableOpacity style={{position: 'absolute', right: 20}}>
                    <Text
                      style={{
                        color: '#A8D8FF',
                        fontFamily: 'Helvetica Now Micro',
                        fontSize: 10,
                        fontWeight: '500',
                      }}>
                      Send Code
                    </Text>
                  </TouchableOpacity>
                </View>
                {/* <FloatingLabelInput
                  isRequired
                  type={showPass ? '' : 'Verification'}
                  label="Verification"
                  borderRadius="10"
                  labelColor="#9ca3af"
                  labelBGColor={useColorModeValue('#fff', '#1f2937')}
                  defaultValue={pass}
                  onChangeText={txt => setPass(txt)}
                  borderWidth="0"
                  style={{height: 40}}
                  InputRightElement={
                    <Link
                      ml="auto"
                      _text={{
                        fontSize: 'xs',
                        fontWeight: 'bold',
                        textDecoration: 'none',
                        color: '#A8D8FF',
                        paddingRight: 5,
                      }}>
                      Send Code
                    </Link>
                  }
                  _text={{
                    fontSize: 'sm',
                    fontWeight: 'medium',
                  }}
                  //   borderColor={'coolGray.300'}
                  backgroundColor="#fff"
                /> */}
              </VStack>

              {/* Opening Link Tag navigateTo:"OTP" (react/Router) */}
              <Button
                style={{height: 48}}
                mt="5"
                size="md"
                // height='48'
                borderRadius="10"
                _text={{
                  fontWeight: '400',
                  fontFamily: 'Helvetica Now Micro',
                  color: 'white',
                }}
                bg={
                  email === '' || pass === '' || termsCond === false
                    ? '#C8C8C8'
                    : '#A8D8FF'
                }
                onPress={() => {
                  validate();
                  // props.navigation.navigate('OTP');
                }}>
                {email === '' || pass === '' ? 'Login' : 'Login'}
              </Button>
              {/* Closing Link Tag (react/Router) */}

              <Pressable
                cursor="pointer"
                py="2"
                flex={1}
                // onPress={() => setTermsCond(!termsCond)}
              >
                <View style={{flexDirection: 'row', width: '100%'}}>
                  <View style={{width: '5%'}}>
                    <TouchableOpacity onPress={() => setTermsCond(!termsCond)}>
                      {console.log('trueeee=====>', termsCond)}
                      {termsCond ? (
                        <ImageBackground
                          style={{
                            height: 16,
                            width: 16,
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                          resizeMode="contain"
                          source={require('../../assets/img/checkBackground.png')}>
                          <Image
                            style={{
                              height: 7.66,
                              width: 10.17,
                              resizeMode: 'contain',
                            }}
                            source={require('../../assets/img/check.png')}></Image>
                        </ImageBackground>
                      ) : (
                        <Image
                          style={{
                            height: 16,
                            width: 16,
                            resizeMode: 'contain',
                          }}
                          source={require('../../assets/img/unCheck.png')}></Image>
                      )}
                    </TouchableOpacity>
                  </View>
                  <View style={{width: '100%'}}>
                    <Text
                      pl="3"
                      fontWeight="100"
                      color={'#161616'}
                      fontFamily="Halvetica now Macro"
                      style={[
                        Fonts.fontNormal,
                        {
                          fontSize: 12,
                          lineHeight: 19.2,
                          fontWeight: 'normal',
                          width: '85%',
                        },
                      ]}>
                      I have read and agreed to the following policies:
                      <Text
                        pl="3"
                        fontWeight="normal"
                        color={'#A8D8FF'}
                        style={[Fonts.fontNormal, {fontSize: 12}]}>
                        {' '}
                        Terms, Privacy Policy, Children Protective Rules
                      </Text>
                    </Text>
                  </View>
                </View>
                {/* <Checkbox
                  alignItems="flex-start"
                  mt="5"
                  borderColor="#C8C8C8"
                  checked={termsCond}
                  bgColor="#A8D8FF"
                  colorScheme="muted"
                  accessibilityLabel="Remember me">
                  
                </Checkbox> */}
              </Pressable>
              {emailInvalid && (
                <TouchableOpacity
                  style={{
                    backgroundColor: '#F33737',
                    height: 44,
                    width: '100%',
                    borderRadius: 22,
                    justifyContent: 'center',
                    flexDirection: 'row',
                    width: '100%',
                  }}>
                  <View
                    style={{
                      width: '10%',
                      justifyContent: 'center',
                      marginLeft: 40,
                    }}>
                    <Image
                      style={{
                        height: 20,
                        width: 20,
                        resizeMode: 'contain',
                        justifyContent: 'center',
                      }}
                      source={require('../../assets/img/iconCancel.png')}></Image>
                  </View>
                  <View style={{width: '90%', justifyContent: 'center'}}>
                    <Text
                      style={{
                        fontFamily: 'Helvetica Now Micro',
                        color: '#fff',
                        fontSize: 12,
                      }}>
                      {errMsg}
                    </Text>
                  </View>
                </TouchableOpacity>
              )}

              <HStack
                mt="0"
                space="2"
                mb={{
                  base: 6,
                  md: 7,
                }}
                alignItems="center"
                justifyContent="center">
                <Divider w="45%" bg={'#C8C8C8'} />
                <Text
                  fontWeight="medium"
                  color={'coolGray.300'}
                  style={Fonts.fontNormal}>
                  or
                </Text>
                <Divider w="45%" bg={'#C8C8C8'} />
              </HStack>
            </VStack>
            <Center style={{marginTop: 20}}>
              <HStack space="4">
                <Pressable>
                  <Image
                    source={images.ApplePng}
                    style={{
                      width: 32,
                      height: 32,
                    }}
                  />
                </Pressable>
                <Pressable onPress={() => googleLogin()}>
                  <Image
                    source={images.GooglePlusPng}
                    style={{
                      width: 32,
                      height: 32,
                    }}
                  />
                </Pressable>
                <Pressable onPress={() => facebookLogin()}>
                  <Image
                    source={images.FacebookPng}
                    style={{
                      width: 32,
                      height: 32,
                    }}
                  />
                </Pressable>
              </HStack>
            </Center>
          </VStack>
        </VStack>
        <HStack
          mb="4"
          space="1"
          safeAreaBottom
          alignItems="center"
          justifyContent="center"
          mt={{
            base: 'auto',
            md: '8',
          }}>
          {/* Closing Link Tag */}
        </HStack>
      </VStack>
    </KeyboardAwareScrollView>
  );
}
export default function SignIn(props) {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="#F8F8F8"
        barStyle="dark-content"
      />
      <Box safeAreaTop bg={'#F8F8F8'} />
      <Center my="auto" bg={'#F8F8F8'} flex="1">
        <Stack
          flexDirection={{
            base: 'column',
            md: 'row',
          }}
          w="100%"
          maxW={{
            md: '1016px',
          }}
          flex={{
            base: '1',
            md: 'none',
          }}>
          <Hidden from="md">
            <VStack px="4" mt="4" mb="5" space="9">
              <HStack space="2" alignItems="center">
                <Pressable
                  cursor="pointer"
                  onPress={() => dispatch(toggleReguireLogin())}>
                  <IconButton
                    variant="unstyled"
                    pl="0"
                    onPress={() => {}}
                    icon={
                      <Icon
                        size="7"
                        as={Ionicons}
                        name="ios-chevron-back-outline"
                        color="#6B727C"
                      />
                    }
                  />
                </Pressable>
              </HStack>
            </VStack>
          </Hidden>
          <Hidden till="md">
            <Center
              flex="1"
              bg="primary.700"
              borderTopLeftRadius={{
                base: '0',
                md: 'xl',
              }}
              borderBottomLeftRadius={{
                base: '0',
                md: 'xl',
              }}></Center>
          </Hidden>
          <SignInForm props={props} />
        </Stack>
      </Center>
    </>
  );
}
