import 'react-native-gesture-handler';
import React, {Component, StrictMode} from 'react';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import {NativeBaseProvider, Box} from 'native-base';
import {View, StyleSheet} from 'react-native';
import MainScreen from './screens/MainScreen';
console.disableYellowBox = true;
console.reportErrorsAsExceptions = false;

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <StrictMode>
        <View style={styles.container}>
          <Provider store={store}>
            <NativeBaseProvider>
              <MainScreen />
            </NativeBaseProvider>
          </Provider>
        </View>
      </StrictMode>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
