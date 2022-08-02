import { useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux"
import { cartTotalPriceSelector } from "../../redux/selectors";
import CheckoutItem from "./CheckoutItem";
import React from 'react';
import { jQuery } from "react_ujs";

export default function Checkout() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const totalPrice = useSelector(cartTotalPriceSelector)
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [shippingAddress, setShippingAddress] = useState();
  const [billingAddress, setBillingAddress] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    const requestOptions = {
      method: 'PUT',
      body: JSON.stringify({ order: {
          firstName: firstName,
          lastName: lastName,
          email: email,
          phone: phone,
          shippingAddress: shippingAddress,
          billingAddress: billingAddress,
          cart: cart
        }
      }),
      headers: {}
    }

    fetch('http://127.0.0.1:3000/api/v1/orders/create', requestOptions)
  }

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
      <Form className="checkoutForm" onSubmit={handleSubmit}>
        <div className="checkoutFormRow">
          <label>
            First Name:
            <input type="text" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          </label>
          <label>
            Last Name:
            <input type="text" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
          </label>
        </div>
        <div className="checkoutFormRow">
          <label>
            Email:
            <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
          </label>
          <label>
            Phone: 
            <input type="text" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)}/>
          </label>
        </div>
        <div className="checkoutFormRow">
          <label>
            Shipping Address:
            <input type="text" name="shippingAddress" value={shippingAddress} onChange={(e) => setShippingAddress(e.target.value)}/>
          </label>
          <label>
            Billing Address:
            <input type="text" name="billingAddress" value={billingAddress} onChange={(e) => setBillingAddress(e.target.value)}/>
          </label>
        </div> 
        <div className="checkoutFormRow">
          <input type="submit" value="Submit" />
        </div>
      </Form>
    </div>
  )
}