import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  indexTab: 0,
};

export const tab = createSlice({
  name: 'tab',
  initialState,
  reducers: {
    increment: state => {
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
    goToBlog: (state, action) => {
      console.log('state====>', state, action);
      state.indexTab = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {increment, decrement, incrementByAmount, goToIndex, goToBlog} =
  tab.actions;

export default tab.reducer;
