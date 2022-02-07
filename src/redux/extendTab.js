import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  indexTab: 0,
};

export const extendTab = createSlice({
  name: 'extendTab',
  initialState,
  reducers: {
    increment: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      if (state.indexTab === 3) {
        state.indexTab = 0;
      } else {
        state.indexTab += 1;
      }
    },
    decrement: state => {
      if (state.indexTab === 0) {
        state.indexTab = 3;
      } else {
        state.indexTab -= 1;
      }
    },
    incrementByAmount: (state, action) => {
      state.indexTab += action.payload;
    },
    goToIndex: (state, action) => {
      state.indexTab = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {increment, decrement, incrementByAmount, goToIndex} =
  extendTab.actions;

export default extendTab.reducer;
