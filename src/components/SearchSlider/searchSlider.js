import React, {useState} from 'react';
import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';

const SearchSlider = ({
  onLongBook,
  onOuter,
  onDress,
  onSkirt,
  onPants,
  tab,
}) => {
  return (
    <View style={{flexDirection: 'row', width: '100%'}}>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          style={{height: 20, marginHorizontal: 10, marginLeft: 30}}
          onPress={() => onLongBook()}>
          <Text
            style={{
              fontFamily: 'Helvetica Now Micro',
              fontSize: 12,
              fontWeight: '500',
              color: tab == 0 ? 'black' : '#6B727C',
            }}>
            Posts
          </Text>
          {tab == 0 && (
            <Image
              style={{height: 3, width: 20, alignSelf: 'center', top: 2}}
              source={require('../../assets/img/line.png')}></Image>
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginLeft: 10, height: 20, marginHorizontal: 10}}
          onPress={() => onOuter()}>
          <Text
            style={{
              fontFamily: 'Helvetica Now Micro',
              fontSize: 12,
              fontWeight: '500',
              color: tab == 1 ? 'black' : '#6B727C',
            }}>
            Products
          </Text>
          {tab == 1 && (
            <Image
              style={{height: 3, width: 20, alignSelf: 'center', top: 2}}
              source={require('../../assets/img/line.png')}></Image>
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginLeft: 10, height: 20, marginHorizontal: 10}}
          onPress={() => onDress()}>
          <Text
            style={{
              fontFamily: 'Helvetica Now Micro',
              fontSize: 12,
              fontWeight: '500',
              color: tab == 2 ? 'black' : '#6B727C',
            }}>
            Hashtag
          </Text>
          {tab == 2 && (
            <Image
              style={{height: 3, width: 20, alignSelf: 'center', top: 2}}
              source={require('../../assets/img/line.png')}></Image>
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginLeft: 10, height: 20, marginHorizontal: 10}}
          onPress={() => onSkirt()}>
          <Text
            style={{
              fontFamily: 'Helvetica Now Micro',
              fontSize: 12,
              fontWeight: '500',
              color: tab == 3 ? 'black' : '#6B727C',
            }}>
            Users
          </Text>
          {tab == 3 && (
            <Image
              style={{height: 3, width: 20, alignSelf: 'center', top: 2}}
              source={require('../../assets/img/line.png')}></Image>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchSlider;
