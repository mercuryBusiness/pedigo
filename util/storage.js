import AsyncStorage from '@react-native-async-storage/async-storage';

export class storage {
  static async setItem(key, value) {
    console.log('key---->', key);
    console.log('key---->', value);
    return await AsyncStorage.setItem(key, JSON.stringify(value));
  }
  static getItem(key) {
    return new Promise((resolve, reject) => {
      AsyncStorage.getItem(key).then(data => {
        resolve(JSON.parse(data));
      });
    });
  }

  static async removeItem(key) {
    return await AsyncStorage.removeItem(key);
  }
}
