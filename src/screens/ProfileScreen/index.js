import React, {Component, useState} from 'react';
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
import {Container, Text, Picker, Button} from 'native-base';
import styles from './styles';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import IconI from 'react-native-vector-icons/Ionicons';
import IconFA from 'react-native-vector-icons/FontAwesome';
import IconMI from 'react-native-vector-icons/MaterialIcons';
import IconAD from 'react-native-vector-icons/AntDesign';
import images from './../../assets/img/image';
import Fonts from './../../assets/font/fonts';
let window = Dimensions.get('window');
import EditProfile from '../ProfileScreen/EditProfile.js';

class ProfileScreen extends React.Component {
  constructor(props) {
    super(props);
    self = this;
    this.state = {
      tab: 0,
      data: [
        {
          id: 1,
          title: 'Trying black top with camo pants for Autumn...',
          user_profile: images.User,
          user_name: ' Christine Jingle',
          fav: '50',
          image: images.Post_1,
        },
        {
          id: 2,
          title: 'Trying black top with camo pants for Autumn...',
          user_profile: images.User,
          user_name: ' Christine Jingle',
          fav: '50',
          image: images.Post_2,
        },
        {
          id: 3,
          title: 'Trying black top with camo pants for Autumn...',
          user_profile: images.User,
          user_name: ' Christine Jingle',
          fav: '50',
          image: images.Post_1,
        },
        {
          id: 4,
          title: 'Trying black top with camo pants for Autumn...',
          user_profile: images.User,
          user_name: ' Christine Jingle',
          fav: '50',
          image: images.Post_2,
        },
        {
          id: 5,
          title: 'Trying black top with camo pants for Autumn...',
          user_profile: images.User,
          user_name: ' Christine Jingle',
          fav: '50',
          image: images.Post_1,
        },
        {
          id: 6,
          title: 'Trying black top with camo pants for Autumn...',
          user_profile: images.User,
          user_name: ' Christine Jingle',
          fav: '50',
          image: images.Post_2,
        },
      ],
    };
  }

  componentDidMount() {
    const self = this;
  }

