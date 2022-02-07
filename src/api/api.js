import axios from './request';

// Auth

export const login = data => {
  console.log('data------>', data);
  return axios.post('api/frontend/login', data);
};

// Order

export const getOrderByCustomerId = data => {
  return axios.post('api/frontend/getOrderByCustomerId', data);
};

// getWishlist

export const getWishlist = data => {
  return axios.post('api/frontend/getWishlist', data);
};

//getHeaderMenu

export const getHeaderMenu = data => {
  return axios.post('customerapi/getHeaderMenu', data);
};

//getCategories

export const getCategories = data => {
  return axios.post('customerapi/getCategories', data);
};

//getOrderById

export const getOrderById = data => {
  return axios.post('api/frontend/getOrderById', data);
};

//getProductById

export const getProductById = data => {
  return axios.post('customerapi/getProductById', data);
};

//getFilterProducts

export const getFilterProducts = data => {
  return axios.get('customerapi/getFilterProducts', data);
};

//setOrders

export const setOrders = data => {
  return axios.put('api/frontend/setOrders', data);
};

//addWishlist

export const addWishlist = data => {
  return axios.put('api/frontend/addWishlist', data);
};
