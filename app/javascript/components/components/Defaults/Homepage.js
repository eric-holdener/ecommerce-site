import CategoryCard from "../Category/CategoryCard"
import { useState, useEffect } from "react";
import React from 'react';

export default function Homepage(props) {
  const [categories, setCategories] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const url = "api/v1/products/categories"
    fetch(url)
          .then(res => res.json())
          .then(data => {
            setCategories(data);
            setIsLoading(false);
          });
  }, [])

  return (
    <>
      {!isLoading ? (
        <div className="categoriesContainer">
          {categories.map((category) => <CategoryCard category={category} key={category}/>)}
        </div>
      ) : (
        <>
          <div className="categoriesContainer">
            <p>Loading...</p>
          </div>
        </>
      )}
    </>
  )
}