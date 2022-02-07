import axios from 'react-native-axios';
import {baseUrl} from '@util';
// import { Overlay } from 'react-native';
import Toast from 'react-native-simple-toast';
const option = {
  baseURL: baseUrl,
  timeout: 1000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    // token          : Users.user?._id
  },
};

const instance = axios.create(option);
// const Toast = Overlay.Toast;

//请求拦截处理
instance.interceptors.request.use(
  function (config) {
    // console.log("config--->",config);
    // const {Users} = global.store.getState();
    // console.log("Users===>>>",Users.user?._id);
    // if (Users.user?._id) {
    //   config.headers.token = Users.user?._id;
    // }
    config.headers.token = '5dc634020347563e8babd227';
    // 在发送请求之前做些什么
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  },
);

//返回拦截处理
instance.interceptors.response.use(
  function (response) {
    console.log('response--->', response);
    if (response?.data?.code == 401) {
      //console.log('未登陆');
      // const {Navigation} = global.store.getState();
      // Navigation?.navigation?.replace("Login");
      return null;
    }
    if (response?.status !== 200) {
      Toast.show(response?.statusText || 'server error', Toast.LONG);
      // Toast.show(response?.statusText || 'server error');
      return null;
    }
    // 对响应数据做点什么
    return response;
  },
  function (error, req) {
    Toast.show('server error', Toast.LONG);
    // Toast.show('server error');
    // 对响应错误做点什么
    return Promise.reject(error);
  },
);

export default class HttpUtil {
  static get(url, params = {}) {
    console.log('url=====>', url);
    console.log('params=====>', params);
    return new Promise((resolve, reject) => {
      instance
        .get(url, {
          url,
          params,
        })
        .then(response => {
          console.log('response--->', response);
          resolve(response.data);
        })
        .catch(reject);
    });
  }

  static post(url, data = {}, header = {}) {
    return new Promise((resolve, reject) => {
      console.log(data);
      instance
        .post(url, data, header)
        .then(response => {
          console.log(response);
          resolve(response.data);
        })
        .catch(reject);
    });
  }
  static put(url, data = {}) {
    return new Promise((resolve, reject) => {
      instance
        .put(url, data)
        .then(response => {
          resolve(response.data);
        })
        .catch(reject);
    });
  }

  static patch(url, data = {}, header = {}) {
    return new Promise((resolve, reject) => {
      instance
        .patch(url, data, header)
        .then(response => {
          resolve(response.data);
        })
        .catch(reject);
    });
  }
  static delete(url, data) {
    return new Promise((resolve, reject) => {
      instance
        .delete(url, {
          params: data,
        })
        .then(response => {
          resolve(response.data);
        })
        .catch(reject);
    });
  }
}
