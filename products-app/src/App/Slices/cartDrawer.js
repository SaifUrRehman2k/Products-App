import { createSlice } from '@reduxjs/toolkit'


const cartDrawerSlice = createSlice({
  name: 'cartDrawer',
  initialState: {
    value: 0
  },
  reducers: {
    openCart: (state) => {
        state.value = 1; 
    },
    closeCart: (state) => {
        state.value = 0;
    }
  }
});

export const { openCart , closeCart } = cartDrawerSlice.actions;
export default cartDrawerSlice.reducer;