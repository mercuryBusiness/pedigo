import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  requireLogin: false,
};

export const globalStore = createSlice({
  name: 'globalStore',
  initialState,
  reducers: {
    toggleReguireLogin: state => {
      state.requireLogin = !state.requireLogin;
    },
  },
});

// Action creators are generated for each case reducer function
export const {toggleReguireLogin} = globalStore.actions;

export default globalStore.reducer;
