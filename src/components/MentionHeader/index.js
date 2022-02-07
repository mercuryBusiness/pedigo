import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import fonts from '../../assets/font/fonts';

export default function index({close}) {
  return (
    <View
      style={{
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginHorizontal: 15,
      }}>
      <TouchableOpacity onPress={close}>
        <Image
          source={require('../../assets/img/close.png')}
          style={{height: 25, width: 25, resizeMode: 'contain'}}></Image>
      </TouchableOpacity>
      <Text
        style={{
          fontFamily: fonts.fontRegular,
          fontWeight: '400',
          alignSelf: 'center',
        }}>
        @Mention
      </Text>
      <View style={{height: 25, width: 25}} />
    </View>
  );
}

const styles = StyleSheet.create({});
