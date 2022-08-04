import CartItem from "./CartItem";
import { Dropdown } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clear } from "../../redux/cart-slice";
import { Link } from "react-router-dom";
import React from 'react';
import "bootstrap/dist/css/bootstrap.css";

export default function ShoppingCart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  return (
    <div className="headerLinksCart">
        <Dropdown className="dropdownZIndex">
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Cart
          </Dropdown.Toggle>
          <Dropdown.Menu className="dropdownZIndex">
            {cart.length ? (
              <>
                {cart && cart.map((product) => {
                  return <CartItem item={product} key={product.id}/>
                })}
                <div className="cartButtons">
                  <Dropdown.Item>
                    <button onClick={() => dispatch(clear())}>Clear Cart</button>
                  </Dropdown.Item>
                  <Link to={`/checkout`} ><button>Checkout</button></Link>
                </div>
              </>
            ): (
              <Dropdown.Item>
                <p>Your cart is empty</p>
              </Dropdown.Item>
            )}

          </Dropdown.Menu>
        </Dropdown> 
    </div>
  )
}