  render() {
    // const {goBack} = this.props.navigation
    return (
      <SafeAreaProvider style={{backgroundColor: '#FFFFFF'}}>
        {this.state.tab == 0 ? (
          <View style={{flex: 1}}>
            <ImageBackground
              style={{justifyContent: 'flex-start', height: 305}}
              source={images.Profile_view}>
              <View style={{marginTop: 10, flexDirection: 'row'}}>
                <View
                  style={{
                    marginHorizontal: 10,
                    flex: 0.5,
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      this.props.extraData.openDrawer();
                    }}>
                    <IconI
                      name="ios-menu"
                      size={30}
                      color={'#fff'}
                      style={{marginLeft: 5}}
                    />
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    flex: 0.5,
                    marginHorizontal: 10,
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                  }}>
                  <Image
                    source={require('../../assets/img/externalLink.png')}
                    style={{
                      height: 24,
                      width: 24,
                      resizeMode: 'contain',
                      tintColor: '#fff',
                    }}></Image>
                  {/* <IconFA
                    name="external-link"
                    size={25}
                    color={'#fff'}
                    style={{marginLeft: 5}}
                  /> */}
                </View>
              </View>

              <View style={{marginTop: 10, flexDirection: 'row'}}>
                <View
                  style={{
                    marginLeft: 10,
                    flex: 0.25,
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                  }}>
                  <Image
                    source={images.User}
                    style={{
                      width: 80,
                      height: 80,
                      borderRadius: 40,
                      borderColor: '#fff',
                      borderWidth: 1,
                    }}
                  />
                </View>
                <View
                  style={{
                    marginLeft: 10,
                    flex: 0.5,
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={[
                      Fonts.fontNormal,
                      {color: '#fff', fontSize: 14, fontWeight: '500'},
                    ]}>
                    Christine Jingle
                  </Text>
                  <Text
                    style={[
                      Fonts.fontNormal,
                      {color: '#C8C8C8', fontSize: 10, fontWeight: 'normal'},
                    ]}>
                    @christine
                  </Text>
                </View>
                <View
                  style={{
                    marginRight: 10,
                    flex: 0.3,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <TouchableOpacity
                    onPress={() => this.setState({tab: 1})}
                    style={styles.EditProfileBtn}>
                    <Text
                      style={[
                        Fonts.fontNormal,
                        {color: '#fff', fontWeight: '500', fontSize: 12},
                      ]}>
                      Edit Profile
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={{flexDirection: 'row'}}>
                <View
                  style={{
                    marginHorizontal: 15,
                    marginTop: 12,
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={[
                      Fonts.fontNormal,
                      {color: '#fff', fontSize: 10, fontWeight: 'normal'},
                    ]}>
                    I believe in making the impossible possible because there’s
                    no fun in giving up.
                  </Text>
                </View>
              </View>

              <View style={{flexDirection: 'row', marginTop: 30}}>
                <View
                  style={{
                    marginHorizontal: 10,
                    flex: 0.33,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{color: '#fff', fontSize: 14, fontWeight: '500'}}>
                    144
                  </Text>
                  <Text
                    style={{
                      color: '#C8C8C8',
                      fontSize: 10,
                      fontWeight: 'normal',
                    }}>
                    Following
                  </Text>
                </View>
                <View
                  style={{
                    marginHorizontal: 10,
                    flex: 0.33,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{color: '#fff', fontSize: 14, fontWeight: '500'}}>
                    125K
                  </Text>
                  <Text
                    style={{
                      color: '#C8C8C8',
                      fontSize: 10,
                      fontWeight: 'normal',
                    }}>
                    Followers
                  </Text>
                </View>
                <View
                  style={{
                    marginHorizontal: 10,
                    flex: 0.33,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{color: '#fff', fontSize: 14, fontWeight: '500'}}>
                    500
                  </Text>
                  <Text
                    style={{
                      color: '#C8C8C8',
                      fontSize: 10,
                      fontWeight: 'normal',
                    }}>
                    Likes & Collects
                  </Text>
                </View>
              </View>
            </ImageBackground>
            <View
              style={{
                backgroundColor: '#fff',
                marginTop: -20,
                borderTopLeftRadius: 25,
                borderTopRightRadius: 25,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderBottomColor: '#F8F8F8',
                  borderBottomWidth: 1,
                }}>
                <View
                  style={{
                    flex: 0.5,
                    height: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={[
                      Fonts.fontNormal,
                      {
                        color: '#000',
                        fontSize: 14,
                        fontWeight: '500',
                      },
                    ]}>
                    Posts
                  </Text>
                  <Image
                    style={{width: 22, height: 2, resizeMode: 'contain'}}
                    source={require('../../assets/img/line.png')}></Image>
                </View>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Collection')}
                  style={{
                    flex: 0.5,
                    height: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={[
                      Fonts.fontNormal,
                      {
                        color: '#6B727C',
                        fontSize: 14,
                        fontWeight: '500',
                      },
                    ]}>
                    Collections
                    <IconI
                      name="ios-lock-closed"
                      size={15}
                      color={'#6B727C'}
                      style={{marginLeft: 5}}
                    />
                  </Text>
                </TouchableOpacity>
              </View>
              <ScrollView
                style={styles.PostView}
                showsVerticalScrollIndicator={false}>
                <View
                  style={{
                    flexDirection: 'row',
                    flex: 1,
                    marginTop: 10,
                    marginBottom: '35%',
                  }}>
                  {this.state.data && this.state.data.length > 0 ? (
                    <FlatList
                      data={this.state.data}
                      renderItem={({item}) => (
                        <View style={{marginBottom: 10}}>
                          <View style={{flex: 1, padding: 5}}>
                            <View style={{flexDirection: 'row', zIndex: 1}}>
                              <View
                                style={{
                                  flex: 1,
                                  marginRight: 15,
                                  alignItems: 'flex-end',
                                  justifyContent: 'center',
                                }}>
                                <IconAD
                                  name="play"
                                  size={20}
                                  color={'gray'}
                                  style={{marginLeft: 5}}
                                />
                              </View>
                            </View>

                            <Image
                              source={item.image}
                              // resizeMode='stretch'
                              style={{
                                width: window.width / 2 - 10,
                                borderRadius: 5,
                                marginTop: -25,
                              }}
                            />
                            <View style={{flexDirection: 'row', marginTop: 10}}>
                              <View
                                style={{
                                  marginLeft: 10,
                                  flex: 1,
                                  alignItems: 'flex-start',
                                  justifyContent: 'center',
                                }}>
                                <Text
                                  style={[
                                    Fonts.fontNormal,
                                    {
                                      color: '#161616',
                                      fontSize: 10,
                                      fontWeight: '400',
                                      lineHeight: 16,
                                    },
                                  ]}>
                                  {item.title}
                                </Text>
                              </View>
                            </View>

                            <View style={{flexDirection: 'row', marginTop: 15}}>
                              <View
                                style={{
                                  marginLeft: 10,
                                  flex: 0.2,
                                  alignItems: 'flex-start',
                                  justifyContent: 'center',
                                }}>
                                <Image
                                  source={item.user_profile}
                                  style={{
                                    width: 20,
                                    height: 20,
                                    borderRadius: 10,
                                  }}
                                />
                              </View>
                              <View
                                style={{
                                  marginLeft: 0,
                                  flex: 0.7,
                                  alignItems: 'flex-start',
                                  justifyContent: 'center',
                                }}>
                                <Text
                                  style={[
                                    Fonts.fontNormal,
                                    {
                                      color: '#6B727C',
                                      fontSize: 10,
                                      fontWeight: '400',
                                    },
                                  ]}>
                                  {item.user_name}
                                </Text>
                              </View>
                              <View
                                style={{
                                  marginLeft: 10,
                                  flex: 0.25,
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                }}>
                                <View
                                  style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                  }}>
                                  <IconMI
                                    name="favorite"
                                    size={20}
                                    color={'#F33737'}
                                    style={{marginLeft: 5}}
                                  />
                                  <Text
                                    style={[
                                      Fonts.fontNormal,
                                      {
                                        color: '#6B727C',
                                        fontSize: 12,
                                        fontWeight: '400',
                                      },
                                    ]}>
                                    {item.fav}K
                                  </Text>
                                </View>
                              </View>
                            </View>
                          </View>
                        </View>
                      )}
                      keyExtractor={item => item.id}
                      numColumns={2}
                    />
                  ) : (
                    <View>
                      <Text
                        style={[
                          Fonts.fontNormal,
                          {color: '#000', marginTop: 20, textAlign: 'center'},
                        ]}>
                        Record Empty
                      </Text>
                    </View>
                  )}
                </View>
              </ScrollView>
            </View>
          </View>
        ) : (
          <EditProfile tab={() => this.setState({tab: 0})} />
        )}
      </SafeAreaProvider>
    );
  }
}
export default ProfileScreen;
