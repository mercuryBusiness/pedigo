import {FlatList, ScrollView} from 'native-base';
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function ProductScreen() {
  const [size, setSizeNum] = useState(0);
  const images = [
    require('../../assets/img/img1.png'),
    require('../../assets/img/img2.png'),
    require('../../assets/img/img3.png'),
    require('../../assets/img/img4.png'),
  ];

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
  return (
    <ScrollView style={styles.maincontainer}>
      <SafeAreaView style={{flexDirection: 'row'}}>
        <ImageBackground
          source={require('../../assets/img/prdPent.png')}
          style={{
            height: 478,
            width: '100%',
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
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              padding: 10,
            }}>
            <Image
              source={require('../../assets/img/back.png')}
              style={{height: 18, width: 18, resizeMode: 'contain'}}></Image>
            <Image
              source={require('../../assets/img/whiteShare.png')}
              style={{height: 25, width: 25, resizeMode: 'contain'}}></Image>
          </View>
          <View
            style={{
              backgroundColor: '#606061',
              alignSelf: 'center',
              justifyContent: 'flex-end',
              width: '10%',
              bottom: 15,
              borderRadius: 5,
              position: 'absolute',
              alignItems: '',
            }}>
            <Text style={{color: '#fff', padding: 3, alignSelf: 'center'}}>
              1/12
            </Text>
          </View>
        </ImageBackground>
      </SafeAreaView>
      <View style={{borderBottomWidth: 1, borderColor: '#F5F5F5'}}>
        <View style={{padding: 10, width: '100%'}}>
          <Text
            style={{
              fontFamily: 'Helvetica Now Micro',
              fontSize: 12,
              lineHeight: 17,
            }}>
            Mickey Mouseprint cardigan and jeans summer style set
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                fontFamily: 'Helvetica Now Micro',
                fontSize: 12,
                lineHeight: 17,
              }}>
              Rp 479.000{' '}
            </Text>
            <Text
              style={{
                fontFamily: 'Helvetica Now Micro',
                fontSize: 12,
                lineHeight: 17,
                textDecorationLine: 'line-through',
                color: '#DBDBDB',
                marginLeft: 10,
              }}>
              Rp 899.000
            </Text>
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
          <Text
            style={{
              alignSelf: 'center',
              fontFamily: 'Helvetica Now Micro',
              fontSize: 12,
            }}>
            Highlights
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginRight: 10,
            }}>
            <Text
              style={{
                color: '#CACACA',
                fontFamily: 'Helvetica Now Micro',
                fontSize: 12,
              }}>
              See All
            </Text>
            <Image
              style={{
                height: 18,
                width: 18,
                resizeMode: 'contain',
                alignSelf: 'center',
              }}
              source={require('../../assets/img/rightArrow.png')}></Image>
          </View>
        </View>
        <View style={{marginTop: 5}}>
          <FlatList
            data={images}
            showsHorizontalScrollIndicator={false}
            horizontal
            renderItem={_renderImages}
          />
        </View>
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
          />
        </View>
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
        <Text
          style={{
            paddingVertical: 10,
            fontFamily: 'Helvetica Now Micro',
            fontSize: 12,
          }}>
          Description
        </Text>
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
        {/* <View style={{alignItems: 'center'}}>
            <Image
              style={{
                height: 328,
                width: 350,
                resizeMode: 'stretch',
                marginTop: 5,
              }}
              source={require('../../assets/img/thumbnail3.png')}></Image>
          </View> */}
      </View>
      <SafeAreaView />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
  },
});
