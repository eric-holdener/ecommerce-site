import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cart-slice";

export default function ProductDetails() {
  const [data, setData] = useState(null);
  const params = useParams();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.productId}`)
      .then(res => res.json())
      .then(json => setData(json))
  }, [])

  function handleChange(event) {
    const value = event.replace(/\+|-/ig, '');
    setQuantity(value);
  }


  return(
    <div>
      {data ? (
        <>
          <div>
            <img src={data.image} className="productImage"></img>
          </div>
          <div>
            <h1>{data.title}</h1>
            <p>{data.description}</p>
          </div>   
          <div>
          <input type="text" pattern="[0-9]*" value={quantity} onChange={(e) => handleChange(e.target.value)}/>
            <button onClick={() => {
                  dispatch(addToCart([data, quantity]))
                }}>Add to Cart
            </button>
          </div>     
        </>
      ) : (
        <>
         <p>Loading...</p>
        </>
      )}

    </div>
  )
}