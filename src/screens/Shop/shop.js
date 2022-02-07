import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  ImageBackground,
  FlatList,
  TouchableOpacity,
  ScrollView,
  TouchableWithoutFeedback,
  Dimensions,
  Platform,
} from 'react-native';
import ShopHeader from '../../components/ShopHeader/shopHeader';
import ShopFeed from '../../api/shopFeed.json';
import {Actionsheet, Box, Circle} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import SearchHeader from '../../components/SearchHeader/index';
import SearchPage from '../SearchPageScreen/index';

const {height, width} = Dimensions.get('screen');

export default function App({navigation}) {
  const [tab, setTab] = useState(0);
  const [isShowing, setIsShowing] = useState(false);
  const [tabSlider, setTabSlider] = useState(0);
  const [index, setIndex] = useState(0);
  const [size, setSizeNum] = useState(0);
  const [search, setSearch] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [
    require('../../assets/img/img1.png'),
    require('../../assets/img/img2.png'),
    require('../../assets/img/img3.png'),
    require('../../assets/img/img4.png'),
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

  const _renderSliderProduct = () => {
    return (
      <ImageBackground
        source={require('../../assets/img/prdPent.png')}
        style={{
          height: 478,
          width: width,
        }}>
        <Image
          source={require('../../assets/img/prdTransparent.png')}
          style={{
            width: '100%',
            height: 56,
            resizeMode: 'stretch',
            position: 'absolute',
          }}
        />
      </ImageBackground>
    );
  };

  const sliderDataProduct = [
    require('../../assets/img/prdPent.png'),
    require('../../assets/img/prdPent.png'),
    require('../../assets/img/prdPent.png'),
    require('../../assets/img/prdPent.png'),
  ];

  const starData = [
    require('../../assets/img/yellowStar.png'),
    require('../../assets/img/yellowStar.png'),
    require('../../assets/img/yellowStar.png'),
    require('../../assets/img/yellowStar.png'),
    require('../../assets/img/yellowStar.png'),
  ];

  const productItem = [
    {
      title: 'Mickey Mouseprint cardigan and jeans set',
      image: require('../../assets/img/img2.png'),
    },
    {
      title: 'Mickey Mouseprint cardigan and jeans set',
      image: require('../../assets/img/img3.png'),
    },
    {
      title: 'Mickey Mouseprint cardigan and jeans set',
      image: require('../../assets/img/img4.png'),
    },
    {
      title: 'Mickey Mouseprint cardigan and jeans set',
      image: require('../../assets/img/img1.png'),
    },
  ];

  const _renderProduct = ({item}) => {
    return (
      <ImageBackground
        borderRadius={10}
        style={{height: 160, width: 160, marginBottom: 10}}
        source={item.image}>
        <ImageBackground
          borderBottomLeftRadius={10}
          borderBottomRightRadius={10}
          style={{
            width: '100%',
            height: 46,
            position: 'absolute',
            bottom: 0,
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
          source={require('../../assets/img/productBg.png')}>
          <Text
            style={{
              fontFamily: 'Helvetica Now Micro',
              fontSize: 10,
              color: '#fff',
              padding: 5,
            }}>
            Mickey Mouseprint cardigan and jeans set
          </Text>
        </ImageBackground>
      </ImageBackground>
    );
  };

  const _renderStar = ({item}) => {
    return (
      <View>
        <Image
          style={{
            height: 28,
            width: 29,
            resizeMode: 'contain',
            marginRight: 20,
          }}
          source={item}></Image>
      </View>
    );
  };

  const sizeData = [32, 34, 36, 38, 40];
  const _renderImages = ({item}) => {
    return (
      <Image
        style={{
          height: 109,
          width: 79,
          resizeMode: 'contain',
          borderRadius: 10,
          marginRight: 10,
        }}
        source={item}></Image>
    );
  };
  const _renderSize = ({item, index}) => {
    console.log('inde====>', index, size);
    const getorigin = index === size;
    return (
      <TouchableOpacity
        onPress={() => setSizeNum(index)}
        style={{
          borderWidth: 1,
          borderRadius: 50,
          borderColor: getorigin ? '#A8D8FF' : '#DADADA',
          marginRight: 5,
          height: 46,
          width: 46,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{fontFamily: 'Helvetica Now Micro', fontSize: 12}}>
          {item}
        </Text>
      </TouchableOpacity>
    );
  };

  const pressShortcut = () => {
    setTabSlider(1);
    setIsShowing(true);
  };

  const _renderItem = ({item}) => {
    return (
      <View style={{maxHeight: '100%'}}>
        <TouchableOpacity
          onPress={() => setIndex(1)}
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

  const closePress = () => {
    setTimeout(() => {
      setTabSlider(0);
    }, 500),
      setIsShowing(false);
  };

  const sliderData = [
    require('../../assets/img/shopImage.png'),
    require('../../assets/img/shopImage.png'),
    require('../../assets/img/shopImage.png'),
    require('../../assets/img/shopImage.png'),
  ];

  const historyData = [
    {
      recencyImage: require('../../assets/img/clock.png'),
      historyName: 'Korean style',
    },
    {
      recencyImage: require('../../assets/img/clock.png'),
      historyName: 'Mickey Mouseprint cardigan',
    },
    {
      recencyImage: require('../../assets/img/clock.png'),
      historyName: 'Graduation',
    },
    {
      recencyImage: require('../../assets/img/clock.png'),
      historyName: 'Summer',
    },
    {
      recencyImage: require('../../assets/img/clock.png'),
      historyName: 'Japanese style',
    },
    {
      recencyImage: require('../../assets/img/clock.png'),
      historyName: 'Minnie Mouseprint cardigan',
    },
    {
      recencyImage: require('../../assets/img/clock.png'),
      historyName: 'School Opening',
    },
    {
      recencyImage: require('../../assets/img/clock.png'),
      historyName: 'Winter Season',
    },
  ];

  const _renderSlider = data => {
    console.log('data---->', data.item);
    return (
      <TouchableWithoutFeedback onPress={() => setIsShowing(true)}>
        <ImageBackground
          style={{
            // resizeMode: 'stretch',
            height: 180,
            width: width,
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}
          source={data.item}></ImageBackground>
      </TouchableWithoutFeedback>
    );
  };

  const searchFuc = value => {
    const len = value.length;
    if (len == 0) {
      setActiveIndex(1);
      setSearch(2);
    } else if (len >= 3) {
      setActiveIndex(2);
      setSearch(3);
    } else if (len == 1 || len == 2) {
      setActiveIndex(1);
      setSearch(3);
    } else {
    }
  };

  const _renderItemHistory = value => {
    let getValue = value.item;
    return (
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          padding: 5,
          alignItems: 'center',
          paddingLeft: 10,
        }}>
        <Image
          source={getValue.recencyImage}
          style={{height: 15, width: 15, resizeMode: 'contain'}}></Image>
        <Text
          style={{
            marginLeft: 10,
            color: '#6B727C',
            fontSize: 12,
            fontWeight: '400',
            fontFamily: 'Helvetica Now Micro',
          }}>
          {getValue.historyName}
        </Text>
      </TouchableOpacity>
    );
  };

  const focusedFun = () => {
    setSearch(1);
    setActiveIndex(1);
  };

  const backPressFun = () => {
    setSearch(0);
    setActiveIndex(0);
  };

  return index == 0 ? (
    <View style={{flex: 1}}>
      {tabSlider == 0 ? (
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
      ) : (
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
                paddingBottom: 15,
              }}>
              <View />
              <Text style={{fontFamily: 'Helvetica Now Micro'}}>Shortcuts</Text>
              <TouchableOpacity onPress={() => closePress()}>
                <Image
                  style={{height: 20, width: 20, resizeMode: 'contain'}}
                  source={require('../../assets/img/close.png')}></Image>
              </TouchableOpacity>
            </View>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  width: '100%',
                  marginVertical: 20,
                }}>
                <TouchableOpacity
                  style={{alignItems: 'center', width: '33.3%'}}>
                  <Image
                    style={{
                      marginVertical: 9,
                      height: 22,
                      width: 22,
                      resizeMode: 'contain',
                    }}
                    source={require('../../assets/img/bag.png')}></Image>
                  <Text
                    style={{fontFamily: 'Helvetica Now Micro', fontSize: 10}}>
                    Shopping Bag
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{alignItems: 'center', width: '33.3%'}}>
                  <Image
                    style={{
                      marginVertical: 9,
                      height: 22,
                      width: 22,
                      resizeMode: 'contain',
                    }}
                    source={require('../../assets/img/schedule.png')}></Image>
                  <Text
                    style={{fontFamily: 'Helvetica Now Micro', fontSize: 10}}>
                    Orders
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{alignItems: 'center', width: '33.3%'}}>
                  <Image
                    style={{
                      marginVertical: 9,
                      height: 22,
                      width: 22,
                      resizeMode: 'contain',
                    }}
                    source={require('../../assets/img/bookmark.png')}></Image>
                  <Text
                    style={{fontFamily: 'Helvetica Now Micro', fontSize: 10}}>
                    Wishlist
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  width: '100%',
                  marginVertical: 20,
                }}>
                <TouchableOpacity
                  style={{alignItems: 'center', width: '33.3%'}}>
                  <Image
                    style={{
                      marginVertical: 9,
                      height: 22,
                      width: 22,
                      resizeMode: 'contain',
                    }}
                    source={require('../../assets/img/customer.png')}></Image>
                  <Text
                    style={{fontFamily: 'Helvetica Now Micro', fontSize: 10}}>
                    Customer
                  </Text>
                  <Text
                    style={{fontFamily: 'Helvetica Now Micro', fontSize: 10}}>
                    Service
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{alignItems: 'center', width: '33.3%'}}>
                  <Image
                    style={{
                      marginVertical: 9,
                      height: 22,
                      width: 22,
                      resizeMode: 'contain',
                    }}
                    source={require('../../assets/img/addBook.png')}></Image>
                  <Text
                    style={{fontFamily: 'Helvetica Now Micro', fontSize: 10}}>
                    Address
                  </Text>
                  <Text
                    style={{fontFamily: 'Helvetica Now Micro', fontSize: 10}}>
                    Book
                  </Text>
                </TouchableOpacity>
                <View style={{alignItems: 'center', width: '33.3%'}}></View>
              </View>
            </View>
            <Actionsheet.Item></Actionsheet.Item>
          </Actionsheet.Content>
        </Actionsheet>
      )}
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <Box
          style={{
            position: 'absolute',
            right: 20,
            bottom: Platform.OS === 'ios' ? 80 : 80,
            zIndex: 1,
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Shopping_Bag');
            }}>
            <Circle size={10} bg="skyblue">
              <Icon name="shopping-bag" color="white" />
            </Circle>
          </TouchableOpacity>
        </Box>
        <SearchHeader
          searchMode={activeIndex}
          inputValue={value => searchFuc(value)}
          getFocus={() => focusedFun()}
          getSearch={search}
          backPress={() => backPressFun()}
        />
        {activeIndex == 0 ? (
          <View style={{marginTop: 10, flex: 1}}>
            <View>
              <FlatList
                data={sliderData}
                decelerationRate="fast"
                bounces={false}
                horizontal
                renderItem={_renderSlider}
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}
              />
              <View
                style={{
                  backgroundColor: '#606061',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  width: '10%',
                  bottom: 8,
                  borderRadius: 5,
                  position: 'absolute',
                  alignSelf: 'center',
                }}>
                <Text style={{color: '#fff', padding: 3}}>1/12</Text>
              </View>
            </View>
            <View style={{flex: 1}}>
              <ScrollView
                horizontal
                style={{marginTop: 10, marginBottom: 10, height: 50}}>
                <ShopHeader
                  tab={tab}
                  onLongBook={() => setTab(0)}
                  onOuter={() => setTab(1)}
                  onDress={() => setTab(2)}
                  onSkirt={() => setTab(3)}
                  onPants={() => setTab(4)}
                />
              </ScrollView>
              <FlatList
                contentContainerStyle={{
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                data={ShopFeed}
                renderItem={_renderItem}
                numColumns={2}
                showsVerticalScrollIndicator={false}
              />
            </View>
          </View>
        ) : activeIndex == 1 ? (
          <View style={{flex: 1}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 10,
              }}>
              <Text
                style={{
                  color: 'black',
                  fontSize: 12,
                  fontWeight: '500',
                  fontFamily: 'Helvetica Now Micro',
                }}>
                History
              </Text>
              <Text
                style={{
                  color: '#F33737',
                  fontSize: 12,
                  fontWeight: '500',
                  fontFamily: 'Helvetica Now Micro',
                }}>
                Clear
              </Text>
            </View>
            <View>
              <FlatList
                scrollEnabled={false}
                style={{height: '100%'}}
                data={historyData}
                renderItem={_renderItemHistory}
              />
            </View>
          </View>
        ) : activeIndex == 2 ? (
          <SearchPage />
        ) : null}
      </SafeAreaView>
    </View>
  ) : (
    <View style={{flex: 1}}>
      <ScrollView>
        <View style={{flex: 1}}>
          <SafeAreaView style={{flexDirection: 'row'}}>
            <View>
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
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  padding: 10,
                  position: 'absolute',
                  width: width,
                }}>
                <TouchableOpacity onPress={() => setIndex(0)}>
                  <Image
                    source={require('../../assets/img/back.png')}
                    style={{
                      height: 18,
                      width: 18,
                      resizeMode: 'contain',
                    }}></Image>
                </TouchableOpacity>
                <Image
                  source={require('../../assets/img/whiteShare.png')}
                  style={{
                    height: 25,
                    width: 25,
                    resizeMode: 'contain',
                  }}></Image>
              </View>
              <View
                style={{
                  backgroundColor: '#606061',
                  alignSelf: 'center',
                  justifyContent: 'flex-end',
                  width: '10%',
                  bottom: 8,
                  borderRadius: 5,
                  position: 'absolute',
                  alignItems: '',
                }}>
                <Text style={{color: '#fff', padding: 3, alignSelf: 'center'}}>
                  1/12
                </Text>
              </View>
            </View>
          </SafeAreaView>
          <View style={{borderBottomWidth: 1, borderColor: '#F5F5F5'}}>
            <View style={{padding: 10, width: '100%'}}>
              <Text>Mickey Mouseprint cardigan and jeans summer style set</Text>
              <View style={{flexDirection: 'row'}}>
                <Text>Rp 479.000 </Text>
                <Text>Rp 899.000</Text>
              </View>
            </View>
          </View>
          <View style={{width: '100%', padding: 10}}>
            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={{alignSelf: 'center'}}>Highlights</Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text>See All</Text>
                <Image
                  style={{
                    height: 25,
                    width: 25,
                    resizeMode: 'contain',
                    alignSelf: 'center',
                  }}
                  source={require('../../assets/img/rightArrow.png')}></Image>
              </View>
            </View>
            <View>
              <FlatList
                data={images}
                showsHorizontalScrollIndicator={false}
                horizontal
                renderItem={_renderImages}
              />
            </View>
            <Text style={{paddingVertical: 10}}>Size</Text>
            <View>
              <FlatList
                data={sizeData}
                showsHorizontalScrollIndicator={false}
                horizontal
                renderItem={_renderSize}
              />
            </View>
            <Text style={{paddingVertical: 10}}>Color</Text>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                onPress={() => setSizeNum(index)}
                style={{
                  borderWidth: 1,
                  borderRadius: 50,
                  borderColor: '#A8D8FF',
                  marginRight: 5,
                  padding: 10,
                  height: 46,
                  width: 46,
                  backgroundColor: '#708BA0',
                }}></TouchableOpacity>
              <TouchableOpacity
                onPress={() => setSizeNum(index)}
                style={{
                  borderWidth: 1,
                  borderRadius: 50,
                  borderColor: '#DADADA',
                  marginRight: 5,
                  padding: 10,
                  height: 46,
                  width: 46,
                  backgroundColor: '#F0EEEF',
                }}></TouchableOpacity>
            </View>
            <Text style={{paddingVertical: 10}}>Description</Text>
            <View style={{alignItems: 'center'}}>
              <Image
                style={{height: 434, width: 350, resizeMode: 'stretch'}}
                source={require('../../assets/img/thumbnail1.png')}></Image>
            </View>
            <View style={{alignItems: 'center'}}>
              <Image
                style={{
                  height: 328,
                  width: 350,
                  resizeMode: 'stretch',
                  marginTop: 5,
                }}
                source={require('../../assets/img/thumbnail2.png')}></Image>
            </View>
            <View style={{alignItems: 'center'}}>
              <Image
                style={{
                  height: 328,
                  width: 350,
                  resizeMode: 'stretch',
                  marginTop: 5,
                }}
                source={require('../../assets/img/thumbnail3.png')}></Image>
            </View>
          </View>
          <View>
            <View style={{padding: 10}}>
              <FlatList
                numColumns={2}
                data={productItem}
                renderItem={_renderProduct}
                scrollEnabled={false}
                columnWrapperStyle={{justifyContent: 'space-between'}}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{padding: 10}}
              />
              <View
                style={{
                  flexDirection: 'row',
                  width: '100%',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: 10,
                }}>
                <Text style={{alignSelf: 'center'}}>Reviews</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <Text style={{color: '#C8C8C8'}}>See All</Text>
                  <Image
                    style={{
                      height: 25,
                      width: 25,
                      resizeMode: 'contain',
                      alignSelf: 'center',
                    }}
                    source={require('../../assets/img/rightArrow.png')}></Image>
                </View>
              </View>
              <View
                style={{
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingBottom: 50,
                  padding: 10,
                }}>
                <View>
                  <Text>5.0</Text>
                  <Text style={{color: '#C8C8C8'}}>32 Review</Text>
                </View>
                <View style={{marginTop: 10, alignSelf: 'center'}}>
                  <FlatList
                    data={starData}
                    horizontal
                    renderItem={_renderStar}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <SafeAreaView />
    </View>
  );
}
