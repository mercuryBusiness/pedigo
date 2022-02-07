import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  indexBottomBar: 0,
  isHidden: false,
};

export const homeScreen = createSlice({
  name: 'homeScreen',
  initialState,
  reducers: {
    increment: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      if (state.indexBottomBar === 3) {
        state.indexBottomBar = 0;
      } else {
        state.indexBottomBar += 1;
      }
    },
    decrement: state => {
      if (state.indexBottomBar === 0) {
        state.indexBottomBar = 3;
      } else {
        state.indexBottomBar -= 1;
      }
    },
    incrementByAmount: (state, action) => {
      state.indexBottomBar += action.payload;
    },
    goToIndex: (state, action) => {
      state.indexBottomBar = action.payload;
    },
    setHidden: (state, action) => {
      state.isHidden = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {increment, decrement, incrementByAmount, goToIndex, setHidden} =
  homeScreen.actions;

export default homeScreen.reducer;
