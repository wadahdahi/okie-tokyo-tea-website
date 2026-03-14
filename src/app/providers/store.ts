import { configureStore } from '@reduxjs/toolkit'
import uiReducer from '../../shared/lib/uiSlice'
import cartReducer from '../../features/cart/cartSlice'

// REDUX STORE CONFIGURATION
export const store = configureStore({
  reducer: {
    ui: uiReducer,
    cart: cartReducer,
  },
})

// TYPE DEFINITIONS FOR REDUX HOOKS
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
