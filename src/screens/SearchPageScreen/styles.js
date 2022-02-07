import {StyleSheet, Dimensions} from 'react-native';

let window = Dimensions.get('window');

const styles = StyleSheet.create({
  EditProfileBtn: {
    // flex: 1,
    borderColor: '#fff',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    height: 35,
    width: 110,
    borderRadius: 20,
    right: 10,
  },
  PostView: {
    marginTop: 10,
    height: window.height - 320,
    borderTopWidth: 1,
    borderColor: '#F8F8F8',
  },
});

export default styles;
