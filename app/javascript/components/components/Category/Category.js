import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Product from "../Products/Product";
import React from 'react';
// import { NotificationManager, NotificationContainer } from 'react-notifications';

export default function Category(props) {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    const url = `http://127.0.0.1:3000/api/v1/products/category/${params.category}`
    fetch(url)
    .then(res=> res.json())
    .then(json=>{
      setData(json);
    })
    .then(list => {
      setIsLoading(false);
    })
  }, []);

  return (
    <>
      {!isLoading ? (
        <div className="productsContainer">
          {data.map((product) => <Product product={product} key={product.id} category={params.category}/>)}
        </div>
      ) : (
        <><p>Loading...</p></>
      )}
    </>

  )
}