import React, {useState} from 'react';
import {Box, HStack, VStack, Text, Stack} from 'native-base';
import {TouchableOpacity, Platform, StyleSheet, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {theme_colors} from '@util/color';

export default function ConfirmScreen({navigation}) {
  const height = Platform.OS === 'ios' ? 50 : 50;

  return (
    <SafeAreaView style={[styles.container, {paddingTop: height}]}>
      <Box px={5}>
        <VStack h={'100%'} mt={10}>
          <Box w="80%" h="30%" mb={6}>
            <Image
              style={styles.imageStyle}
              source={require('../../assets/img/verify.png')}
            />
          </Box>
          <HStack justifyContent="center" space={2} my={2}>
            <Text fontSize={24} bold color={theme_colors.grass}>
              Weldone!
            </Text>
          </HStack>
          <Stack alignItems="center" px={2}>
            <Text color={theme_colors.subText} fontSize={12}>
              You are warmly welcome to the team. Your login details
            </Text>
            <Text color={theme_colors.subText} fontSize={12}>
              will be forwarded to your mail once your information is
            </Text>
            <Text color={theme_colors.subText} fontSize={12}>
              verified
            </Text>
          </Stack>
          <HStack justifyContent="center" alignItems="center" mt={16}>
            <TouchableOpacity
              onPress={() => {
                // navigation.navigate('');
              }}
              style={[styles.button, {backgroundColor: theme_colors.primary}]}>
              <HStack justifyContent="center" py={3}>
                <Text color="white" bold>
                  Go to login
                </Text>
              </HStack>
            </TouchableOpacity>
          </HStack>
        </VStack>
      </Box>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    width: '100%',
    flexDirection: 'column',
  },
  imageStyle: {
    left: '20%',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  button: {
    width: '100%',
    borderRadius: 5,
    borderColor: theme_colors.primary,
    borderWidth: 1,
  },
});
