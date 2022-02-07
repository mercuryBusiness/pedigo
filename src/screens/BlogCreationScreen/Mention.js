import {FlatList} from 'native-base';
import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import fonts from '../../assets/font/fonts';
import Header from '../../components/MentionHeader/index';

export default function Mention({goBack}) {
  const data = [
    {
      img: require('../../assets/img/profile.png'),
      name: 'Anita',
      dec: 'Fashion Influencer',
    },
    {
      img: require('../../assets/img/profile.png'),
      name: 'Neva',
      dec: 'Fashion Influencer',
    },
    {
      img: require('../../assets/img/profile.png'),
      name: 'Gibbs',
      dec: 'Fashion Influencer',
    },
    {
      img: require('../../assets/img/profile.png'),
      name: 'Roman',
      dec: 'Fashion Influencer',
    },
    {
      img: require('../../assets/img/profile.png'),
      name: 'Samuel',
      dec: 'Fashion Influencer',
    },
    {
      img: require('../../assets/img/profile.png'),
      name: 'Artour',
      dec: 'Fashion Influencer',
    },
  ];

  const _renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={{flexDirection: 'row', paddingTop: 15, marginLeft: 5}}>
        <View>
          <Image
            style={{
              height: 40,
              width: 40,
              resizeMode: 'contain',
              borderRadius: 20,
            }}
            source={item.img}></Image>
        </View>
        <View style={{marginLeft: 10}}>
          <Text style={{fontFamily: fonts.fontRegular, fontSize: 12}}>
            {item.name}
          </Text>
          <Text
            style={{
              fontFamily: fonts.fontRegular,
              fontSize: 12,
              color: '#C8C8C8',
            }}>
            {item.dec}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flex: 1}}>
      <Header close={goBack} />
      <View
        style={{borderBottomWidth: 1, borderColor: '#F8F8F8', marginTop: 15}}
      />
      <View style={{marginTop: 10}}>
        <View
          style={{
            backgroundColor: '#F8F8F8',
            height: 40,
            width: '92%',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
            borderRadius: 20,
            paddingHorizontal: 20,
            alignSelf: 'center',
          }}>
          <TextInput
            style={{
              fontFamily: fonts.fontRegular,
              fontSize: 10,
            }}
            placeholder="Search"
            placeholderTextColor={'#C8C8C8'}></TextInput>
          <Image
            style={{height: 12, width: 12, resizeMode: 'contain'}}
            source={require('../../assets/img/search.png')}></Image>
        </View>
        <FlatList style={{padding: 15}} data={data} renderItem={_renderItem} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
