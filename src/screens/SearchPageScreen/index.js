import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import SearchSlider from '../../components/SearchSlider/searchSlider';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import IconI from 'react-native-vector-icons/Ionicons';
import IconFA from 'react-native-vector-icons/FontAwesome';
import IconMI from 'react-native-vector-icons/MaterialIcons';
import IconAD from 'react-native-vector-icons/AntDesign';
import images from './../../assets/img/image';
import Fonts from './../../assets/font/fonts';
import ShopFeed from '../../api/shopFeed.json';
import styles from './styles';
let window = Dimensions.get('window');

export default function SearchPage() {
  const [tab, setTab] = useState(0);
  const data = [
    {
      title: 'Trying black top with camo pants for Autumn...',
      user_profile: images.User,
      user_name: ' Christine Jingle',
      fav: '50',
      image: images.Post_1,
    },
    {
      title: 'Trying black top with camo pants for Autumn...',
      user_profile: images.User,
      user_name: ' Christine Jingle',
      fav: '50',
      image: images.Post_2,
    },
    {
      title: 'Trying black top with camo pants for Autumn...',
      user_profile: images.User,
      user_name: ' Christine Jingle',
      fav: '50',
      image: images.Post_1,
    },
    {
      title: 'Trying black top with camo pants for Autumn...',
      user_profile: images.User,
      user_name: ' Christine Jingle',
      fav: '50',
      image: images.Post_2,
    },
    {
      title: 'Trying black top with camo pants for Autumn...',
      user_profile: images.User,
      user_name: ' Christine Jingle',
      fav: '50',
      image: images.Post_1,
    },
    {
      title: 'Trying black top with camo pants for Autumn...',
      user_profile: images.User,
      user_name: ' Christine Jingle',
      fav: '50',
      image: images.Post_2,
    },
  ];

  const hashTagData = [
    {hashTagText: '#koreanstyle', followType: 'Follow'},
    {hashTagText: '#modernfashion', followType: 'Follow'},
    {hashTagText: '#autumnlook', followType: 'Following'},
    {hashTagText: '#printedjeans', followType: 'Follow'},
  ];

  const userData = [
    {
      image: require('../../assets/img/profile.png'),
      userName: 'Sarah',
      tagged: '@kiki',
      followType: 'Follow',
    },
    {
      image: require('../../assets/img/profile.png'),
      userName: 'Leon',
      tagged: '@leon',
      followType: 'Following',
    },
    {
      image: require('../../assets/img/profile.png'),
      userName: 'Dante',
      tagged: '@dante',
      followType: 'Follow',
    },
  ];

  const _renderUserData = ({item}) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 10,
          paddingHorizontal: 15,
        }}>
        <View style={{flexDirection: 'row'}}>
          <View>
            <Image
              source={item.image}
              style={{height: 40, width: 40, resizeMode: 'contain'}}></Image>
          </View>
          <View style={{justifyContent: 'center', left: 10}}>
            <Text
              style={{
                fontFamily: 'Helvetica Now Micro',
                fontSize: 12,
                fontWeight: '500',
                color: '#161616',
              }}>
              {item.userName}
            </Text>
            <Text
              style={{
                fontFamily: 'Helvetica Now Micro',
                fontSize: 12,
                fontWeight: '500',
                color: '#6B727C',
              }}>
              {item.tagged}
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor:
              item.followType == 'Following' ? '#fff' : '#A8D8FF',
            borderRadius: 15,
            height: 27,
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: item.followType == 'Following' ? 0.5 : 0,
          }}>
          <Text
            style={{
              alignSelf: 'center',
              paddingHorizontal: 15,
              color: item.followType == 'Following' ? '#6B727C' : '#fff',
              fontFamily: 'Helvetica Now Micro',
              fontSize: 10,
              fontWeight: '500',
            }}>
            {item.followType}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  const _renderItem = ({item}) => {
    return (
      <View style={{maxHeight: '100%'}}>
        <TouchableOpacity
          // onPress={() => setIndex(1)}
          onLongPress={() => pressShortcut()}
          style={{alignItems: 'center', justifyContent: 'center'}}>
          <Image
            style={{
              height: 180,
              width: 180,
              resizeMode: 'contain',
              borderRadius: 10,
            }}
            // source={{uri: item.itemImage}}>
            source={require('../../assets/img/pent.png')}></Image>
        </TouchableOpacity>
        <View style={{width: 180, alignSelf: 'center'}}>
          <Text style={{marginVertical: 10}}>{item.itemName}</Text>
          <TouchableOpacity
            style={{backgroundColor: '#F19BA8', width: '60%', borderRadius: 4}}>
            <Text style={{padding: 5, alignSelf: 'center', color: '#fff'}}>
              {item.deliveryType}
            </Text>
          </TouchableOpacity>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              marginTop: 15,
            }}>
            <Text>{item.price}</Text>
            <Text style={{color: '#F33737', marginRight: 5}}>
              {item.leftItem}
            </Text>
          </View>
          {item?.soldOut && (
            <Text style={{textDecorationStyle: 'dashed', marginVertical: 10}}>
              {item.soldOut}
            </Text>
          )}
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text
              style={{
                textDecorationLine: 'line-through',
                textDecorationColor: '#BEBEBE',
                color: '#BEBEBE',
                marginVertical: 15,
              }}>
              {item.orgPrice}
            </Text>
            <Image
              style={{
                heigh: 10,
                width: 15,
                resizeMode: 'contain',
                bottom: item?.soldOut ? 40 : 10,
                right: 10,
              }}
              source={require('../../assets/img/bookmark.png')}></Image>
          </View>
        </View>
      </View>
    );
  };

  const _renderHashTag = ({item}) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 10,
          paddingHorizontal: 15,
        }}>
        <View>
          <Text
            style={{
              fontFamily: 'Helvetica Now Micro',
              fontSize: 12,
              fontWeight: '500',
              color: '#161616',
            }}>
            {item.hashTagText}
          </Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor:
              item.followType == 'Following' ? '#fff' : '#A8D8FF',
            borderRadius: 15,
            height: 27,
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: item.followType == 'Following' ? 0.5 : 0,
          }}>
          <Text
            style={{
              alignSelf: 'center',
              paddingHorizontal: 15,
              color: item.followType == 'Following' ? '#6B727C' : '#fff',
              fontFamily: 'Helvetica Now Micro',
              fontSize: 10,
              fontWeight: '500',
            }}>
            {item.followType}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <View style={{paddingTop: 5, marginTop: 10}}>
        <SearchSlider
          tab={tab}
          onLongBook={() => setTab(0)}
          onOuter={() => setTab(1)}
          onDress={() => setTab(2)}
          onSkirt={() => setTab(3)}
        />
      </View>
      <ScrollView style={styles.PostView} showsVerticalScrollIndicator={false}>
        {tab == 0 ? (
          <View
            style={{
              flexDirection: 'row',
              flex: 1,
              marginTop: 10,
              marginBottom: '35%',
            }}>
            {data && data.length > 0 ? (
              <FlatList
                data={data}
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
                              {item.fav}
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
        ) : tab == 1 ? (
          <FlatList
            key={'_'}
            contentContainerStyle={{
              alignItems: 'center',
              justifyContent: 'center',
            }}
            data={ShopFeed}
            renderItem={_renderItem}
            numColumns={2}
            showsVerticalScrollIndicator={false}
          />
        ) : tab == 2 ? (
          <FlatList
            style={{marginTop: 15}}
            data={hashTagData}
            renderItem={_renderHashTag}
          />
        ) : (
          <FlatList
            style={{marginTop: 15}}
            data={userData}
            renderItem={_renderUserData}
          />
        )}
      </ScrollView>
    </View>
  );
}
