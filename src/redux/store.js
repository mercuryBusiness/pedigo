import {configureStore} from '@reduxjs/toolkit';
import homeScreenReducer from './homeScreen';
import globalStoreReducer from './globalStore';
import tabReducer from './tab';
import extendTabReducer from './extendTab';
import orderReducer from './order';

export const store = configureStore({
  reducer: {
    homeScreen: homeScreenReducer,
    globalStore: globalStoreReducer,
    tab: tabReducer,
    extendTab: extendTabReducer,
    order: orderReducer,
  },
});
