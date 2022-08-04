import { Dropdown } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { clear, decrement, deleteFromCart, increment } from "../../redux/cart-slice";
import React from 'react';

export default function CartItem(props) {
  const dispatch = useDispatch();

  return(
    <>
      <Dropdown.Item>
        <div className="cartItemContainer">
          <div className="cartItemImage">
            <img src={props.item.image} className="productImageCheckout"></img>
          </div>
          <div className="cartItemData">
            <p style={{fontWeight: "bold"}}>{props.item.title}</p>
            <p>Price: ${props.item.price}</p>
            <p>Quantity: {props.item.quantity}</p>
            <p>Total Price: ${parseFloat(props.item.price)*props.item.quantity}</p>
            <div>
              <button onClick={() => dispatch(increment(props.item.id))}>+1</button>
              <button onClick={() => dispatch(decrement(props.item.id))}>-1</button>
              <button onClick={() => dispatch(deleteFromCart(props.item.id))}>X</button>
            </div>
          </div>
        </div>
      </Dropdown.Item>
    </>
  )
}