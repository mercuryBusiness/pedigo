import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Actionsheet} from 'native-base';
import {SafeAreaView} from 'react-native-safe-area-context';
import {getWishlist, getProductById} from '../../api/api';

export default function WishList({navigation}) {
  const [isShowing, setIsShowing] = useState(false);
  const [size, setSizeNum] = useState(0);
  const sizeData = [32, 34, 36, 38, 40];
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const data = new FormData();
    data.append('customerid', '3');
    getWishlist(data)
      .then(response => {
        console.log('response===>', response.rows);
        const filterData = response.rows;
        filterData.filter(item => {
          console.log('itemss new--->', item.PRODUCTID);
          const data = new FormData();
          data.append('productid', item.PRODUCTID);
          data.append('storeid', '1');
          getProductById(data).then(res => {
            console.log('response====>', res);
            const newArray = [];
            newArray.push(res.PRODUCT);
            console.log('newArray--->', newArray);
            setProductData(newArray);
          });
        });
      })
      .catch(e => {
        console.log('error--->', e);
      });
  }, []);

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

  const socialdata = [
    {img: require('../../assets/img/whatsapp.png'), name: 'Whatsapp'},
    {img: require('../../assets/img/lineChat.png'), name: 'Line'},
    {img: require('../../assets/img/telegram.png'), name: 'Telegram'},
    {img: require('../../assets/img/duplicate.png'), name: 'Copy link'},
    {img: require('../../assets/img/ban.png'), name: 'Not Interested'},
    {img: require('../../assets/img/exclamation.png'), name: 'Report'},
  ];
  const data = [
    {
      productImage: require('../../assets/img/shirt.png'),
      productTitle: 'Embroidered Logo Cotton Gabardine Zip-front Shirt',
      disPrice: 'Rp 999.000',
      orgPrice: 'Rp 1.899.000',
      tubelightIcon: require('../../assets/img/filled.png'),
      bookmarkIcon: require('../../assets/img/filledBookmark.png'),
    },
    {
      productImage: require('../../assets/img/shirt.png'),
      productTitle: 'Embroidered Logo Cotton Gabardine Zip-front Shirt',
      disPrice: 'Rp 999.000',
      orgPrice: 'Rp 1.899.000',
      tubelightIcon: require('../../assets/img/filled.png'),
      bookmarkIcon: require('../../assets/img/filledBookmark.png'),
    },
    {
      productImage: require('../../assets/img/shirt.png'),
      productTitle: 'Embroidered Logo Cotton Gabardine Zip-front Shirt',
      disPrice: 'Rp 999.000',
      orgPrice: 'Rp 1.899.000',
      tubelightIcon: require('../../assets/img/filled.png'),
      bookmarkIcon: require('../../assets/img/filledBookmark.png'),
    },
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

  const _productItem = ({item}) => {
    console.log('items====>', item.IMAGES);
    return (
      <TouchableOpacity
        onPress={() => setIsShowing(true)}
        style={{
          flexDirection: 'row',
          width: '100%',
          marginVertical: 10,
        }}>
        <View
          style={{
            width: '25%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            style={{height: 106, width: 79, resizeMode: 'contain'}}
            source={item.productImage}></Image>
        </View>
        <View style={{width: '52%', marginLeft: 5}}>
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
          <View style={{flexDirection: 'row', marginTop: 2}}>
            <Text
              style={{
                fontFamily: 'Helvetica Now Micro',
                fontWeight: '400',
                fontSize: 10,
                color: '#161616',
                lineHeight: 18,
              }}>
              {item.disPrice}
            </Text>
            <Text
              style={{
                fontFamily: 'Helvetica Now Micro',
                fontWeight: '400',
                fontSize: 10,
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
                bottom: 5,
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
              marginTop: '80%',
            }}
            source={item.bookmarkIcon}></Image>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{padding: 15, backgroundColor: '#FFFFFF'}}>
      <Actionsheet
        isOpen={isShowing}
        onClose={() => setIsShowing(false)}
        hideDragIndicator>
        <Actionsheet.Content style={{backgroundColor: '#FFF'}}>
          <View style={{width: '100%'}}>
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

              <Text style={{fontFamily: 'Helvetica Now Micro'}}>Options</Text>

              <TouchableOpacity onPress={() => setIsShowing(false)}>
                <Image
                  style={{height: 20, width: 20, resizeMode: 'contain'}}
                  source={require('../../assets/img/close.png')}></Image>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={() => setIsShowing(true)}
              style={{
                flexDirection: 'row',
                width: '100%',
                marginVertical: 10,
              }}>
              <View
                style={{
                  width: '25%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  style={{height: 79, width: 79, resizeMode: 'contain'}}
                  source={require('../../assets/img/shirt.png')}></Image>
              </View>
              <View style={{width: '52%', marginLeft: 5}}>
                <Text
                  style={{
                    fontFamily: 'Helvetica Now Micro',
                    fontWeight: '400',
                    fontSize: 12,
                    color: '#161616',
                    lineHeight: 18,
                    marginTop: 10,
                  }}>
                  Embroidered Logo Cotton Gabardine Zip-front Shirt
                </Text>
                <View style={{flexDirection: 'row', marginTop: 2}}>
                  <Text
                    style={{
                      fontFamily: 'Helvetica Now Micro',
                      fontWeight: '400',
                      fontSize: 10,
                      color: '#161616',
                      lineHeight: 18,
                    }}>
                    Rp 999.000
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'Helvetica Now Micro',
                      fontWeight: '400',
                      fontSize: 10,
                      color: '#C8C8C8',
                      textDecorationLine: 'line-through',
                      textDecorationColor: '#BEBEBE',
                      lineHeight: 18,
                      marginLeft: 5,
                    }}>
                    Rp 1.899.000
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
                      bottom: 5,
                    }}></Image>
                </TouchableOpacity>
                <Image
                  style={{
                    height: 20,
                    width: 20,
                    resizeMode: 'contain',
                    justifyContent: 'flex-end',
                    alignSelf: 'flex-end',
                    marginTop: '80%',
                  }}></Image>
              </View>
            </TouchableOpacity>
            <View style={{padding: 15}}>
              <Text
                style={{
                  paddingVertical: 10,
                  fontFamily: 'Helvetica Now Micro',
                  fontSize: 12,
                }}>
                Size
              </Text>
              <View>
                <FlatList
                  data={sizeData}
                  showsHorizontalScrollIndicator={false}
                  horizontal
                  renderItem={_renderSize}
                  scrollEnabled={false}
                />
              </View>
              <View>
                <Text
                  style={{
                    paddingVertical: 10,
                    fontFamily: 'Helvetica Now Micro',
                    fontSize: 12,
                  }}>
                  Color
                </Text>
                <View style={{flexDirection: 'row'}}>
                  <TouchableOpacity
                    // onPress={() => setSizeNum(0)}
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
                    // onPress={() => setSizeNum(1)}
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
                  <TouchableOpacity
                    // onPress={() => setSizeNum(2)}
                    style={{
                      borderWidth: 1,
                      borderRadius: 50,
                      borderColor: '#DADADA',
                      marginRight: 5,
                      padding: 10,
                      height: 46,
                      width: 46,
                      backgroundColor: '#BB7699',
                    }}></TouchableOpacity>
                  <TouchableOpacity
                    // onPress={() => setSizeNum(3)}
                    style={{
                      borderWidth: 1,
                      borderRadius: 50,
                      borderColor: '#DADADA',
                      marginRight: 5,
                      padding: 10,
                      height: 46,
                      width: 46,
                      backgroundColor: '#474747',
                    }}></TouchableOpacity>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '100%',
                }}>
                <View>
                  <Text
                    style={{
                      paddingVertical: 10,
                      fontFamily: 'Helvetica Now Micro',
                      fontSize: 12,
                    }}>
                    Quantity
                  </Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image
                    style={{
                      height: 20,
                      width: 20,
                      resizeMode: 'contain',
                    }}
                    source={require('../../assets/img/add.png')}></Image>
                  <Text
                    style={{
                      fontFamily: 'Helvetica Now Micro',
                      fontSize: 12,
                      marginHorizontal: 10,
                    }}>
                    2
                  </Text>
                  <Image
                    style={{
                      height: 20,
                      width: 20,
                      resizeMode: 'contain',
                    }}
                    source={require('../../assets/img/minus.png')}></Image>
                </View>
              </View>
            </View>
            {/* <FlatList
            data={socialdata}
            numColumns={3}
            columnWrapperStyle={{padding: 30, justifyContent: 'space-between'}}
            style={{width: '100%'}}
            renderItem={_renderIcons}
          /> */}
            <TouchableOpacity
              onPress={() => setIsShowing(false)}
              style={{
                width: '90%',
                alignSelf: 'center',
                height: 48,
                backgroundColor: '#A8D8FF',
                justifyContent: 'center',
                borderRadius: 10,
                marginTop: '10%',
              }}>
              <Text
                style={{
                  fontFamily: 'Helvetica Now Micro',
                  fontWeight: '500',
                  fontSize: 12,
                  padding: 10,
                  alignSelf: 'center',
                  color: '#FFFFFF',
                }}>
                Add to bag
              </Text>
            </TouchableOpacity>
          </View>
          <Actionsheet.Item></Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          borderBottomWidth: 1,
          borderColor: '#F8F8F8',
          paddingBottom: 15,
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image
            style={{height: 25, width: 25, resizeMode: 'contain'}}
            source={require('../../assets/img/greyBack.png')}></Image>
        </TouchableOpacity>
        <Text
          style={{
            fontFamily: 'Helvetica Now Micro',
            fontWeight: '500',
            fontSize: 12,
          }}>
          Wishlist
        </Text>
        <Text />
      </View>
      <FlatList
        contentContainerStyle={{marginVertical: 0}}
        data={productData}
        style={{height: '100%'}}
        renderItem={_productItem}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
