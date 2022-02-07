import React, {
  Platform,
  Dimensions,
  PixelRatio,
  NativeModules,
} from 'react-native';

export const width = Dimensions.get('window').width;
export const height = Dimensions.get('window').height;
export const baseUrl =
  'http://Casaideasdev-env.eba-vyxpexep.sa-east-1.elasticbeanstalk.com/';
// export const baseUrl = 'http://192.168.1.5:8456/'

export class AppUtil {
  static px2db(px) {
    const ratio = Dimensions.get('window').width / 375;
    return ratio * px;
  }

  static message(data) {
    return data;
  }

  static format(t) {
    return Number(t)
      .toFixed(2)
      .replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
  }

  static config() {
    return {
      defImgUrl:
        'https://kain-jakarta.oss-ap-southeast-5.aliyuncs.com/icon.png',
    };
  }
}
