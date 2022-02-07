import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  FlatList,
} from 'react-native';
import Header from '../../components/header';
import {useSelector, useDispatch} from 'react-redux';
import {goToIndex} from '../../redux/homeScreen';
import {goToBlog} from '../../redux/tab';
import Video from 'react-native-video';
import {Actionsheet} from 'native-base';

const Vlog = () => {
  const [value, setValue] = useState(0);
  const [more, setMore] = useState(false);
  const [fullScreen, setFullScreen] = useState(true);
  const blobIndex = useSelector(state => state.tab.indexTab);
  const [isShowing, setIsShowing] = useState(false);
  const [isComment, setIsComment] = useState(false);
  const dispatch = useDispatch();

  const commentData = [
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
        'You always give good advice. I already like this combination!',
    },
  ];

  const data = [
    {
      productImage: require('../../assets/img/shirt.png'),
      productTitle: 'Embroidered Logo Cotton Gabardine Zip-front Shirt',
      disPrice: 'Rp 999.000',
      orgPrice: 'Rp 1.899.000',
      tubelightIcon: require('../../assets/img/lightbulb.png'),
      bookmarkIcon: require('../../assets/img/bookmark.png'),
    },
    {
      productImage: require('../../assets/img/shirt.png'),
      productTitle: 'Embroidered Logo Cotton Gabardine Zip-front Shirt',
      disPrice: 'Rp 999.000',
      orgPrice: 'Rp 1.899.000',
      tubelightIcon: require('../../assets/img/lightbulb.png'),
      bookmarkIcon: require('../../assets/img/bookmark.png'),
    },
  ];
  const _renderCommentData = ({item}) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginTop: 10,
          borderBottomWidth: 1,
          borderColor: '#F8F8F8',
          paddingBottom: 20,
        }}>
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

  const _productItem = ({item}) => {
    console.log('items====>', item);
    return (
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          width: '100%',
          marginVertical: 10,
        }}>
        <View style={{width: '20%'}}>
          <Image
            style={{height: 80, width: 60, resizeMode: 'contain'}}
            source={item.productImage}></Image>
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
            {item.productTitle}
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
              {item.disPrice}
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
              {item.orgPrice}
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
              source={item.tubelightIcon}></Image>
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
            source={item.bookmarkIcon}></Image>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{height: '100%'}}>
      <Actionsheet
        isOpen={isShowing}
        onClose={() => setIsShowing(false)}
        hideDragIndicator>
        <Actionsheet.Content style={{backgroundColor: '#FFF'}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
              marginTop: 10,
              borderBottomWidth: 2,
              borderColor: '#F8F8F8',
              paddingBottom: 18,
            }}>
            <View />

            <Text style={{fontFamily: 'Helvetica Now Micro'}}>Products</Text>

            <TouchableOpacity onPress={() => setIsShowing(false)}>
              <Image
                style={{height: 20, width: 20, resizeMode: 'contain'}}
                source={require('../../assets/img/close.png')}></Image>
            </TouchableOpacity>
          </View>
          <FlatList
            contentContainerStyle={{marginVertical: 0}}
            data={data}
            renderItem={_productItem}
          />
          <Actionsheet.Item></Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>
      <Actionsheet
        isOpen={isComment}
        onClose={() => setIsComment(false)}
        hideDragIndicator>
        <Actionsheet.Content style={{backgroundColor: '#FFF'}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
              marginTop: 10,
              borderBottomWidth: 2,
              borderColor: '#F8F8F8',
              paddingBottom: 18,
            }}>
            <View />

            <Text style={{fontFamily: 'Helvetica Now Micro'}}>Comments</Text>

            <TouchableOpacity onPress={() => setIsComment(false)}>
              <Image
                style={{height: 20, width: 20, resizeMode: 'contain'}}
                source={require('../../assets/img/close.png')}></Image>
            </TouchableOpacity>
          </View>
          <FlatList
            contentContainerStyle={{marginVertical: 0}}
            data={commentData}
            renderItem={_renderCommentData}
            showsHorizontalScrollIndicator={false}
            bounces={false}
          />
          <View
            style={{
              backgroundColor: '#F8F8F8',
              borderRadius: 20,
              width: '95%',
              top : 5,
              marginTop : "20%"
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
          <Actionsheet.Item></Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>

      <View style={{height: '92%'}}>
        {/* <ImageBackground
          resizeMode="stretch"
          style={{height: '100%'}}
          source={require('../../assets/img/vlogImage.png')}> */}
        <Video
          source={require('../../assets/video/sample.mp4')} // Can be a URL or a local file.
          ref={ref => {
            this.player = ref;
          }} // Store reference
          onBuffer={this.onBuffer} // Callback when remote video is buffering
          onError={this.videoError} // Callback when video cannot be loaded
          style={styles.backgroundVideo}
        />
        <Image
          style={{
            position: 'absolute',
            top: 0,
            resizeMode: 'stretch',
            height: 250,
          }}
          source={require('../../assets/img/upGradient.png')}></Image>
        <View style={{flex: 1}}>
          <Image
            style={{
              position: 'absolute',
              bottom: 0,
              resizeMode: 'stretch',
              height: 250,
            }}
            source={require('../../assets/img/downGradient.png')}></Image>
          <View style={{top: 10}}>
            <Header back={() => dispatch(goToBlog(1))} />
          </View>
          <View
            style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
            <TouchableOpacity>
              <Image
                style={{
                  position: 'absolute',
                  alignSelf: 'center',
                  justifyContent: 'center',
                  resizeMode: 'contain',
                  height: 50,
                  width: 50,
                  top: 140,
                }}
                source={require('../../assets/img/play.png')}></Image>
            </TouchableOpacity>
          </View>
          <View
            style={{
              justifyContent: 'flex-end',
              flex: 1,
              marginHorizontal: 15,
            }}>
            {fullScreen ? (
              <View>
                <TouchableOpacity
                  onPress={() => setFullScreen(!fullScreen)}
                  style={{alignSelf: 'flex-end'}}>
                  <Image
                    style={{
                      position: 'absolute',
                      resizeMode: 'contain',
                      height: 20,
                      width: 20,
                      bottom: 30,
                      right: 0,
                    }}
                    source={require('../../assets/img/fullScreen.png')}></Image>
                </TouchableOpacity>
              </View>
            ) : (
              <View>
                <TouchableOpacity
                  onPress={() => setIsShowing(true)}
                  style={{
                    justifyContent: 'space-between',
                    backgroundColor: 'rgba(22, 22, 22, 0.5)',
                    height: 30,
                    width: 100,
                    borderRadius: 17.5,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <View>
                    <Text
                      style={{
                        color: '#fff',
                        fontFamily: 'Helvetica Now Micro',
                        fontSize: 12,
                      }}>
                      Products
                    </Text>
                  </View>
                </TouchableOpacity>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 20,
                  }}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image
                      source={require('../../assets/img/profile.png')}
                      style={{
                        height: 35,
                        width: 35,
                        resizeMode: 'contain',
                      }}></Image>
                    <Text
                      style={{
                        alignSelf: 'center',
                        marginLeft: 10,
                        fontFamily: 'Helvetica Now Micro',
                        color: '#fff',
                      }}>
                      Sarah
                    </Text>
                    <View
                      style={{
                        justifyContent: 'space-between',
                        backgroundColor: '#A8D8FF',
                        height: 35,
                        width: 85,
                        borderRadius: 17.5,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginLeft: 10,
                      }}>
                      <View>
                        <Text
                          style={{
                            color: '#fff',
                            fontFamily: 'Helvetica Now Micro',
                            fontSize: 12,
                          }}>
                          Follow
                        </Text>
                      </View>
                    </View>
                  </View>
                  <TouchableOpacity onPress={() => setFullScreen(!fullScreen)}>
                    <Image
                      style={{height: 20, width: 20, resizeMode: 'contain'}}
                      source={require('../../assets/img/minimize.png')}></Image>
                  </TouchableOpacity>
                </View>
                <Text
                  style={{
                    color: '#fff',
                    fontFamily: 'Helvetica Now Micro',
                    fontSize: 12,
                    marginTop: 10,
                  }}>
                  Mickey cardigan and jeans set
                </Text>
                <View style={{flexDirection: 'row'}}>
                  <Text
                    style={{
                      color: '#fff',
                      fontFamily: 'Helvetica Now Micro',
                      fontSize: 12,
                    }}>
                    Ready, set, summer! It’s time to take the{' '}
                  </Text>
                  <TouchableOpacity
                    onPress={() => setMore(!more)}
                    style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Text
                      style={{
                        color: '#C8C8C8',
                        fontFamily: 'Helvetica Now Micro',
                        fontSize: 12,
                      }}>
                      ...More
                    </Text>
                  </TouchableOpacity>
                </View>
                {more && (
                  <View>
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
                        marginTop: 10,
                      }}>
                      06-09-2021
                    </Text>
                  </View>
                )}
                <Image
                  style={{width: '100%%', resizeMode: 'contain'}}
                  source={require('../../assets/img/slider.png')}></Image>
                <View
                  style={{
                    flexDirection: 'row',
                    width: '100%',
                    marginBottom: 10,
                  }}>
                  <View
                    style={{
                      backgroundColor: '#2D2D2D',
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
                        color: '#fff',
                      }}
                      placeholderTextColor={'#fff'}
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
                          color: '#fff',
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
                          tintColor: '#fff',
                        }}
                        source={require('../../assets/img/star.png')}></Image>
                      <Text
                        style={{
                          marginRight: 5,
                          fontSize: 10,
                          fontFamily: 'Helvetica Now Micro',
                          fontWeight: '400',
                          color: '#fff',
                        }}>
                        89
                      </Text>
                    </View>
                    <TouchableOpacity
                      onPress={() => setIsComment(true)}
                      style={{flexDirection: 'row'}}>
                      <Image
                        style={{
                          height: 16,
                          width: 15,
                          resizeMode: 'contain',
                          marginRight: 5,
                          tintColor: '#fff',
                        }}
                        source={require('../../assets/img/comment.png')}></Image>
                      <Text
                        style={{
                          fontSize: 10,
                          fontFamily: 'Helvetica Now Micro',
                          fontWeight: '400',
                          color: '#fff',
                        }}>
                        32
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )}
          </View>
        </View>
        {/* </ImageBackground> */}
      </View>
      <View style={{height: '8%'}}></View>
    </View>
  );
};

var styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default Vlog;
