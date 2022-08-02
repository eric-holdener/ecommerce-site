import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Order() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    const url = `http://127.0.0.1:3000/api/v1/products/category/${params.orderId}`
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
      {data ? (
        <div>
          <p>Data</p>
          {console.log(data)}
        </div>
      ) : (
        <div>
          <p>Loading...</p>
        </div>
      )}
    </>
  )
}