import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

export default function Order() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [finalProducts, setFinalProducts] = useState({});
  const params = useParams();
  const [dom, setDom] = useState(null);

  useEffect(() => {
    fetch(`http://127.0.0.1:3000/api/v1/orders/order/${params.orderId}`)
      .then(res => res.json())
      .then(json => {
        setData(json)
        return json})
      .then(data => {
        newDataCreator(data);
        return data;
      })
      .then(loading => setIsLoading(false))
  }, [params.orderId])

  function newDataCreator(data) {
    let intermediate = {};
    data.products.map((product) => {
      if (product.id in intermediate) {
        intermediate[product.id].quantity += 1;
      } else {
        intermediate[product.id] = {
          price: product.price,
          quantity: 1,
          title: product.title,
          image: product.image,
          id: product.id
        };
      };
    })
    setFinalProducts(intermediate);
  }

  function printProducts() {
    return (
      <>
        {Object.entries(finalProducts).map(([key, product]) => {
          return (
            <Link to={`/product/${product.id}`} className='orderProductCard' id={`product-${product.id}`} state={{data: data}} key={product.id.id}>
              <div className="orderProductCardLeft">
                <img src={product.image} className="orderProductImage"></img>
              </div>
              <div className="orderProductCardRight">
                <p className='orderProductTitle'>{product.title}</p>
                <div style={{display: "flex"}}>
                  <p>$</p>
                  <p id={`productprice-${product.id}`} className='orderProductPrice'>{product.price}</p>
                </div>
                <div style={{display: "flex"}}>
                  <p>Quantity:</p>
                  <p id={`productquantity-${product.id}`} className='orderProductQuantity'>{product.quantity}</p>
                </div>
              </div>
            </Link> 
          )}
        )}
      </>
    )
  }

  return (
    <>
      {!isLoading ? (
        <>
          <div className='orderInfoContainer'>
            <div><h1>Order #{params.orderId}</h1></div>
            <div className='orderInfoSubContainer'>
              <h2 className='orderInfo'>Order Status: {data.status}</h2>
              <h2 className='orderInfo'>Total Cost: ${data.total_cost}</h2>
              {data.ship_date ? (
                <h2 className='orderInfo'>Shipped On: {data.ship_date}</h2>
              ) : (
                <h2 className='orderInfo'>Not yet shipped</h2>
              )}
              {data.deliver_date ? (
                <h2 className='orderInfo'>Delivered On: {data.deliver_date}</h2>
              ) : (
                <h2 className='orderInfo'>Not yet delivered</h2>
              )}
            </div>
          </div>
          <div className='orderProductsContainer'>
            {printProducts()}
          </div>        
        </>

      ) : (
        <div>
          <p>Loading...</p>
        </div>
      )}
    </>
  )
}