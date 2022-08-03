import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Order() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();


  useEffect(() => {
    fetch(`http://127.0.0.1:3000/api/v1/orders/order/${params.orderId}`)
      .then(res => res.json())
      .then(json => setData(json))
  }, [])
  return (
    <>
      {data ? (
        <>
          <div>
            <h1>Order #{params.orderId}</h1>
            <h2>Order Status: {data.status}</h2>
            <h2>Total Cost: {data.total_cost}</h2>
            {data.ship_date ? (
              <h2>Shipped On: {data.ship_date}</h2>
            ) : (
              <h2>Not yet shipped</h2>
            )}
            {data.deliver_date ? (
              <h2>Delivered On: {data.deliver_date}</h2>
            ) : (
              <h2>Not yet delivered</h2>
            )}
          </div>
          <div>
            {data.products.map((product) => {
              return (
                <div className='productCard'>
                  <div className="productCardLeft">
                    <img src={product.image} className="productImage"></img>
                  </div>
                  <div className="productCardRight">
                    <p>{product.title}</p>
                    <p>{product.description}</p>
                    <p>{product.price}</p>
                  </div>
                </div>
              )
            })}
            {console.log(data)}
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