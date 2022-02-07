import {FlatList, ScrollView} from 'native-base';
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Dimensions,
  TextInput,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
const {height, width} = Dimensions.get('screen');
import {Actionsheet} from 'native-base';
import {goToBlog} from '../../redux/tab';
import {useSelector, useDispatch} from 'react-redux';

export default function blob() {
  const [isShowing, setIsShowing] = useState(false);
  const dispatch = useDispatch();
  const sliderDataProduct = [
    require('../../assets/img/blobImage.png'),
    require('../../assets/img/blobImage.png'),
    require('../../assets/img/blobImage.png'),
    require('../../assets/img/blobImage.png'),
  ];

  const _renderBlobItem = ({item}) => {
    return (
      <View style={{flexDirection: 'row', marginTop: 10}}>
        <View>
          <Image
            style={{height: 32, width: 32}}
            source={item.userImage}></Image>
        </View>
        <View style={{marginLeft: 10}}>
          <Text
            style={{
              color: '#161616',
              fontFamily: 'Helvetica Now Micro',
              fontWeight: '500',
              fontSize: 12,
            }}>
            {item.userName}
          </Text>
          <Text
            style={{
              color: '#161616',
              fontFamily: 'Helvetica Now Micro',
              fontWeight: '400',
              fontSize: 10,
              width: '80%',
              lineHeight: 17,
            }}>
            {item.description}
          </Text>
        </View>
      </View>
    );
  };

  const blobData = [
    {
      userImage: require('../../assets/img/blobProfile.png'),
      userName: 'Anita Gibbs',
      description:
        'You always give good advice. I already like this combination!',
    },
    {
      userImage: require('../../assets/img/blobProfile.png'),
      userName: 'Anita Gibbs',
      description:
        'You always give good advice. I already like this combination! and You always give good fashion and accessories reccomendation',
    },
    {
      userImage: require('../../assets/img/blobProfile.png'),
      userName: 'Anita Gibbs',
      description:
        'You always give good advice. I already like this combination!',
    },
  ];

  const _renderSliderProduct = ({item}) => {
    console.log('item=====>', item);
    return (
      <ImageBackground
        source={item}
        style={{
          height: 360,
          width: width,
        }}
        resizeMode="stretch"></ImageBackground>
    );
  };

  const socialdata = [
    {img: require('../../assets/img/whatsapp.png'), name: 'Whatsapp'},
    {img: require('../../assets/img/lineChat.png'), name: 'Line'},
    {img: require('../../assets/img/telegram.png'), name: 'Telegram'},
    {img: require('../../assets/img/duplicate.png'), name: 'Copy link'},
    {img: require('../../assets/img/ban.png'), name: 'Not Interested'},
    {img: require('../../assets/img/exclamation.png'), name: 'Report'},
  ];

  const _renderIcons = ({item}) => {
    return (
      <View style={{alignItems: 'center'}}>
        <Image
          style={{height: 25, width: 25, resizeMode: 'contain'}}
          source={item.img}></Image>
        <Text
          style={{
            fontFamily: 'Helvetica Now Micro',
            fontWeight: '400',
            fontSize: 10,
            marginTop: 10,
          }}>
          {item.name}
        </Text>
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <Actionsheet
        isOpen={isShowing}
        onClose={() => setIsShowing(false)}
        hideDragIndicator>
        <Actionsheet.Content style={{backgroundColor: '#FFF'}}>
          <FlatList
            data={socialdata}
            numColumns={3}
            columnWrapperStyle={{padding: 30, justifyContent: 'space-between'}}
            style={{width: '100%'}}
            renderItem={_renderIcons}
          />
          <TouchableOpacity
          onPress={()=>setIsShowing(false)}
            style={{width: 328, backgroundColor: '#F8F8F8', borderRadius: 10}}>
            <Text
              style={{
                fontFamily: 'Helvetica Now Micro',
                fontWeight: '400',
                fontSize: 12,
                padding: 10,
                alignSelf: 'center',
                color: '#6B727C',
              }}>
              Cancel
            </Text>
          </TouchableOpacity>
          <Actionsheet.Item></Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>
      <ScrollView>
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginHorizontal: '2%',
            }}>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity onPress={()=>dispatch(goToBlog(1))}>
              <Image
                style={{height: 25, width: 25, alignSelf: 'center'}}
                source={require('../../assets/img/greyBack.png')}></Image>
                </TouchableOpacity>
              <Image
                style={{
                  height: 32,
                  width: 32,
                  alignSelf: 'center',
                  marginLeft: 10,
                }}
                source={require('../../assets/img/profile.png')}></Image>
              <Text style={{alignSelf: 'center', marginLeft: 10, fontSize: 12}}>
                Sarah
              </Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TouchableOpacity
                style={{
                  backgroundColor: '#A8D8FF',
                  borderRadius: 15,
                  marginRight: 10,
                }}>
                <Text
                  style={{
                    alignSelf: 'center',
                    paddingHorizontal: 15,
                    paddingVertical: 5,
                    fontSize: 10,
                    color: '#fff',
                  }}>
                  Follow
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setIsShowing(true)}>
                <Image
                  style={{height: 25, width: 25, alignSelf: 'center'}}
                  source={require('../../assets/img/gretyShare.png')}></Image>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <FlatList
              data={sliderDataProduct}
              decelerationRate="fast"
              bounces={false}
              horizontal
              renderItem={_renderSliderProduct}
              pagingEnabled={true}
              showsHorizontalScrollIndicator={false}
            />
            <View
              style={{
                backgroundColor: '#606061',
                alignSelf: 'center',
                justifyContent: 'center',
                width: '10%',
                bottom: 15,
                borderRadius: 5,
                position: 'absolute',
                alignItems: 'center',
              }}>
              <Text style={{color: '#fff', padding: 3, alignSelf: 'center'}}>
                1/12
              </Text>
            </View>
          </View>
        </View>
        <View>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              width: '95%',
              marginVertical: 10,
              alignSelf: 'center',
              backgroundColor: '#F8F8F8',
              padding: 10,
              borderRadius: 5,
            }}>
            <View style={{width: '20%'}}>
              <Image
                style={{height: 80, width: 60, resizeMode: 'contain'}}
                source={require('../../assets/img/blobPent.png')}></Image>
            </View>
            <View style={{width: '60%'}}>
              <Text
                style={{
                  fontFamily: 'Helvetica Now Micro',
                  fontWeight: '400',
                  fontSize: 12,
                  color: '#161616',
                  lineHeight: 18,
                }}>
                Mickey Mouseprint cardigan and jeans set
              </Text>
              <View style={{flexDirection: 'row', marginTop: 10}}>
                <Text
                  style={{
                    fontFamily: 'Helvetica Now Micro',
                    fontWeight: '400',
                    fontSize: 12,
                    color: '#161616',
                    lineHeight: 18,
                  }}>
                  Rp 479.000
                </Text>
                <Text
                  style={{
                    fontFamily: 'Helvetica Now Micro',
                    fontWeight: '400',
                    fontSize: 12,
                    color: '#C8C8C8',
                    textDecorationLine: 'line-through',
                    textDecorationColor: '#BEBEBE',
                    lineHeight: 18,
                    marginLeft: 5,
                  }}>
                  Rp 899.000
                </Text>
              </View>
            </View>
            <View style={{width: '20%'}}>
              <TouchableOpacity>
                <Image
                  style={{
                    height: 20,
                    width: 20,
                    resizeMode: 'contain',
                    alignSelf: 'flex-end',
                  }}
                  source={require('../../assets/img/lightbulb.png')}></Image>
              </TouchableOpacity>
              <Image
                style={{
                  height: 20,
                  width: 20,
                  resizeMode: 'contain',
                  justifyContent: 'flex-end',
                  alignSelf: 'flex-end',
                  marginTop: '50%',
                }}
                source={require('../../assets/img/bookmark.png')}></Image>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{marginHorizontal: 15}}>
          <Text
            style={{
              fontFamily: 'Helvetica Now Micro',
              fontWeight: '500',
              fontSize: 12,
              color: '#161616',
              lineHeight: 18,
            }}>
            Mickey cardigan and jeans set
          </Text>
          <Text
            style={{
              fontFamily: 'Helvetica Now Micro',
              fontWeight: '400',
              fontSize: 12,
              color: 'black',
              lineHeight: 20,
            }}>
            Ready, set,<Text style={{color: '#A8D8FF'}}> #summer </Text> It’s
            time to take the style (stylish) plunge straight into the deep end
            of this season’s fashion dos. Whether it’s now swapping out your
            go-to tote for a colorful new bag or rethinking your accessories
            when the temps soar, here are the 10 fashion rules of summer our
            Stylists swear by @gibss. Ready, set, summer! It’s time to take the
            style (stylish) plunge straight into the deep end of this season’s
            fashion dos. Whether it’s now swapping out your go-to tote for a
            colorful new bag or rethinking your accessories when the temps soar,
            here are the 10 fashion rules of summer our Stylists swear by.
            <Text style={{color: '#A8D8FF'}}> @gibss </Text>.
          </Text>
          <Text
            style={{
              fontFamily: 'Helvetica Now Micro',
              fontWeight: '400',
              fontSize: 12,
              color: 'black',
              lineHeight: 20,
              marginTop: 20,
            }}>
            Ready, set, summer! It’s time to take the style (stylish) plunge
            straight into the deep end of this season’s fashion dos. Whether
            it’s now swapping out your go-to tote for a colorful new bag or
            rethinking your accessories when the temps soar, here are the 10
            fashion rules of summer our Stylists swear by.
          </Text>
          <View style={{marginTop: 10}}>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  color: '#A8D8FF',
                  fontFamily: 'Helvetica Now Micro',
                  fontWeight: '400',
                  fontSize: 12,
                }}>
                @gibss
              </Text>
              <Text
                style={{
                  color: '#A8D8FF',
                  fontFamily: 'Helvetica Now Micro',
                  fontWeight: '400',
                  fontSize: 12,
                  marginLeft: 10,
                }}>
                @anita
              </Text>
            </View>
            <View style={{flexDirection: 'row', marginTop: 10}}>
              <Text
                style={{
                  color: '#A8D8FF',
                  fontFamily: 'Helvetica Now Micro',
                  fontWeight: '400',
                  fontSize: 12,
                }}>
                #fashion
              </Text>
              <Text
                style={{
                  color: '#A8D8FF',
                  fontFamily: 'Helvetica Now Micro',
                  fontWeight: '400',
                  fontSize: 12,
                  marginLeft: 5,
                }}>
                #summer
              </Text>
              <Text
                style={{
                  color: '#A8D8FF',
                  fontFamily: 'Helvetica Now Micro',
                  fontWeight: '400',
                  fontSize: 12,
                  marginLeft: 5,
                }}>
                #mickey
              </Text>
            </View>
            <Text
              style={{
                color: '#C8C8C8',
                fontFamily: 'Helvetica Now Micro',
                fontWeight: '400',
                fontSize: 10,
                marginTop: 15,
              }}>
              06-09-2021
            </Text>
          </View>
        </View>
        <View
          style={{
            borderBottomWidth: 0.5,
            borderColor: '#C8C8C8',
            marginTop: 20,
          }}></View>
        <View style={{padding: 15, paddingBottom: '20%'}}>
          <Text>3 Comment</Text>
          <FlatList data={blobData} renderItem={_renderBlobItem} />
          <View style={{flexDirection: 'row', width: '100%', marginTop: 20}}>
            <View
              style={{
                backgroundColor: '#F8F8F8',
                borderRadius: 20,
                width: '50%',
              }}>
              <TextInput
                style={{
                  padding: 10,
                  width: 152,
                  fontSize: 10,
                  fontFamily: 'Helvetica Now Micro',
                  fontWeight: '400',
                }}
                placeholder="Comment"
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: '50%',
                justifyContent: 'flex-end',
              }}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  style={{
                    height: 16,
                    width: 15,
                    resizeMode: 'contain',
                    marginRight: 5,
                  }}
                  source={require('../../assets/img/like.png')}></Image>
                <Text
                  style={{
                    marginRight: 5,
                    fontSize: 10,
                    fontFamily: 'Helvetica Now Micro',
                    fontWeight: '400',
                  }}>
                  800
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Image
                  style={{
                    height: 16,
                    width: 15,
                    resizeMode: 'contain',
                    marginRight: 5,
                  }}
                  source={require('../../assets/img/star.png')}></Image>
                <Text
                  style={{
                    marginRight: 5,
                    fontSize: 10,
                    fontFamily: 'Helvetica Now Micro',
                    fontWeight: '400',
                  }}>
                  89
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Image
                  style={{
                    height: 16,
                    width: 15,
                    resizeMode: 'contain',
                    marginRight: 5,
                  }}
                  source={require('../../assets/img/comment.png')}></Image>
                <Text
                  style={{
                    fontSize: 10,
                    fontFamily: 'Helvetica Now Micro',
                    fontWeight: '400',
                  }}>
                  32
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
