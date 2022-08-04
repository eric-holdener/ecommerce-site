
import { useDispatch } from "react-redux"
import {  decrement, increment, deleteFromCart } from "../../redux/cart-slice";
import React from 'react';

export default function CheckoutItem(props) {
  const dispatch = useDispatch();

  return(
    <>
        <div className="checkoutItemContainer">
          <div className="checkoutItemImage">
            <img src={props.item.image} className="productImageCheckout"></img>
          </div>
          <div className="checkoutItemData">
            <h1 className="productTitle">{props.item.title}</h1>
            <p>Price: ${props.item.price}</p>
            <p>Quantity: {props.item.quantity}</p>
            <p>Total Price: ${parseInt(props.item.price)*props.item.quantity}</p>
            <div>
              <button onClick={() => dispatch(increment(props.item.id))}>+1</button>
              <button onClick={() => dispatch(decrement(props.item.id))}>-1</button>
              <button onClick={() => dispatch(deleteFromCart(props.item.id))}>X</button>
            </div>
          </div>
        </div>
    </>
  )
}