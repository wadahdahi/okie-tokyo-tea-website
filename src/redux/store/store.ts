import { configureStore } from '@reduxjs/toolkit'
import uiReducer from '../slices/uiSlice'

// REDUX STORE CONFIGURATION
export const store = configureStore({
  reducer: {
    ui: uiReducer,
  },
})

// TYPE DEFINITIONS FOR REDUX HOOKS
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
