import { useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux"
import { cartTotalPriceSelector } from "../../redux/selectors";
import CheckoutItem from "./CheckoutItem";
import React from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Checkout() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const totalPrice = useSelector(cartTotalPriceSelector)
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [shippingAddress, setShippingAddress] = useState("");
  const [billingAddress, setBillingAddress] = useState("");
  const [discount, setDiscount] = useState({percent: 0});
  const [discountCode, setDiscountCode] = useState("")
  const [intermediateDiscountCode, setIntermediateDiscountCode] = useState("")
  const navigate = useNavigate()

  useEffect(() => {
    fetch(`http://127.0.0.1:3000/api/v1/discounts/${discountCode}`)
      .then(res => res.json())
      .then(json => setDiscount(json))
  }, [discountCode])

  function handleSubmit(e) {
    e.preventDefault();
    let orderDict = {}
    if (discount.percent > 0) {
      orderDict = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        shippingAddress: shippingAddress,
        billingAddress: billingAddress,
        cart: cart,
        discount: discount
      }
    } else {
      orderDict = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        shippingAddress: shippingAddress,
        billingAddress: billingAddress,
        cart: cart,
      }
    }
    const token = document.querySelector('[name=csrf-token]').content
    axios.defaults.headers.common['X-CSRF-TOKEN'] = token
    axios.post('http://127.0.0.1:3000/api/v1/orders/create', {
      order: orderDict
    })
    .then(res => {
      navigate(`/orders/${res.data.id}`, {replace: true})
    })
  }

  function checkDiscountCode() {
    setDiscountCode(intermediateDiscountCode);
  }

  return (
    <div className="checkoutContainer">
      <div className="checkoutItems">
        {cart && cart.map((product) => {
          return <CheckoutItem item={product} key={product.id} />
        })}
        <div>
          {discount.code ? (
            <>
              <p>Discount code applied: {discount.code}</p>
              <p>% off: {discount.percent}</p>
            </>
          ) : (
            <p>No discount applied</p>
          )}
          {totalPrice > 0 && <div>Total: ${totalPrice - (totalPrice*discount.percent)}</div>}
        </div>
      </div>
      <div>
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
        <div>
          <Form onSubmit={checkDiscountCode}>
            <label>
              Apply Discount:
              <input type="text" name="discountCode" value={intermediateDiscountCode} onChange={(e) => setIntermediateDiscountCode(e.target.value)} />
            </label>
            <input type="submit" value="Submit" />
          </Form>
        </div>
      </div>

    </div>
  )
}