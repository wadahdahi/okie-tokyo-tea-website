import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UIState {
  isCartOpen: boolean;
}

const initialState: UIState = {
  isCartOpen: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleCart: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
    setCartOpen: (state, action: PayloadAction<boolean>) => {
      state.isCartOpen = action.payload;
    },
  },
});

export const { toggleCart, setCartOpen } = uiSlice.actions;
export default uiSlice.reducer;
