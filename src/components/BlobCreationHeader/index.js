import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import fonts from '../../assets/font/fonts';

export default function Header({onBack}) {
  return (
    <View
      style={{
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginHorizontal: 15,
      }}>
      <TouchableOpacity onPress={onBack}>
        <Image
          source={require('../../assets/img/BlogCreation/greyBack.png')}
          style={{height: 25, width: 25, resizeMode: 'contain'}}></Image>
      </TouchableOpacity>
      <Text
        style={{
          fontFamily: fonts.fontRegular,
          fontWeight: '400',
          alignSelf: 'center',
        }}>
        Create
      </Text>
      <TouchableOpacity>
        <Image
          source={require('../../assets/img/BlogCreation/info.png')}
          style={{height: 25, width: 25, resizeMode: 'contain'}}></Image>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
