import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';

export default function index({
  inputValue,
  back,
  getFocus,
  getSearch,
  backPress,
}) {
  return (
    <View style={{width: '100%', flexDirection: 'row'}}>
      {getSearch == 0 ? (
        <>
          <View style={{width: '10%', paddingTop: 10}}>
            <Image
              style={{
                height: 20,
                width: 20,
                resizeMode: 'contain',
                alignSelf: 'center',
              }}
              source={require('../../assets/img/schedule.png')}></Image>
          </View>
          <View
            style={{
              width: '80%',
              backgroundColor: '#F8F8F8',
              flexDirection: 'row',
              borderRadius: 10,
            }}>
            <TextInput
              placeholder="Search"
              onChangeText={inputValue}
              onFocus={getFocus}
              onBlur={() => setFocus(false)}
              style={{padding: 10}}></TextInput>
            <Image
              style={{
                height: 15,
                width: 15,
                resizeMode: 'contain',
                position: 'absolute',
                right: 10,
                alignSelf: 'center',
              }}
              source={require('../../assets/img/search.png')}></Image>
          </View>
          <View style={{width: '10%', paddingTop: 10}}>
            <Image
              style={{
                height: 20,
                width: 20,
                resizeMode: 'contain',
                alignSelf: 'center',
              }}
              source={require('../../assets/img/dot.png')}></Image>
          </View>
        </>
      ) : (
        <>
          <TouchableOpacity
            onPress={backPress}
            style={{
              width: '10%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={require('../../assets/img/greyBack.png')}
              style={{height: 25, width: 25, resizeMode: 'contain'}}
            />
          </TouchableOpacity>
          <View
            style={{
              width: '85%',
              backgroundColor: '#F8F8F8',
              flexDirection: 'row',
              borderRadius: 15,
            }}>
            <TextInput
              placeholder="Search"
              onChangeText={inputValue}
              onFocus={getFocus}
              style={{padding: 10}}></TextInput>
            <Image
              style={{
                height: 15,
                width: 15,
                resizeMode: 'contain',
                position: 'absolute',
                right: 10,
                alignSelf: 'center',
              }}
              source={
                getSearch == 3
                  ? require('../../assets/img/close.png')
                  : require('../../assets/img/search.png')
              }></Image>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({});
