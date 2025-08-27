import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import menuReducer from './menuSlice';

// Redux store 생성
export const store = configureStore({
  reducer: {
    cart: cartReducer, // cart slice 연결
    menu: menuReducer, // menu slice 연결
  },
});
