import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Order() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    const url = `http://127.0.0.1:3000/api/v1/orders/order/${params.orderId}`
    fetch(url)
    .then(res=> {
      console.log(res);
      res.json();
    })
    .then(json=>{
      console.log(json)
      setData(json);
    })
    .then(list => {
      setIsLoading(false);
    })
  }, []);
  return (
    <>
      {data ? (
        <>
          <div>
            <p>Order #{params.orderId}</p>
          </div>
          <div>
            {/* {data.products.map((product) => {
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
            })} */}
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