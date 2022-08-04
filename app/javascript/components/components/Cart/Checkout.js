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
  const [discount, setDiscount] = useState([{percent: 0}]);
  const [discountCode, setDiscountCode] = useState("")
  const [intermediateDiscountCode, setIntermediateDiscountCode] = useState("")
  const navigate = useNavigate()

  useEffect(() => {
    fetch(`https://mighty-mountain-39829.herokuapp.com/api/v1/discounts/${discountCode}`)
      .then(res => res.json())
      .then(json => setDiscount(json))
  }, [discountCode])

  function handleSubmit(e) {
    e.preventDefault();
    let orderDict = {}
    if (discount[0].percent > 0) {
      orderDict = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        shippingAddress: shippingAddress,
        billingAddress: billingAddress,
        cart: cart,
        discount: {
          discount_id: discount[0].id,
          percent: discount[0].percent,
          code: discount[0].code,
        }
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
    console.log(orderDict)
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
          {totalPrice > 0 && <div>Total: ${totalPrice - (totalPrice*(discount[0].percent))}</div>}
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
          <div>
            <label>
              Apply Discount:
              <input type="text" name="discountCode" value={intermediateDiscountCode} onChange={(e) => setIntermediateDiscountCode(e.target.value)} />
            </label>
            <button onClick={() => checkDiscountCode()}>Check Discount</button>
          </div>
        </div>
      </div>

    </div>
  )
}