import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Creation from './Creation';
import Mention from './Mention';

export default function main() {
  const [mention, setMention] = useState(false);
  return (
    <View style={{flex: 1}}>
      {mention ? (
        <Mention goBack={() => setMention(false)} />
      ) : (
        <Creation mentionPress={() => setMention(true)} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({});
