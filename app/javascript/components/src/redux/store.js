import { configureStore } from "@reduxjs/toolkit"
import cartReducer from './cart-slice'

const Store = configureStore({
  reducer: {
    cart: cartReducer
  }
})

export default Store;