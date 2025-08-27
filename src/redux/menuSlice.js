import { createSlice } from '@reduxjs/toolkit';
import data from '../assets/data';

// 메뉴 초기 상태
const initialState = {
  menuList: [...data.menu.커피, ...data.menu.논커피], // 기존 메뉴 데이터 병합
};

// createSlice()로 slice 생성
const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    // 메뉴 상태 변경 가능 (필요 시)
    setMenu: (state, action) => {
      state.menuList = action.payload;
    },
  },
});

// 액션과 reducer export
export const { setMenu } = menuSlice.actions;
export default menuSlice.reducer;
