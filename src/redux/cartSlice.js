import { createSlice } from '@reduxjs/toolkit';

// 장바구니 초기 상태
const initialState = {
  items: [], // 장바구니에 담긴 아이템 배열
};

// createSlice()로 slice 생성
const cartSlice = createSlice({
  name: 'cart', // slice 이름
  initialState,
  reducers: {
    // 장바구니에 아이템 추가
    addItem: (state, action) => {
      // 이미 같은 아이템이 있는지 확인
      const existing = state.items.find(el => el.id === action.payload.id);
      if (existing) {
        existing.quantity += action.payload.quantity || 1; // 수량 증가
      } else {
        // 새 아이템이면 push
        state.items.push({ ...action.payload, quantity: action.payload.quantity || 1 });
      }
    },
    // 장바구니에서 아이템 삭제
    removeItem: (state, action) => {
      state.items = state.items.filter(el => el.id !== action.payload);
    },
    // 장바구니 비우기
    clearCart: (state) => {
      state.items = [];
    },
  },
});

// 액션과 reducer export
export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
