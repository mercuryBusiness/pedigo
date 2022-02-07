import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  orders: {},
  orderList: [],
  product: {},
};

export const order = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setOrders: (state, action) => {
      console.log('payload------->', action.payload);
      state.orders[action.payload.order.ORDERID] = action.payload;
    },
    setProduct: (state, action) => {
      state.product[action.payload.PRODUCTID] = action.payload;
    },
    setOrderList: (state, action) => {
      state.orderList = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setOrders, setProduct, setOrderList} = order.actions;

export default order.reducer;
