import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FlatList} from 'native-base';

export default function CardView({gallary, _renderItem}) {
  return (
    <View style={{height: 300}}>
      <FlatList
        data={gallary}
        horizontal
        style={{padding: 15, marginRight : 15, alignSelf : "center"}}
        contentContainerStyle={{paddingRight : 15}}
        showsHorizontalScrollIndicator={false}
        renderItem={_renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
