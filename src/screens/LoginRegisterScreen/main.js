import React, {useState} from 'react';
import {Box, HStack, VStack, Text, Stack} from 'native-base';
import {
  TouchableOpacity,
  Dimensions,
  Platform,
  StyleSheet,
  Image,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {theme_colors} from '@util/color';

export default function MainScreen({navigation}) {
  const height = Platform.OS === 'ios' ? 50 : 50;
  const top = Platform.OS === 'ios' ? 50 : 15;
  const screen = Dimensions.get('screen');

  return (
    <SafeAreaView style={[styles.container, {paddingTop: height}]}>
      <Box style={[styles.header, {height: height, top: top}]}>
        <Box flex={1}>
          <HStack px={5} alignItems="center" justifyContent="center">
            <Text fontSize={20} bold color={theme_colors.primary}>
              PediGo
            </Text>
            <Text />
          </HStack>
        </Box>
      </Box>
      <Box px={5}>
        <VStack h={'100%'}>
          <Box w="100%" h="60%">
            <Image
              style={styles.imageStyle}
              source={require('../../assets/img/logo.gif')}
            />
          </Box>
          <HStack justifyContent="center" space={2} mb={2}>
            <Text fontSize={20} bold color={theme_colors.headerText}>
              Earn
            </Text>
            <Text fontSize={20} bold color={theme_colors.primary}>
              Quick
            </Text>
            <Text fontSize={20} bold color={theme_colors.headerText}>
              Money
            </Text>
          </HStack>
          <Stack alignItems="center">
            <Text color={theme_colors.subText}>
              Earn money with us regularly as you take your
            </Text>
            <Text color={theme_colors.subText}>
              time to deliver our products.
            </Text>
          </Stack>
        </VStack>
      </Box>
      <Box px={5} style={[styles.bottomArea, {bottom: top}]}>
        <HStack justifyContent="space-between" alignItems="center" space={2}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('step1');
            }}
            style={[styles.button, {backgroundColor: 'white'}]}>
            <HStack justifyContent="center" py={3}>
              <Text color={theme_colors.subText} bold>
                Register
              </Text>
            </HStack>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            style={[styles.button, {backgroundColor: theme_colors.primary}]}>
            <HStack justifyContent="center" py={3}>
              <Text color="white" bold>
                Login
              </Text>
            </HStack>
          </TouchableOpacity>
        </HStack>
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
  header: {
    backgroundColor: 'transparent',
    position: 'absolute',
    width: '100%',
    zIndex: 1,
  },
  imageStyle: {
    left: -50,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  bottomArea: {
    position: 'absolute',
    width: '100%',
    height: 80,
    justifyContent: 'center',
  },
  button: {
    width: '45%',
    borderRadius: 5,
    borderColor: theme_colors.primary,
    borderWidth: 1,
  },
});
