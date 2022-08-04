import { Link, Outlet } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cart-slice";
import React from 'react';

export default function Product(props) {
  const [data, setData] = useState(props.product);
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  function handleChange(event) {
    const value = event.replace(/\+|-/ig, '');
    setQuantity(value);
  }

  return (
    <>
      {data ? (
        <>
          <Link to={`/product/${props.product.id}`} className="productCard" state={{data: data}}>
            <div className="productCardLeft">
              <img src={data.image} className="productImage"></img>
            </div>
            <div className="productCardRight">
              <p>{data.title}</p>
              <p>${data.price}</p>
            </div>
          </Link>
          <div>
            <input type="text" pattern="[0-9]*" value={quantity} onChange={(e) => handleChange(e.target.value)}/>
            <button onClick={() => {
                dispatch(addToCart([data, quantity]))
              }}>Add to Cart</button>
          </div>
        </>
      ) : (
        <></>
      )}
      <Outlet />
    </>
  )
}