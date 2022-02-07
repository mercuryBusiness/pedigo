import React, {useState} from 'react';
import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';

const ShopHeader = ({onLongBook, onOuter, onDress, onSkirt, onPants, tab}) => {
  return (
    <View style={{flexDirection: 'row', width: '100%', alignItems: 'center'}}>
      <View
        style={{
          width: '90%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TouchableOpacity style={{height: 20, marginHorizontal : 10, marginLeft : 30}} onPress={() => onLongBook()}>
          <Text
            style={{
              fontFamily: 'Helvetica Now Micro',
              color: tab == 0 ? 'black' : '#6B727C',
            }}>
            Look Book
          </Text>
          {tab == 0 && (
            <Image
              style={{height: 3, width: 20, alignSelf: 'center', top: 2}}
              source={require('../../assets/img/line.png')}></Image>
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginLeft: 10, height: 20, marginHorizontal : 10}}
          onPress={() => onOuter()}>
          <Text
            style={{
              fontFamily: 'Helvetica Now Micro',
              color: tab == 1 ? 'black' : '#6B727C',
            }}>
            Outer
          </Text>
          {tab == 1 && (
            <Image
              style={{height: 3, width: 20, alignSelf: 'center', top: 2}}
              source={require('../../assets/img/line.png')}></Image>
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginLeft: 10, height: 20, marginHorizontal : 10}}
          onPress={() => onDress()}>
          <Text
            style={{
              fontFamily: 'Helvetica Now Micro',
              color: tab == 2 ? 'black' : '#6B727C',
            }}>
            Dress
          </Text>
          {tab == 2 && (
            <Image
              style={{height: 3, width: 20, alignSelf: 'center', top: 2}}
              source={require('../../assets/img/line.png')}></Image>
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginLeft: 10, height: 20, marginHorizontal : 10}}
          onPress={() => onSkirt()}>
          <Text
            style={{
              fontFamily: 'Helvetica Now Micro',
              color: tab == 3 ? 'black' : '#6B727C',
            }}>
            Skirt
          </Text>
          {tab == 3 && (
            <Image
              style={{height: 3, width: 20, alignSelf: 'center', top: 2}}
              source={require('../../assets/img/line.png')}></Image>
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={{left: 10, height: 20, marginHorizontal : 10}}
          onPress={() => onPants()}>
          <Text
            style={{
              fontFamily: 'Helvetica Now Micro',
              color: tab == 4 ? 'black' : '#6B727C',
            }}>
            Pants
          </Text>
          {tab == 4 && (
            <Image
              style={{height: 3, width: 20, alignSelf: 'center', top: 2}}
              source={require('../../assets/img/line.png')}></Image>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ShopHeader;
