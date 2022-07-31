import { configureStore } from "@reduxjs/toolkit"
import cartReducer from './cart-slice'
import React from 'react';

const Store = configureStore({
  reducer: {
    cart: cartReducer
  }
})

export default Store;