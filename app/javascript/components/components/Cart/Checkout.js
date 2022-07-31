import { useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux"
import { cartTotalPriceSelector } from "../../redux/selectors";
import CheckoutItem from "./CheckoutItem";
import React from 'react';

export default function Checkout() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const totalPrice = useSelector(cartTotalPriceSelector)

  return (
    <div className="checkoutContainer">
      <div className="checkoutItems">
        {cart && cart.map((product) => {
          return <CheckoutItem item={product} key={product.id} />
        })}
        <div>
          {totalPrice > 0 && <div>Total: ${totalPrice}</div>}
        </div>
      </div>
      <Form className="checkoutForm">
        <div className="checkoutFormRow">
          <label>
            First Name:
            <input type="text" name="firstName" />
          </label>
          <label>
            Last Name:
            <input type="text" name="lastName" />
          </label>
        </div>
        <div className="checkoutFormRow">
          <label>
            Email:
            <input type="text" name="email" />
          </label>
          <label>
            Phone: 
            <input type="text" name="phone" />
          </label>
        </div>
        <div className="checkoutFormRow">
          <label>
            Shipping Address:
            <input type="text" name="shippingAdress" />
          </label>
          <label>
            Billing Address:
            <input type="text" name="billingAddress" />
          </label>
        </div> 
        <div className="checkoutFormRow">
          <input type="submit" value="Submit" />
        </div>
      </Form>
    </div>
  )
}