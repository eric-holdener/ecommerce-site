import { createSelector } from "@reduxjs/toolkit";
import React from 'react';

const cartSelector = (state) => state.cart;

export const cartTotalPriceSelector = createSelector([cartSelector], (cart) => 
  cart.reduce(
    (total, current) => (total += current.price * current.quantity), 0
  )
)