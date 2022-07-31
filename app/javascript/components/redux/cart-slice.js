import { createSlice } from "@reduxjs/toolkit"
import React from 'react';

const initialState = []

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clear: (state) => {
      return [];
    },
    addToCart: (state, { payload }) => {
      const id  = payload[0].id;

      const itemExists = state.find((item) => item.id == id);
      if(itemExists) {
        return state.map((item) => {
          if(item.id == id) {
            return {
              ...item, quantity: item.quantity + parseInt(payload[1])
            }
          }
          return item;
        })
      } else {
        state.push({
          ...payload[0], quantity: parseInt(payload[1])
        })
      }
    },
    increment: (state, { payload }) => {
      return state.map((item) => {
        if(item.id == payload) {
          return {
            ...item, quantity: item.quantity + 1
          }
        }
        return item;
      })
    },
    decrement: (state, { payload }) => {
      return state.map((item) => {
        if(item.id == payload) {
          if (item.quantity == 1) {
            return item
          } else {
            return {
              ...item, quantity: item.quantity - 1
            }
          }
        }
        return item;
      })
    },
    deleteFromCart: (state, { payload }) => {
      return state.filter(item => item.id != payload)
    }
  }
})

export const { addToCart, increment, decrement, clear, deleteFromCart } = cartSlice.actions;
const cartReducer = cartSlice.reducer;

export default cartReducer;