import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './Slices/counterSlice'
import cartDrawerReducer from './Slices/cartDrawer'
import cartDataReducer from './Slices/cartData'


export default configureStore({
  reducer: {
    counter: counterReducer,
    cartDrawer: cartDrawerReducer,
    cartData: cartDataReducer
  },
})