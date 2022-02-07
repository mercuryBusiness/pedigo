import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';

const Header = ({back}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
      }}>
      <TouchableOpacity onPress={back}>
        <Image
          style={{height: 20, width: 20, resizeMode: 'contain'}}
          source={require('../assets/img/back.png')}></Image>
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          style={{
            height: 20,
            width: 20,
            resizeMode: 'contain',
            tintColor: '#fff',
          }}
          source={require('../assets/img/share.png')}></Image>
      </TouchableOpacity>
    </View>
  );
};

export default Header;
