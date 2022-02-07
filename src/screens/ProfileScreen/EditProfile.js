import React from 'react';
import {
  ScrollView,
  Dimensions,
  View,
  Platform,
  FlatList,
  Image,
  TextInput,
  TouchableOpacity,
  StatusBar,
  ImageBackground,
} from 'react-native';
import {Button, HStack, VStack, Text, Stack, Box} from 'native-base';

import styles from './styles';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import IconI from 'react-native-vector-icons/Ionicons';
import IconFA from 'react-native-vector-icons/FontAwesome';
import IconMI from 'react-native-vector-icons/MaterialIcons';
import IconAD from 'react-native-vector-icons/AntDesign';
import images from './../../assets/img/image';
import Fonts from './../../assets/font/fonts';
import FloatingLabelInput from '../../components/FloatingLabelInput';
let window = Dimensions.get('window');

class EditProfileScreen extends React.Component {
  constructor(props) {
    super(props);
    // self = this
    this.state = {};
  }

  componentDidMount() {
    // const self = this;
  }

  render() {
    // const {goBack} = this.props.navigation
    return (
      <SafeAreaProvider style={{backgroundColor: '#E5E5E5'}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#ffffff',
          }}>
          <View
            style={{
              flex: 0.2,
              height: 50,
              justifyContent: 'center',
              alignItems: 'flex-start',
            }}>
            <IconI
              name="ios-chevron-back"
              size={30}
              color={'#6B727C'}
              style={{marginLeft: 5}}
              onPress={this.props.tab}
            />
          </View>
          <View
            style={{
              flex: 0.6,
              height: 50,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={[
                Fonts.fontNormal,
                {
                  color: '#161616',
                  fontSize: 12,
                  fontWeight: '500',
                },
              ]}>
              Edit Profile
            </Text>
          </View>
          <View
            style={{
              flex: 0.2,
              justifyContent: 'center',
              alignItems: 'center',
            }}></View>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{marginBottom: 25}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#FFFFFF',
            }}>
            <View
              style={{
                flex: 1,
                height: 200,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#ffffff',
              }}>
              <Image
                style={{height: 30, width: 30, resizeMode: 'stretch'}}
                source={require('../../assets/img/blackCamera.png')}></Image>
              {/* <IconFA
                name="camera"
                size={30}
                color={'#6B727C'}
                style={{marginLeft: 5}}
              /> */}
            </View>
          </View>

          <View
            style={{
              marginTop: -35,
              flexDirection: 'row',
              alignItems: 'flex-start',
              justifyContent: 'center',
            }}>
            <View
              style={{
                flex: 1,
                marginLeft: 20,
              }}>
              <View
                style={{
                  height: 55,
                  width: 55,
                  borderRadius: 55 / 2,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#A8D8FF',
                }}>
                <Image
                  style={{height: 18, width: 18, resizeMode: 'stretch'}}
                  source={require('../../assets/img/camera.png')}></Image>

                {/* <IconFA name="camera" size={20} color={'#fff'} /> */}
              </View>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                flex: 1,
                marginHorizontal: 20,
                marginTop: 10,
              }}>
              <Text
                style={[
                  Fonts.fontNormal,
                  {
                    color: '#161616',
                    fontSize: 12,
                    fontWeight : "400",
                    marginBottom: 2
                  },
                ]}>
                Name
              </Text>
              {/* <FloatingLabelInput
                isRequired
                title="Last Name"
                borderRadius="10"
                borderWidth="0"
                style={{height: 50, borderWidth: 0}}
                // onChangeText={txt => setText(txt)}
                _text={{
                  fontSize: 'sm',
                  fontWeight: 'medium',
                }}
                //   height='40'
                backgroundColor="#fff"
              /> */}
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
                    height: 40,
                    borderRadius: 10,
                    backgroundColor: '#fff',
                    paddingHorizontal: 20,
                    fontFamily: 'Helvetica Now Micro',
                    color: 'black',
                    fontSize: 10,
                    fontWeight: '400',
                  }}
                  placeholder="Full name"
                  placeholderTextColor="#C8C8C8"
                  // onChangeText={txt => setText(txt)}
                />
              </View>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                flex: 1,
                marginHorizontal: 20,
                marginTop: 18,
              }}>
              <Text
                style={[
                  Fonts.fontNormal,
                  {
                    color: '#161616',
                    fontSize: 12,
                    fontWeight : "400",
                    marginBottom: 2
                  },
                ]}>
                Kiki ID
              </Text>
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
                    height: 40,
                    borderRadius: 10,
                    backgroundColor: '#fff',
                    paddingHorizontal: 20,
                    fontFamily: 'Helvetica Now Micro',
                    color: 'black',
                    fontSize: 10,
                    fontWeight: '400',
                  }}
                  placeholder="Select username"
                  placeholderTextColor="#C8C8C8"
                  // onChangeText={txt => setText(txt)}
                />
              </View>
              {/* <FloatingLabelInput
                isRequired
                borderRadius="10"
                borderWidth="0"
                style={{height: 50, borderWidth: 0}}
                // onChangeText={txt => setText(txt)}
                _text={{
                  fontSize: 'sm',
                  fontWeight: 'medium',
                }}
                //   height='40'
                backgroundColor="#fff"
              /> */}
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                flex: 1,
                marginHorizontal: 20,
                marginTop: 18,
              }}>
              <Text
                style={[
                  Fonts.fontNormal,
                  {
                    color: '#161616',
                    fontSize: 12,
                    fontWeight : "400",
                    marginBottom: 2
                  },
                ]}>
                Date of Birth
              </Text>
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
                    height: 40,
                    borderRadius: 10,
                    backgroundColor: '#fff',
                    paddingHorizontal: 20,
                    fontFamily: 'Helvetica Now Micro',
                    color: 'black',
                    fontSize: 10,
                    fontWeight: '400',
                  }}
                  placeholder="Choose your birthday"
                  placeholderTextColor="#C8C8C8"
                  // onChangeText={txt => setText(txt)}
                />
              </View>
              {/* <FloatingLabelInput
                isRequired
                borderRadius="10"
                borderWidth="0"
                style={{height: 50, borderWidth: 0}}
                // onChangeText={txt => setText(txt)}
                _text={{
                  fontSize: 'sm',
                  fontWeight: 'medium',
                }}
                //   height='40'
                backgroundColor="#fff"
              /> */}
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                flex: 1,
                marginHorizontal: 20,
                marginTop: 18,
              }}>
              <Text
                style={[
                  Fonts.fontNormal,
                  {
                    color: '#161616',
                    fontSize: 12,
                    fontWeight : "400",
                    marginBottom: 2
                  },
                ]}>
                Bio
              </Text>
              {/* <FloatingLabelInput
                isRequired
                borderRadius="10"
                borderWidth="0"
                style={{height: 200, borderWidth: 0}}
                // onChangeText={txt => setText(txt)}
                _text={{
                  fontSize: 'sm',
                  fontWeight: 'medium',
                }}
                //   height='40'
                backgroundColor="#fff"
              /> */}
              <View
                style={{
                  backgroundColor: '#fff',
                  borderWidth: 0,
                  borderRadius: 10,
                  height: 200,
                }}>
                <TextInput
                  style={{
                    padding: 1.5,
                    borderRadius: 10,
                    backgroundColor: '#fff',
                    paddingHorizontal: 20,
                    fontFamily: 'Helvetica Now Micro',
                    color: 'black',
                    fontSize: 10,
                    fontWeight: '400',
                    marginTop: 5,
                  }}
                  multiline
                  placeholder="Share a little about yourself"
                  placeholderTextColor="#C8C8C8"
                  // onChangeText={txt => setText(txt)}
                />
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                flex: 1,
                marginHorizontal: 20,
                marginTop: 10,
                marginBottom: 50,
              }}>
              <Button
                style={{height: 48}}
                mt="5"
                size="md"
                // height='48'
                borderRadius="10"
                _text={{
                  fontWeight: 'medium',
                  color: 'white',
                }}
                bg={'#A8D8FF'}
                onPress={() => {
                  // props.navigation.navigate('OTP')
                }}>
                Save changes
              </Button>
            </View>
          </View>
        </ScrollView>
      </SafeAreaProvider>
    );
  }
}
export default EditProfileScreen;
